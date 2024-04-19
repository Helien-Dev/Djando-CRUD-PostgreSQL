/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['/store/templates/*/**.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
