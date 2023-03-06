module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem", //640px
        md: "2rem", //768px
        lg: "5rem", //1024px
        xl: "7rem", //1280px
        "2xl": "12rem", //1536px
      },
    },
    extend: {
      colors: {
        "black-dark": "#232323",
        black: "#2B2B2B",
        "black-light": "#323232",
        gray: "#777777",
        "gray-light": "#D9D9D9",
        brown: "#6F3D2E",
        "brown-dark": "#582e21",
        "brown-light": "#AE6E5F",
        "yellow-chrome": "#D69667",
        "green-dark": "#195D51",
        "error-state": "#932D2D",
      },
    },
  },
  plugins: [],
};
