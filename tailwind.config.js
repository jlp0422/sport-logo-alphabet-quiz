const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet
      },
      width: {
        '50vw': '50vw',
        '80vw': '80vw',
        '90vw': '90vw',
        225: '225px'
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        280: '280px'
      },
      minHeight: {
        190: '190px'
      },
      minWidth: {
        150: '150px'
      },
      screens: {
        xs: '420px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
