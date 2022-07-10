module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fca5a5",
        accent: "#a855f7",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
