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
      width: {
        "almostFull": "90%"
      },
      minHeight:{
        "xl":"630px"
      },
      maxHeight:{
        "xl":"630px"
      },
      letterSpacing: {
        "spacing": "10px"
      },
      screens: {
        "medium":"824px"
      },
      textColor: {
        "violet":"#6845c7"
      },
      backgroundColor: {
        "violet":"#6845c7"
      },
      borderColor:{
        "violet":"#6845c7"
      },
              
      
      // fontSize: {
        // "smx":"12.5px"
      // }
    },
  },
  plugins: [],
}

