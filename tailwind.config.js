/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins":"Poppins, sans-serif"
      },
      height:{
        "xl":"630px"
      },
      minHeight:{
        "xl":"630px"
      },
      maxHeight:{
        "xl":"630px"
      }
    },
  },
  plugins: [],
}

