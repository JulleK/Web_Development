/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          900: "#001427",
          600: "#4A7B80",
          500: "#93E1D8",
          400: "#B8F0E8",
          300: "#DDFFF7",
        },
      },
    },
  },
  plugins: [],
};
