/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#161313",
        green: {
          900: "#001427",
          600: "#4A7B80",
          500: "#93E1D8",
          400: "#B8F0E8",
          300: "#DDFFF7",
        },
        aqua: {
          100: "#D6FFF7",
          200: "#ADFFEF",
          300: "#85FFE7",
          400: "#5CFFDE",
          // 500: "#33FFD6",
          500: "#00F5C4",
          600: "#00CCA3",
          700: "#00A383",
          800: "#007A62",
          900: "#005241",
          950: "#002921",
          1000: "#001410",
          1050: "#191516",
        },
      },
    },
  },
  plugins: [],
};
