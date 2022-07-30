/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamilys: {
    'nurito': ['Nurito', 'sans-serif'],
  },
  colors: {
    'blue': '#1DA1F2',
    'darkblue': '#2795D9', 
    'lightblue': '#EFF9FF',
    'dark': '#657786',
    'light': '#AABBC2',
    'lighter': '#E1E8ED',
  },
}
