/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#8B5CF6",
          accent: "#22D3EE"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)"
      }
    },
  },
  plugins: [],
};
