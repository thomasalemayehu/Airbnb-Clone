module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnbRed: "#fca5a5",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
