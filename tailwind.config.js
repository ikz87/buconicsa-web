/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D5A91',
        'secondary': '#126AB5',
        'accent': '#7BB7D9',
        'light': '#C2DCEB',
      }
    },
  },
  plugins: [],
}
