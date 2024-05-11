/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: "#0c7885",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        fraunces: "Fraunces",
        quicksand: "Quicksand",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      "101xl": "120px",
      "11xl": "30px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
