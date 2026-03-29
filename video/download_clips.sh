#!/bin/bash
# Download free stock clips from Pexels (direct links - all free license)
CLIPDIR="/Users/lucasgabriel/.openclaw/workspace/fitoplanta-natural-hub/video/clips"
cd "$CLIPDIR"

echo "📹 Downloading stock clips from Pexels..."

# Segment 1 - Hook: person scrolling phone / searching
curl -sL "https://videos.pexels.com/video-files/5532764/5532764-sd_506_960_25fps.mp4" -o "01a_phone_scrolling.mp4" &
curl -sL "https://videos.pexels.com/video-files/6963744/6963744-sd_506_960_25fps.mp4" -o "01b_searching.mp4" &

# Segment 2 - Problem: generic health misinformation / supplements
curl -sL "https://videos.pexels.com/video-files/3196509/3196509-sd_640_360_25fps.mp4" -o "02a_supplements_generic.mp4" &
curl -sL "https://videos.pexels.com/video-files/7579955/7579955-sd_640_360_25fps.mp4" -o "02b_pills.mp4" &

# Segment 3 - Who we are: herbs, nature, plants
curl -sL "https://videos.pexels.com/video-files/4057613/4057613-sd_640_360_25fps.mp4" -o "03a_herbs_closeup.mp4" &
curl -sL "https://videos.pexels.com/video-files/2547278/2547278-sd_640_360_25fps.mp4" -o "03b_green_plants.mp4" &
curl -sL "https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_25fps.mp4" -o "03c_nature.mp4" &

# Segment 4 - Marta Leni: lab, professional, science
curl -sL "https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4" -o "04a_laboratory.mp4" &
curl -sL "https://videos.pexels.com/video-files/8540361/8540361-sd_640_360_30fps.mp4" -o "04b_research.mp4" &
curl -sL "https://videos.pexels.com/video-files/6981411/6981411-sd_640_360_25fps.mp4" -o "04c_pharmacy.mp4" &

# Segment 5 - Mission: nature + health + care
curl -sL "https://videos.pexels.com/video-files/4812203/4812203-sd_640_360_25fps.mp4" -o "05a_wellness.mp4" &
curl -sL "https://videos.pexels.com/video-files/4057411/4057411-sd_640_360_25fps.mp4" -o "05b_herbs_garden.mp4" &

# Segment 6 - CTA: clean, bright nature
curl -sL "https://videos.pexels.com/video-files/2098988/2098988-sd_640_360_30fps.mp4" -o "06a_sunrise_nature.mp4" &

wait

echo "✅ Downloads complete!"
ls -la "$CLIPDIR/"
echo "---"
# Check which ones actually downloaded (non-zero)
for f in *.mp4; do
  size=$(stat -f%z "$f" 2>/dev/null || stat -c%s "$f" 2>/dev/null)
  echo "$f: ${size} bytes"
done
