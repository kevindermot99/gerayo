/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1224px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Comfortaa: ["Comfortaa", "system-ui"],
      },
      colors: {
        "main-color": "#399E5A",
        "body-color-light": "#fff",
        "body-color-dark": "#121212",
        "border-lines-light": "#e7e7e7",
        "border-lines-dark": "#1D1D1D",
        "dark-text": "#2F333C",
        "light-text": "#7d7d7d",
      },
      animation: {
        spinLoader: "spin .4s linear infinite",
        spinSlow: "spin 5s linear infinite",
      },
    },
  },
  plugins: [
  ],
};
