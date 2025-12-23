import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        'cus-med': { min: '420px', max: '720px' },
      },
    },
  },
}