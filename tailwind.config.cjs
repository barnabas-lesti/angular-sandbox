/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/preline/preline.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
