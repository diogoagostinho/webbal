/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./src/components/*.{html,js,tsx}",
    "./src/pages/*.{html,js,tsx}",
    "./src/styles/*.{html,js,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      options: ["Cousine", "monospace"],
    },
  },
  plugins: [],
  darkMode: "class",
};
