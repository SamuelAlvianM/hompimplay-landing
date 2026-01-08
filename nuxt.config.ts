export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  alias: {
    '~': './',
    '@': './'
  },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Nunito: [400, 600, 700],
    },
    display: 'swap',
    preload: true,
    download: true,
  },

  image: {
    provider: 'ipx',
    format: ['webp'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 500, 
          height: 500
        }
      }
    }
  },

  sourcemap: {
    server: false,
    client: false
  },

  vite: {
    build: {
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  }
})