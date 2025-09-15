/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4ECE9",
          500: "#8C4227",
        },
        secondary: {
          50: "#F6F3EC",
          500: "#A68444",
        },
      },
    },
  },
  plugins: [],
}