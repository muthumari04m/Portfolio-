/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1020",
        card: "#121A2B",
        accent: "#60A5FA",
        ink: "#F8FAFC",
        mute: "#94A3B8",
      },
      fontFamily: {
        sans: ['"Segoe UI"', "Inter", "system-ui", "-apple-system", "Roboto", "sans-serif"],
        display: ["Georgia", '"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
};
