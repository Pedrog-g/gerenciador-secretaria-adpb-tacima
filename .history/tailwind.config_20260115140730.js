/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        alternative: "var(--color-alternative)",
        warning: "var(--color-warning)",
        placeholder: "var(--color-placeholder)",
        "placeholder-bold": "var(--color-placeholder-bold)",
      },
      fontFamily: {
        display: ["Phetsarath", "sans-serif"],
      },
    },
  },
  plugins: [],
};