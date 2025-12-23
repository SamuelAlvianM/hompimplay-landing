module.exports = {
  apps: [
    {
      name: 'hompimplay',
      port: '3000',
      exec_mode: 'cluster',
      instances: '2',
      script: './server/index.mjs', // Path relatif terhadap folder deploy
      env: {
        NODE_ENV: 'production',
        DOTENV_CONFIG_PATH: './.env' 
      }
    }
  ]
}