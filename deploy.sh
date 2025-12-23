#!/bin/bash

# =========================
# KONFIGURASI REMOTE DEPLOY
# =========================
TUNNEL_HOST="ssh.hompimplay.id" 
TUNNEL_USER="server-hompimplay" 
SERVER="${TUNNEL_USER}@${TUNNEL_HOST}" 

DEPLOY_PATH="/var/www/hompimplay.id"
BACKUP_PATH="/var/www/backup-hompimplay.id"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
PROXY_CMD="cloudflared access ssh --hostname ${TUNNEL_HOST}"

echo "🚀 Memulai proses deployment..."

# =========================
# 1. Build Nuxt Lokal
# =========================
echo "📦 Step 1: Building Nuxt (Production Mode)..."
# yarn build --dotenv .env || { echo "❌ Build gagal!"; exit 1; }
# yarn build || { echo "❌ Build gagal!"; exit 1; }

# =========================
# 2. Backup di Server
# =========================
echo "🗄️  Step 2: Backup folder lama di server..."
ssh -o ProxyCommand="${PROXY_CMD}" $SERVER "mkdir -p $BACKUP_PATH && if [ -d $DEPLOY_PATH ]; then mv $DEPLOY_PATH ${BACKUP_PATH}/member_${TIMESTAMP}; fi && mkdir -p $DEPLOY_PATH"

# =========================
# 3. Deploy ke Server (rsync)
# =========================
echo "🚚 Step 3: Mengirim file ke server..."
# Kita kirim isi folder .output DAN file ecosystem.config.js
rsync -avz --progress \
    -e "ssh -o ProxyCommand=\"${PROXY_CMD}\"" \
    .output/ \
    ecosystem.config.js \
    .env \
    $SERVER:$DEPLOY_PATH

# =========================
# 4. Restart Process via PM2
# =========================
echo "🔄 Step 4: Restarting PM2 process..."
# ssh -o ProxyCommand="${PROXY_CMD}" $SERVER "cd $DEPLOY_PATH && pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js"
# Update Step 4 di deploy.sh
echo "🔄 Step 4: Restarting PM2 process..."
ssh -o ProxyCommand="${PROXY_CMD}" $SERVER "export NVM_DIR=\"\$HOME/.nvm\"; [ -s \"\$NVM_DIR/nvm.sh\" ] && \. \"\$NVM_DIR/nvm.sh\"; cd $DEPLOY_PATH && pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js"
# =========================
# 5. Refresh Nginx
# =========================
echo "🌐 Step 5: Restarting Nginx..."
ssh -o ProxyCommand="${PROXY_CMD}" $SERVER 'sudo systemctl restart nginx'

echo "✅ Deployment Berhasil!"