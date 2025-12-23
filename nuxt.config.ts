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
  }
})