/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'belleza':['Belleza','sans-serif'],
      'bebas-neue':['Bebas Neue','sans-serif']
    },
    extend: {
      backgroundImage:{
        'city': "url('./assets/sydney.jpg')",
      },
    },
  },
  plugins: [daisyui],
}

