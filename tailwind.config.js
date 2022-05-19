
const defaultTheme = require("tailwindcss/defaultTheme")


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screen: {
      "xs":"475px",
      ...defaultTheme.screens
    },
      extend: {
      flex: {
        "2": "2 2 0%",
        "3": "3 3 0%",
        "4": "4 4 0%"
      },
      maxWidth: {
        "8xl": "1920px"
      },
    },
  },
  variants: {
    extends: {
      opactity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
}
