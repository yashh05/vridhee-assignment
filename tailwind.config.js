/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto", sans-serif'],
        poppins:['"poppins", sans-serif']
      },
      colors:{
        bodybg:"#F3F4F9",
        navblue:"#004293",
      }
    },   

  },
  plugins: [],
}
