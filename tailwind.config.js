/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      cream: "#EFF7CF",
      celadon: "#BAD9B5",
      ecru: "#ABA361",
      garnet: "#732C2C",
      chocCosmos: "#420C14",
    },
  },
  plugins: [],
};
