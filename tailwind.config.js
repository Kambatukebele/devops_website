/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#045AC3",
        light_blue: "#D6E1F5",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
