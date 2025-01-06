/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        founders: ["Founders_Grotesk_Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
