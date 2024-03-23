/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF9142",
        secondary: "#F99A54",
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
    dropShadow: {
      '4xl': [
          '0 20px 13px rgb(0 0 0 / 30%)',
          '0 8px 5px rgb(141 114 78 / 30%)'
      ]
    },
    animation: {
      pop: 'pop 2s ease-out both infinite;',
      spin: 'spin 1s linear infinite;',
      infiniteCarrousel: 'infiniteCarrousel 25s linear infinite',
    },
    keyframes: {
      infiniteCarrousel: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
      },
      pop: {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.2)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    animations,
    require('flowbite/plugin')
  ],
}