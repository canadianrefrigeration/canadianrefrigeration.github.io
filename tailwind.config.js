/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "gallery.html"],
  theme: {
    extend: {
      colors: {
        'whiteModeBg': '#fff',
        'darkModeBg': '#272727'
      }
    },
  },
  plugins: [],
}

