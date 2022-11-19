/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        lux: ["Prata", "serif"],
        ita: ["Italiana", "serif"],
      },
      colors: {
        // main: "#FB3640",
        main: "#ff0034",
      },
      fontSize: {
        xxs: "0.5rem",
        xxxs: "0.2rem",
        xxxxs: "0.1rem",
      },
    },
  },
  plugins: [],
}
