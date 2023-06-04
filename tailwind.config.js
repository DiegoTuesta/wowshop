/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        bg_dark: "#252525",
        bg_claro: "#d8d6d6"
      },
      colors : {
        claro: "white",
        dark: "black",
        subtitulo_black: "#4a4a4a",
        subtitulo_claro: "#dcdcdc"
      }
      
    },
  },
  plugins: [],
}

