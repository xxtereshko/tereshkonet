const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
    },
  },
  variants: {
    extend: {
      width: ['hover'],
      display: ['dark'],
    },
  },
  plugins: [],
}
