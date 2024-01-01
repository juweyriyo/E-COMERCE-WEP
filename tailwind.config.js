/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {

        primaryColor: "#161A30",
        secondaryColor: "#F0ECE5",

      }
    },
  },
  plugins: [],
}

