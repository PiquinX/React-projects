/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: { min: '380px' },
      sm: { min: '500px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
      '2xl': { min: '1600px' }
    },
    extend: {
      gridTemplateColumns: {
        responsive: 'repeat(auto-fit, minmax(270px, 1fr))'
      },
      gridTemplateRows: {
        cart: '11% 74% 15%'
      },
      keyframes: {
        succes: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(50px)' }
        }
      },
      animation: {
        succes: 'succes .5s linear forwards'
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
