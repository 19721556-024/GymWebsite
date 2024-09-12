/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
    },

    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
        xl: "1200px",
        lg: "1200px"
      },
    },



  },
  plugins: [],
}

