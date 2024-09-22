/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lgmini:"992px"
      },
      
        fontFamily: {
          inter: ["Inter", "sans-serif"],
          nunito:["Nunito", "sans-serif"],
          jost:["Jost", "sans-serif"]
        },
        animationDuration:{
           '3000ms': '3000ms',
        '9000ms': '9000ms'
        }
    },
  },
  plugins: [],
}