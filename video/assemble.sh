#!/bin/bash
set -e

BASEDIR="/Users/lucasgabriel/.openclaw/workspace/fitoplanta-natural-hub/video"
AUDIO="$BASEDIR/audio"
CLIPS="$BASEDIR/clips"
OUTPUT="$BASEDIR/output"

# Target resolution
W=1280
H=720

echo "🎬 Step 1: Concatenating voiceover segments with 0.8s gaps..."

# Create silence gap
ffmpeg -y -f lavfi -i anullsrc=r=44100:cl=mono -t 0.8 -q:a 9 "$AUDIO/silence.mp3" 2>/dev/null

# Build concat list
cat > "$AUDIO/vo_list.txt" << EOF
file '01_hook.mp3'
file 'silence.mp3'
file '02_problem.mp3'
file 'silence.mp3'
file '03_whoweare.mp3'
file 'silence.mp3'
file '04_marta.mp3'
file 'silence.mp3'
file '05_mission.mp3'
file 'silence.mp3'
file '06_cta.mp3'
EOF

ffmpeg -y -f concat -safe 0 -i "$AUDIO/vo_list.txt" -c copy "$AUDIO/vo_full.mp3" 2>/dev/null
VO_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$AUDIO/vo_full.mp3")
echo "   Full VO duration: ${VO_DUR}s"

echo "🎬 Step 2: Normalizing all video clips to ${W}x${H}..."

mkdir -p "$CLIPS/normalized"

normalize_clip() {
  local input="$1"
  local output="$2"
  ffmpeg -y -i "$input" \
    -vf "scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H},setsar=1" \
    -c:v libx264 -preset fast -crf 23 -r 30 -an \
    -t 20 \
    "$output" 2>/dev/null
}

