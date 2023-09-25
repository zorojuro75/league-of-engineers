/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img.png')",
      },
      colors: {
        background: "#101618",
        primary: "#25a3db",
        secondary: "#e6e5d6",
        button : '#F9AE1B',
      },
    },
  },
  plugins: [],
});
