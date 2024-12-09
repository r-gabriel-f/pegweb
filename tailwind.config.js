/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        f: 'url("./src/assets/img/fondo.webp")',
        carnet: 'url("@/assets/img/carnet.jpg")'
      },
      colors: {
        primary: '#353535',
        secondary: '#C89F94',
        tertiary: '#F4E3D7',
        quaternary: '#F9F7F4',
        complement: '#F9b384',
        extra: '#FAD4D8'
      }
    },
    fontFamily: {
      'title-font': ['"Quicksand"', 'sans-serif']
    },
    fontWeight: {
      bold: 700, // Negrita
      normal: 400 // Peso normal
    }
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.text-border-letter': {
          '-webkit-text-stroke': '1px ' + theme('colors.complement'), // Estilo de borde de las letras
          color: theme('colors.primary') // Relleno de la letra
        }
      })
    }
  ]
}
