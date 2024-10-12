/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "bg-primary": "#0D0D0D",
      "purple-dozewell": "#7774A7",
      "purple-dark-dozewell": "#302D40",
      "gray-light-dozewell": "#D9D9D9",
      "gray-dark-dozewell": "#424242",
      "dozwell-green": "rgba(43, 217, 168, 1)",
      white: "#ffffff",
      black: "#000000",
    },

    fontFamily: {
      primary: ["Satoshi", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "dozewell-gradient": "linear-gradient(to bottom, #7774A7, #302D40)",
      },
    },
  },
  plugins: [],
};
