// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#f2fbfb",
          50: "#d6f3f2",
          100: "#ade7e5",
          200: "#7cd8d5",
          300: "#49c6c2",
          400: "#23b0ac",
          DEFAULT: "#109594",
          light: "#23b0ac",
          dark: "#0b6463",
          600: "#0d7d7b",
          700: "#0b6463",
        },
        secondary: {
          25: "#fff8f3",
          50: "#ffebd9",
          100: "#ffd4ad",
          200: "#ffb875",
          300: "#ff9940",
          400: "#ff8022",
          DEFAULT: "#ff6a00",
          light: "#ff8022",
          600: "#e05c00",
          700: "#b74a00",
        },
        accent: {
          50: "#e8f0fa",
          100: "#d1e1f5",
          200: "#a3c4eb",
          300: "#75a6e0",
          400: "#4789d6",
          DEFAULT: "#1a6ccc",
          light: "#4789d6",
          600: "#1556a3",
          700: "#0f3f7a",
        },
        dark: "#0f172a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
