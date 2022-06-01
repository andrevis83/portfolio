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
      minWidth: {
        '5': '5px',
      },
      screens: {
        'md2': '800px',
      },
      spacing: {
        '1/5': '20%',
      },
      width: {
        '104': '32rem'
      },
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: []
}
