module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '50vw': '50vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '225': '225px',
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '230': '230px'
      },
      screens: {
        xs: '420px'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
