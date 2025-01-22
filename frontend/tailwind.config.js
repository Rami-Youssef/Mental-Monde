/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding Poppins as the default font
      },
      animation: {
        infiniteZoom: "zoomInOut 3s infinite ease-in-out", // Custom animation name
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" }, // Original size
          "50%": { transform: "scale(1.1)" },   // Zoom-in size
        },
      },
    },
  },
  plugins: [],
};
