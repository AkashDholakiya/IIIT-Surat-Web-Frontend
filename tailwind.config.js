/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-green": "#08BD7E",
        "custom-blue": "#003482",
        "background-blue": "#F4F8FE",
        "custom-gray": "#474747",
        "custom-red": "#660000",
        "footer-gray": "#6C6C6C",
        "custom-sky": "#2F80F9",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
