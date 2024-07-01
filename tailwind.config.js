/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
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
      fontFamily:{
        sans: ['Poppins']
      }
    },
  },
  plugins: [],    
  darkMode: 'selector'
}
 