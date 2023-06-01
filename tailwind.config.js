const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      poppins: 'Poppins, sans-serif', 
      rubik: 'Rubik, sans-serif',
    },
    screens: {
      "xs": "320px",
      "semi": "425px",
      ...defaultTheme.screens,
    },
    colors: {
      "red": "#D20000",
      "green": "#009100",
      "white": "#F7F7F7",
    },
    extend: {},
  },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ['synthwave'],
  },
}

