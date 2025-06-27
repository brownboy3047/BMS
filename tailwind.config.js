/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basic: "",
        primary: {
          DEFAULT: "#343a40",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: "#3490dc",
      },
    },
  },
  plugins: [],
};
