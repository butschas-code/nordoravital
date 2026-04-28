#!/usr/bin/env bash
# Run AFTER: vercel logout && vercel login
# Use the Vercel account that owns **nordoravital** (woodlandwonderstudioetsy), NOT another team.
set -euo pipefail
cd "$(dirname "$0")/.."
echo "Linking this repo to Vercel project nordoravital (pick that project + correct team when prompted)..."
vercel link
echo "Deploy production:"
vercel deploy --prod
