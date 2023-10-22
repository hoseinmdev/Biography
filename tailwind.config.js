/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        dark: "#262626",
        secondary: "#d4d4d4",
      },
    },
  },
  plugins: [],
};
