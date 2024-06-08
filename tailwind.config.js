/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1224px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'Comfortaa': ['Comfortaa', 'system-ui',],
      },
      colors: {
        "main-color": "#399E5A",
        "body-color-light": "#fff",
        "border-lines-light": "#e7e7e7",
        "dark-text": "#2F333C",
      },
    },
  },
  plugins: [],
}

