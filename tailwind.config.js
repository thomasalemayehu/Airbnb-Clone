module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9381FF",
        accent: "#FFD8BE",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar-hide"),
  ],
};
