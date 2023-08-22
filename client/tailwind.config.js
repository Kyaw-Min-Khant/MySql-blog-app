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
      brand: "#05c105ce",
      header: "#2D2B2B",
      normal: "#666565",
      white: "#fafafa",
    },
    extend: {},
  },
  plugins: [],
};
