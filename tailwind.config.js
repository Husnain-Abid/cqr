/** @type {import('tailwindcss').Config} */


module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all relevant file types
  ],
  theme: {

    extend: {

      colors: {
        customRed: "#E23744", // Add a custom name for your color
        customWhite: "#F4F4F2", // Add a custom name for your color
      },
      fontFamily: {
        helvetica: ['"Helvetica"', 'sans-serif'], // Add the Poppins font

      },


      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        popupShow: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
        popupShow: "popupShow 0.3s ease-out",
      },





    },

  },
  plugins: [],
};
