/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        'nav-color' : '#EAF2FE',
        'nav-text-color' : '#003482',
        "custom-green": "#08BD7E",
        "custom-blue": "#003482",
        "background-blue": "#F4F8FE",
        "custom-gray": "#474747",
        "custom-red": "#660000",
        "footer-gray": "#6C6C6C",
        "custom-sky": "#2F80F9",
      },
      backgroundColor: {
        lightBlue: '#F4F8FE',
        navColor: '#F7FAFF',
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for WebKit (Safari, Chrome, etc.) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE and Edge */
          '-ms-overflow-style': 'none',
          /* Hide scrollbar for Firefox */
          'scrollbar-width': 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],    
  darkMode: 'selector'
}

