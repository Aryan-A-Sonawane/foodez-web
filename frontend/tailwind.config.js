/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5A623",
        secondary: "#333333",
        lightGray: "#F2F2F2",
        pastelPink: "#FFE6E6",
        pastelYellow: "#FFF6D5",
        pastelGreen: "#E6F5E6",
        background: "#E6F0FA",
      },
    },
  },
  plugins: [],
};
