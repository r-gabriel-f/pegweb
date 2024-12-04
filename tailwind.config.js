/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        f: 'url("./src/assets/img/fondo.webp")'
      },
      colors: {
        'primary': '#353535',
        'secondary': '#C89F94',
        'tertiary': '#F4E3D7',
        'quaternary': '#F9F7F4',
        'complement': '#F9b384',
        'extra': '#FAD4D8',
      }
    },
    fontFamily: {
      'title-font': ['Nerko One', 'sans-serif']
    },
  },
  plugins: []
}
