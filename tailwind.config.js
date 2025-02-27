/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
