const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      highlight: colors.trueGray,
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
