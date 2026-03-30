#!/bin/bash
set -e

BASEDIR="/Users/lucasgabriel/.openclaw/workspace/fitoplanta-natural-hub/video"
AUDIO="$BASEDIR/audio"
CLIPS="$BASEDIR/clips"
OUTPUT="$BASEDIR/output"
FONT="/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG="/System/Library/Fonts/Supplemental/Arial.ttf"

echo "🎬 Normalizing new nature clips to 720x1280 (vertical)..."

mkdir -p "$CLIPS/vertical"

for clip in waterfall_01.mp4 forest_01.mp4 river_01.mp4 botanical_01.mp4 plants_closeup_01.mp4 green_leaves_01.mp4 rainforest_01.mp4 flowers_nature_01.mp4; do
  if [ -f "$CLIPS/$clip" ]; then
    echo "   Normalizing $clip..."
    ffmpeg -y -i "$CLIPS/$clip" \
      -vf "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280,setsar=1" \
      -c:v libx264 -preset fast -crf 23 -r 30 -an \
      -t 10 \
      "$CLIPS/vertical/$clip" 2>/dev/null
  fi
done

echo "🎬 Building vertical video with nature-only visuals..."

# VO duration is ~29.4s. We need 5 clips at ~6s each
# Sequence: plants closeup → waterfall → botanical garden → forest → river (sunrise-like ending)
VERT="$CLIPS/vertical"

ffmpeg -y \
  -i "$VERT/green_leaves_01.mp4" \
  -i "$VERT/waterfall_01.mp4" \
  -i "$VERT/botanical_01.mp4" \
  -i "$VERT/rainforest_01.mp4" \
  -i "$VERT/river_01.mp4" \
  -i "$VERT/flowers_nature_01.mp4" \
  -filter_complex "\
    [0:v]trim=0:5,setpts=PTS-STARTPTS[v0];\
    [1:v]trim=0:5,setpts=PTS-STARTPTS[v1];\
    [2:v]trim=0:5,setpts=PTS-STARTPTS[v2];\
    [3:v]trim=0:5,setpts=PTS-STARTPTS[v3];\
    [4:v]trim=0:5,setpts=PTS-STARTPTS[v4];\
    [5:v]trim=0:5,setpts=PTS-STARTPTS[v5];\
    [v0][v1][v2][v3][v4][v5]concat=n=6:v=1[vraw];\
    [vraw]\
    drawtext=fontfile='$FONT':text='FitoPlantaMed':fontcolor=white:fontsize=36:box=1:boxcolor=black@0.5:boxborderw=8:x=(w-text_w)/2:y=h-160:enable='between(t,3,29)',\
    drawtext=fontfile='$FONT_REG':text='Marta Leni':fontcolor=white:fontsize=32:box=1:boxcolor=black@0.5:boxborderw=6:x=(w-text_w)/2:y=h*0.25:enable='between(t,7,18)',\
    drawtext=fontfile='$FONT_REG':text='Farmaceutica Clinica':fontcolor=white:fontsize=24:box=1:boxcolor=black@0.4:boxborderw=5:x=(w-text_w)/2:y=h*0.25+40:enable='between(t,8,18)',\
    drawtext=fontfile='$FONT_REG':text='Mestre em Farmacia':fontcolor=gold:fontsize=24:box=1:boxcolor=black@0.4:boxborderw=5:x=(w-text_w)/2:y=h*0.25+72:enable='between(t,9,18)',\
    drawtext=fontfile='$FONT_REG':text='20+ anos de experiencia':fontcolor=white:fontsize=22:box=1:boxcolor=black@0.4:boxborderw=5:x=(w-text_w)/2:y=h*0.25+104:enable='between(t,10,18)',\
    drawtext=fontfile='$FONT':text='fitoplantamed.com':fontcolor=white:fontsize=40:box=1:boxcolor=black@0.6:boxborderw=10:x=(w-text_w)/2:y=(h-text_h)/2:enable='between(t,24,30)'\
    [vout]" \
  -map "[vout]" -c:v libx264 -preset fast -crf 22 -r 30 "$OUTPUT/reels_v2_raw.mp4" 2>&1 | tail -5

echo "🎬 Mixing VO + music..."

ffmpeg -y -i "$OUTPUT/reels_v2_raw.mp4" -i "$AUDIO/07_short_v2.mp3" -i "$AUDIO/bg_music_test.mp3" \
  -filter_complex "\
    [1:a]volume=1.0[vo];\
    [2:a]volume=0.08,afade=t=in:st=0:d=1,afade=t=out:st=26:d=3[music];\
    [vo][music]amix=inputs=2:duration=first:dropout_transition=2[aout]\
  " \
  -map 0:v -map "[aout]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT/fitoplantamed_reels_v2.mp4" 2>&1 | tail -5

FINAL_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT/fitoplantamed_reels_v2.mp4")
FINAL_SIZE=$(stat -f%z "$OUTPUT/fitoplantamed_reels_v2.mp4" 2>/dev/null)

echo ""
echo "✅ DONE!"
echo "   Duration: ${FINAL_DUR}s"
echo "   Size: $(echo "$FINAL_SIZE / 1048576" | bc)MB"
echo ""
ls -lh "$OUTPUT"/fitoplantamed_reels_v2.mp4
