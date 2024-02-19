/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4484eb',
        'secondary': '#f59f49',
        'third': '#38d97e'
      }
    },
  },
  plugins: []
}
