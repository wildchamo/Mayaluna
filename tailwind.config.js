/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ECFFE2",
        secundary: "#7FBF5F",
        terciary: "#306B12",
      },
    },
  },
  plugins: [],
};
