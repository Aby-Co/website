/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#fffffe',
        primary: '#e5b110',
        black: '#2c0e17',
        accent: '#06b6d4'
      }
    },
  },
  plugins: [],
}

