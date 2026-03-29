#!/bin/bash
# Generate voiceover segments using edge-tts
EDGE_TTS="/Users/lucasgabriel/Library/Python/3.9/bin/edge-tts"
VOICE="pt-BR-FranciscaNeural"
OUTDIR="/Users/lucasgabriel/.openclaw/workspace/fitoplanta-natural-hub/video/audio"
RATE="-5%"

echo "🎙️ Generating voiceover segments..."

# Segment 1: Hook (0-5s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Você já pesquisou sobre plantas medicinais na internet... e ficou mais confuso do que antes?" \
  --write-media "$OUTDIR/01_hook.mp3" 2>&1

# Segment 2: Problem (5-15s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Promessas milagrosas. Informações sem fonte. Produtos duvidosos. Na internet, todo mundo vira especialista em fitoterapia. Mas poucos têm a formação pra falar com responsabilidade." \
  --write-media "$OUTDIR/02_problem.mp3" 2>&1

# Segment 3: Who is FitoPlantaMed (15-35s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "O FitoPlantaMed nasceu pra mudar isso. Somos uma plataforma de conteúdo sobre fitoterapia, plantas medicinais e saúde natural. Tudo baseado em ciência e desenvolvido por quem realmente entende." \
  --write-media "$OUTDIR/03_whoweare.mp3" 2>&1

# Segment 4: Marta Leni (35-55s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Por trás do FitoPlantaMed está Marta Leni. Farmacêutica Clínica registrada no CRF-SP, com Mestrado em Biotecnologia pela Universidade Federal de São Carlos. Especialista em Fitoterapia Clínica, com formação em instituições como a FIOCRUZ. E mais de vinte anos dedicados à saúde, incluindo trabalho voluntário em terapias integrativas." \
  --write-media "$OUTDIR/04_marta.mp3" 2>&1

# Segment 5: Mission (55-70s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Nosso compromisso é simples: oferecer informação de qualidade, acessível e transparente. Sem promessas milagrosas. Sem marketing enganoso. Apenas ciência, experiência e respeito pela sua saúde." \
  --write-media "$OUTDIR/05_mission.mp3" 2>&1

# Segment 6: CTA (70-85s)
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Descubra a fitoterapia de verdade. Acesse fitoplantamed ponto com, e comece a cuidar da sua saúde com quem entende do assunto." \
  --write-media "$OUTDIR/06_cta.mp3" 2>&1

# Also generate the 30s short version as one piece
$EDGE_TTS --voice "$VOICE" --rate="$RATE" \
  --text "Cansou de promessas milagrosas sobre plantas medicinais? O FitoPlantaMed é uma plataforma de fitoterapia baseada em ciência, criada por Marta Leni, Farmacêutica Clínica com mais de vinte anos de experiência. Sem milagres. Sem mentiras. Apenas informação de qualidade, com evidências científicas e transparência total. Acesse fitoplantamed ponto com. Sua saúde merece informação de verdade." \
  --write-media "$OUTDIR/07_short_version.mp3" 2>&1

echo "✅ All segments generated!"
ls -la "$OUTDIR/"
