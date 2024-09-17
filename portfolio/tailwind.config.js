/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode support
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        galaxy: '#0f0e17',
        stars: '#e7d9ff',
        glow: '#ffde59',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


