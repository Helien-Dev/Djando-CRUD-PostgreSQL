/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./static/*/**.html', './store/templates/store/**.html'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
