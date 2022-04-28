const colors = require('tailwindcss/colors')

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
      animation: {
        wiggle: 'wiggle 5s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { color: colors.indigo['50'] },
          '50%': { color: colors.indigo['500'] },
        }
      },
      zIndex: {
        '1000': '1000',
      }
    },
  },
  plugins: []
}
