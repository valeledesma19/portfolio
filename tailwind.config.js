/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ECEFEA",
        ink: "#142433",
        amber: "#D9A441",
        teal: "#2F6F62",
        line: "#D7DAD2",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
