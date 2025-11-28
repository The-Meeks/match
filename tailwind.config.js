/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        charcoal: "#0A0A0A",
        dark: "#000000",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 25px rgba(212, 175, 55, 0.3)",
      }
    },
  },
  plugins: [],
};
