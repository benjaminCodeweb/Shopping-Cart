/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajusta según tu estructura de proyecto
  ],

  darkMode: "class",
  theme: {
    extend: {}, // acá podés extender colores, tipografías, animaciones...
  },
  plugins: [],
}