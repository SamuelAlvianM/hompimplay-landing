export default defineNuxtConfig({
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
    },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    apiUrl: process.env.API_BASE_URL
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
      cover: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },

  vite: {
    server: {
      hmr: {
        // Memaksa Vite menggunakan port yang sama dengan server utama
        // Ini sering memperbaiki masalah path "/&/" di mobile
        protocol: 'ws',
        port: 3000 
      }
    }
  },
})