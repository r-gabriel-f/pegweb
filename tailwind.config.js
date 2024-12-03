/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        f: 'url("./src/assets/img/fondo.webp")'
      }
    },
    fontFamily: {
      'title-font': ['Nerko One', 'sans-serif']
    }
  },
  plugins: []
}
