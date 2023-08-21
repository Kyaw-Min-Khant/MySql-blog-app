/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto",
      serif: "Montserrat",
      mono: "Lato",
    },
    colors: {
      brand: "#EBC500",
      header: "#2D2B2B",
      normal: "#666565",
    },
    extend: {},
  },
  plugins: [],
};
