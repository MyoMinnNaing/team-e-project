/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "monospace", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: "DM Sans",
        time: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
