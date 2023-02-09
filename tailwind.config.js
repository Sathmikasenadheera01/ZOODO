/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00A954',
        'secondary': '#D8FFEB',
      },
      fontFamily:{
        'primary': ['Roboto Serif'],
        'secondary': ['poppins'],
      }
    },
  },
  plugins: [],
}