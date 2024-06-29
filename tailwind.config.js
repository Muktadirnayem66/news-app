/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },  
    },
  },
  darkMode:"class",
  plugins: [],
};