for clip in "$CLIPS"/*.mp4; do
  name=$(basename "$clip")
  echo "   Normalizing $name..."
  normalize_clip "$clip" "$CLIPS/normalized/$name"
done

echo "🎬 Step 3: Building video timeline..."

# Calculate segment durations (VO + gap)
DUR_01=7.4    # hook 6.6 + gap
DUR_02=14.2   # problem 13.4 + gap
DUR_03=14.5   # whoweare 13.7 + gap
DUR_04=24.7   # marta 23.9 + gap
DUR_05=15.0   # mission 14.2 + gap
DUR_06=9.3    # cta 9.3

# Map clips to segments (pick best clips per segment)
# Seg 1 (Hook): phone_scroll
# Seg 2 (Problem): science_01 + wellness_01
# Seg 3 (Who we are): herbs_01 + herbs_02
# Seg 4 (Marta): 04a_laboratory + 04c_pharmacy + herbs_03
# Seg 5 (Mission): garden_01 + nature_01
# Seg 6 (CTA): 06a_sunrise_nature

NORM="$CLIPS/normalized"

# Create each segment video trimmed to VO duration
echo "   Creating segment videos..."

ffmpeg -y -i "$NORM/phone_scroll.mp4" -t $DUR_01 -c:v libx264 -preset fast -an "$OUTPUT/seg01.mp4" 2>/dev/null
echo "   ✓ Seg 1 (Hook)"

# Seg 2: concat two clips
ffmpeg -y -i "$NORM/science_01.mp4" -i "$NORM/wellness_01.mp4" \
  -filter_complex "[0:v]trim=0:7,setpts=PTS-STARTPTS[v0];[1:v]trim=0:7.2,setpts=PTS-STARTPTS[v1];[v0][v1]concat=n=2:v=1[out]" \
  -map "[out]" -t $DUR_02 -c:v libx264 -preset fast "$OUTPUT/seg02.mp4" 2>/dev/null
echo "   ✓ Seg 2 (Problem)"

# Seg 3: herbs
ffmpeg -y -i "$NORM/herbs_01.mp4" -i "$NORM/herbs_02.mp4" \
  -filter_complex "[0:v]trim=0:8,setpts=PTS-STARTPTS[v0];[1:v]trim=0:6.5,setpts=PTS-STARTPTS[v1];[v0][v1]concat=n=2:v=1[out]" \
  -map "[out]" -t $DUR_03 -c:v libx264 -preset fast "$OUTPUT/seg03.mp4" 2>/dev/null
echo "   ✓ Seg 3 (Who We Are)"

# Seg 4: lab + pharmacy + herbs (longest segment)
ffmpeg -y -i "$NORM/04a_laboratory.mp4" -i "$NORM/04c_pharmacy.mp4" -i "$NORM/herbs_03.mp4" \
  -filter_complex "[0:v]trim=0:9,setpts=PTS-STARTPTS[v0];[1:v]trim=0:9,setpts=PTS-STARTPTS[v1];[2:v]trim=0:7,setpts=PTS-STARTPTS[v2];[v0][v1][v2]concat=n=3:v=1[out]" \
  -map "[out]" -t $DUR_04 -c:v libx264 -preset fast "$OUTPUT/seg04.mp4" 2>/dev/null
echo "   ✓ Seg 4 (Marta Leni)"

# Seg 5: garden + nature
ffmpeg -y -i "$NORM/garden_01.mp4" -i "$NORM/nature_01.mp4" \
  -filter_complex "[0:v]trim=0:8,setpts=PTS-STARTPTS[v0];[1:v]trim=0:7,setpts=PTS-STARTPTS[v1];[v0][v1]concat=n=2:v=1[out]" \
  -map "[out]" -t $DUR_05 -c:v libx264 -preset fast "$OUTPUT/seg05.mp4" 2>/dev/null
echo "   ✓ Seg 5 (Mission)"

# Seg 6: sunrise
ffmpeg -y -i "$NORM/06a_sunrise_nature.mp4" -t $DUR_06 -c:v libx264 -preset fast -an "$OUTPUT/seg06.mp4" 2>/dev/null
echo "   ✓ Seg 6 (CTA)"

echo "🎬 Step 4: Concatenating all segments..."

cat > "$OUTPUT/segments.txt" << EOF
file 'seg01.mp4'
file 'seg02.mp4'
file 'seg03.mp4'
file 'seg04.mp4'
file 'seg05.mp4'
file 'seg06.mp4'
EOF

ffmpeg -y -f concat -safe 0 -i "$OUTPUT/segments.txt" -c copy "$OUTPUT/video_raw.mp4" 2>/dev/null
RAW_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT/video_raw.mp4")
echo "   Raw video: ${RAW_DUR}s"

echo "🎬 Step 5: Adding text overlays..."

# Add text overlays with ffmpeg drawtext
# We need a font - use system font
FONT="/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG="/System/Library/Fonts/Supplemental/Arial.ttf"

ffmpeg -y -i "$OUTPUT/video_raw.mp4" \
  -vf "\
    drawtext=fontfile='$FONT':text='FitoPlantaMed':fontcolor=white:fontsize=42:box=1:boxcolor=black@0.5:boxborderw=10:\
      x=(w-text_w)/2:y=h-80:enable='between(t,15,85)',\
    drawtext=fontfile='$FONT':text='fitoplantamed.com':fontcolor=white:fontsize=48:box=1:boxcolor=black@0.6:boxborderw=12:\
      x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,72,85)',\
    drawtext=fontfile='$FONT':text='Marta Leni':fontcolor=white:fontsize=40:box=1:boxcolor=black@0.5:boxborderw=10:\
      x=(w-text_w)/2:y=h*0.3:enable='between(t,36,56)',\
    drawtext=fontfile='$FONT_REG':text='Farmaceutica Clinica | CRF-SP 93119':fontcolor=gold:fontsize=28:box=1:boxcolor=black@0.5:boxborderw=8:\
      x=(w-text_w)/2:y=h*0.3+50:enable='between(t,37,56)',\
    drawtext=fontfile='$FONT_REG':text='Mestre em Biotecnologia - UFSCar':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.4:boxborderw=6:\
      x=(w-text_w)/2:y=h*0.3+90:enable='between(t,40,56)',\
    drawtext=fontfile='$FONT_REG':text='Especialista em Fitoterapia Clinica':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.4:boxborderw=6:\
      x=(w-text_w)/2:y=h*0.3+120:enable='between(t,43,56)',\
    drawtext=fontfile='$FONT_REG':text='20+ anos dedicados a saude':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.4:boxborderw=6:\
      x=(w-text_w)/2:y=h*0.3+150:enable='between(t,46,56)',\
    drawtext=fontfile='$FONT':text='Fitoterapia Baseada em Evidencias':fontcolor=white:fontsize=32:box=1:boxcolor=green@0.5:boxborderw=10:\
      x=(w-text_w)/2:y=50:enable='between(t,56,72)'\
  " \
  -c:v libx264 -preset fast -crf 22 -an "$OUTPUT/video_overlays.mp4" 2>/dev/null

echo "   ✓ Text overlays added"

echo "🎬 Step 6: Mixing voiceover + background music + video..."

# Trim bg music to video length, lower volume
ffmpeg -y -i "$OUTPUT/video_overlays.mp4" -i "$AUDIO/vo_full.mp3" -i "$AUDIO/bg_music_test.mp3" \
  -filter_complex "\
    [1:a]volume=1.0[vo];\
    [2:a]volume=0.08,afade=t=in:st=0:d=2,afade=t=out:st=78:d=5[music];\
    [vo][music]amix=inputs=2:duration=first:dropout_transition=3[aout]\
  " \
  -map 0:v -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT/fitoplantamed_presentation_16x9.mp4" 2>/dev/null

FINAL_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT/fitoplantamed_presentation_16x9.mp4")
FINAL_SIZE=$(stat -f%z "$OUTPUT/fitoplantamed_presentation_16x9.mp4" 2>/dev/null)
echo "   ✓ Final video: ${FINAL_DUR}s, $(echo "$FINAL_SIZE / 1048576" | bc)MB"

echo ""
echo "🎬 Step 7: Creating 9:16 vertical version for Reels/TikTok..."

# Use the short version VO for vertical
ffmpeg -y -i "$CLIPS/normalized/herbs_01.mp4" -i "$CLIPS/normalized/04a_laboratory.mp4" \
  -i "$CLIPS/normalized/garden_01.mp4" -i "$CLIPS/normalized/06a_sunrise_nature.mp4" \
  -filter_complex "\
    [0:v]trim=0:8,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v0];\
    [1:v]trim=0:8,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v1];\
    [2:v]trim=0:7,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v2];\
    [3:v]trim=0:6,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v3];\
    [v0][v1][v2][v3]concat=n=4:v=1[vout];\
    [vout]drawtext=fontfile='/System/Library/Fonts/Supplemental/Arial Bold.ttf':text='FitoPlantaMed':fontcolor=white:fontsize=36:box=1:boxcolor=black@0.5:boxborderw=8:x=(w-text_w)/2:y=h-120:enable='between(t,3,28)',\
    drawtext=fontfile='/System/Library/Fonts/Supplemental/Arial Bold.ttf':text='fitoplantamed.com':fontcolor=white:fontsize=40:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,24,30)'\
  " \
  -map 0:a? -c:v libx264 -preset fast -crf 22 -r 30 -an "$OUTPUT/vertical_raw.mp4" 2>/dev/null

# Add short VO + music
ffmpeg -y -i "$OUTPUT/vertical_raw.mp4" -i "$AUDIO/07_short_version.mp3" -i "$AUDIO/bg_music_test.mp3" \
  -filter_complex "\
    [1:a]volume=1.0[vo];\
    [2:a]volume=0.08,afade=t=in:st=0:d=1,afade=t=out:st=25:d=3[music];\
    [vo][music]amix=inputs=2:duration=first:dropout_transition=2[aout]\
  " \
  -map 0:v -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT/fitoplantamed_reels_9x16.mp4" 2>/dev/null

echo "✅ DONE!"
echo ""
echo "Output files:"
ls -lh "$OUTPUT"/fitoplantamed_*.mp4
