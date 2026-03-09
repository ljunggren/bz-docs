#!/usr/bin/env bash
set -euo pipefail

SERVER="ubuntu@mgmt1bh.boozang.com"
DOCS_DIR="/var/www/examples/docs"

echo "Deploying docs to $SERVER..."
ssh "$SERVER" "cd $DOCS_DIR && sudo git pull && sudo npm run build"
echo "Done. Site live at https://docs.boozang.com"
