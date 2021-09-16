const colors = require('tailwindcss/colors')

module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  darkMode: 'media',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './public/**/*.html'],
  theme: {
    extend: {},
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
    // extend: {
    //   backgroundColor: ['dark'],
    //   textColor: ['dark'],
    // },
  },
  plugins: [],
}
