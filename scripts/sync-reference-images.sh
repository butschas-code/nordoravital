#!/usr/bin/env bash
# Copies selected assets from Website/References into web/public/images so paths stay in sync.
# Run from repo root:  bash web/scripts/sync-reference-images.sh
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
REF="$ROOT/References"
WEB="$ROOT/web/public"

if [[ ! -d "$REF" ]]; then
  echo "References directory not found: $REF" >&2
  exit 1
fi

mkdir -p "$WEB/images/sanzanet/images/home-main-de"
WAVE_MAIN="$REF/sanzanet/images/home-main-de/bg_waves_1920.png"
WAVE_ALT="$REF/sanzanet/images/happy-aging-main/bg_waves_1920.png"
if [[ -f "$WAVE_MAIN" ]]; then
  cp "$WAVE_MAIN" "$WEB/images/sanzanet/images/home-main-de/bg_waves_1920.png"
  mkdir -p "$WEB/images/references/hero"
  cp "$WAVE_MAIN" "$WEB/images/references/hero/home-hero-soft-abstract-waves-background.png"
  echo "Synced hero wave background from home-main-de."
elif [[ -f "$WAVE_ALT" ]]; then
  mkdir -p "$WEB/images/references/hero"
  cp "$WAVE_ALT" "$WEB/images/references/hero/home-hero-soft-abstract-waves-background.png"
  echo "Synced hero wave background from happy-aging-main."
else
  echo "TODO: No bg_waves_1920.png in References — hero background missing."
fi

HAM="$REF/sanzanet/images/happy-aging-main"
if [[ -d "$HAM" ]]; then
  mkdir -p "$WEB/images/references/lifestyle"
  [[ -f "$HAM/s17_img_1.jpg" ]] && cp "$HAM/s17_img_1.jpg" "$WEB/images/references/lifestyle/calm-wellness-session-warm-light.jpg"
  [[ -f "$HAM/s17_img_2.jpg" ]] && cp "$HAM/s17_img_2.jpg" "$WEB/images/references/lifestyle/relaxation-ritual-soft-daylight.jpg"
  [[ -f "$HAM/s17_img_3.jpg" ]] && cp "$HAM/s17_img_3.jpg" "$WEB/images/references/lifestyle/professional-calm-treatment-space.jpg"
  [[ -f "$HAM/pichler_003-2-2-2_800_2.jpg" ]] && cp "$HAM/pichler_003-2-2-2_800_2.jpg" "$WEB/images/references/lifestyle/wellness-room-natural-materials.jpg"
  [[ -f "$HAM/bg_waves_1920.png" ]] && cp "$HAM/bg_waves_1920.png" "$WEB/images/references/lifestyle/bg-waves-abstract-1920.png"
  echo "Synced lifestyle JPGs from happy-aging-main."
fi

echo "Done. Curated SVGs under web/public/images/references/ should be updated manually or copied from your design export."
