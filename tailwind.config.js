/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        fondo: 'url("./src/assets/img/fondo.png")'
      }
    },
    fontFamily: {
      'title-font': ['Nerko One', 'sans-serif']
    }
  },
  plugins: []
}
