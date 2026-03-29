#!/bin/bash
set -e

BASEDIR="/Users/lucasgabriel/.openclaw/workspace/fitoplanta-natural-hub/video"
AUDIO="$BASEDIR/audio"
CLIPS="$BASEDIR/clips"
OUTPUT="$BASEDIR/output"
FONT="/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG="/System/Library/Fonts/Supplemental/Arial.ttf"

echo "🎬 Step 5: Adding text overlays..."

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
  -c:v libx264 -preset fast -crf 22 -an "$OUTPUT/video_overlays.mp4" 2>&1

echo "   ✓ Text overlays added"

echo "🎬 Step 6: Mixing voiceover + background music + video..."

ffmpeg -y -i "$OUTPUT/video_overlays.mp4" -i "$AUDIO/vo_full.mp3" -i "$AUDIO/bg_music_test.mp3" \
  -filter_complex "\
    [1:a]volume=1.0[vo];\
    [2:a]volume=0.08,afade=t=in:st=0:d=2,afade=t=out:st=78:d=5[music];\
    [vo][music]amix=inputs=2:duration=first:dropout_transition=3[aout]\
  " \
  -map 0:v -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT/fitoplantamed_presentation_16x9.mp4" 2>&1

FINAL_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT/fitoplantamed_presentation_16x9.mp4")
FINAL_SIZE=$(stat -f%z "$OUTPUT/fitoplantamed_presentation_16x9.mp4" 2>/dev/null)
echo "   ✓ Final 16:9: ${FINAL_DUR}s, $(echo "$FINAL_SIZE / 1048576" | bc)MB"

echo ""
echo "🎬 Step 7: Creating 9:16 vertical version for Reels/TikTok..."

NORM="$CLIPS/normalized"

ffmpeg -y -i "$NORM/herbs_01.mp4" -i "$NORM/04a_laboratory.mp4" \
  -i "$NORM/garden_01.mp4" -i "$NORM/06a_sunrise_nature.mp4" \
  -filter_complex "\
    [0:v]trim=0:8,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v0];\
    [1:v]trim=0:8,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v1];\
    [2:v]trim=0:7,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v2];\
    [3:v]trim=0:6,setpts=PTS-STARTPTS,scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280[v3];\
    [v0][v1][v2][v3]concat=n=4:v=1[vout];\
    [vout]drawtext=fontfile='$FONT':text='FitoPlantaMed':fontcolor=white:fontsize=36:box=1:boxcolor=black@0.5:boxborderw=8:x=(w-text_w)/2:y=h-120:enable='between(t,3,28)',\
    drawtext=fontfile='$FONT':text='fitoplantamed.com':fontcolor=white:fontsize=40:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,24,30)'\
  " \
  -c:v libx264 -preset fast -crf 22 -r 30 -an "$OUTPUT/vertical_raw.mp4" 2>&1

ffmpeg -y -i "$OUTPUT/vertical_raw.mp4" -i "$AUDIO/07_short_version.mp3" -i "$AUDIO/bg_music_test.mp3" \
  -filter_complex "\
    [1:a]volume=1.0[vo];\
    [2:a]volume=0.08,afade=t=in:st=0:d=1,afade=t=out:st=25:d=3[music];\
    [vo][music]amix=inputs=2:duration=first:dropout_transition=2[aout]\
  " \
  -map 0:v -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT/fitoplantamed_reels_9x16.mp4" 2>&1

echo ""
echo "✅ DONE!"
echo ""
echo "Output files:"
ls -lh "$OUTPUT"/fitoplantamed_*.mp4
