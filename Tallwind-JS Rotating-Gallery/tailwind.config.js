/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true })
  ],
}

