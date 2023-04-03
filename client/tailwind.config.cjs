/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: "#570df8",
          focus: "#4406cb",
          content: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f000b8",
          focus: "#f000b8",
          content: "#ffffff",
        },
    
        accent: {
          DEFAULT: "#37cdbe",
          focus: "#163835",
          content: "#2aa69a",
        },
        neutral: {
          DEFAULT: "#3d4451",
          focus: "#313641",
          content: "#ffffff",
        },
        base: {
          100: "#ffffff",
          200: "#F2F2F2",
          300: "#E5E6E6",
          content: "#1f2937",
        },
        info: {
          DEFAULT: "#3abff8",
          content: "#002b3d", 
        },
        success: {
          DEFAULT: "#36d399",
          content: "#003320",
        },
        warning: {
          DEFAULT: "#fbbd23",
          content: "#382300",
        },
        error: {
          DEFAULT: "#f87272",
          content: "#470000",
        }
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
