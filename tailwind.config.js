const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#101010',      
      },
      fontFamily: {
        'anton': ['Anton', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        'lg': '33rem',
        '3xl': '54rem'
      },
      minWidth: {
        '5': '0.375rem',
        '6': '0.75rem',
      },
      screens: {
        'md2': '800px',
      },
      spacing: {
        '1/5': '20%',
      },
      width: {
        '104': '32rem',
        '110': '52rem'
      },
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: []
}
