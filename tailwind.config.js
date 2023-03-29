/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: ["var(--font-montreal)", ...fontFamily.sans],
        woodland: ["var(--font-woodland)", ...fontFamily.serif],
      },
      lineHeight: {
        "extra-tight": "100px",
      },
      height: {
        "almost-screen": "85vh",
        "hero-height": "455px",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      backgroundImage: {
        "hero-image": "url('/images/background-img.jpg')",
      },
    },
  },
  plugins: [],
};
