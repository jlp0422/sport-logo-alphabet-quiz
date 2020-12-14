module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '50vw': '50vw',
        '80vw': '80vw',
        '90vw': '90vw'
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh'
      },
      screens: {
        xsm: '420px'
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
