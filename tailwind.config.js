/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9142",
        bgBlack: "#1A1A1A",
        whiteGray: "#C5BFBF",
        paragraph: "#A8A8A8",
        dark: "#131313",        
      },
      fontFamily: {
        syne: ["Syne Variable", "sans-serif"],
        raleway: ["Raleway Variable", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}