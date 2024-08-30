/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E47F39',
        secondary: '#433E3F',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/palm.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}