/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/index.html", // Escucha todas las páginas index en las subcarpetas
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#8EB9FC',   // Celeste claro
          royal: '#274DEA',   // Azul Real
          mint: '#EBFFDC',    // Verde Menta
          yellow: '#FFF197',  // Amarillo suave
          coral: '#FF513D',   // Coral vibrante
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}