/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["\"Poppins\"", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          navy: "#4C1D95", // rich purple for depth
          amber: "#7C3AED", // primary accent purple
          lavender: "#EDE9FE", // soft accent
          light: "#FFFFFF",
          dark: "#111827",
        },
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 20px 20px, rgba(124,58,237,0.18) 2px, transparent 0), radial-gradient(circle at 60px 60px, rgba(76,29,149,0.16) 2px, transparent 0)",
      },
      boxShadow: {
        glow: "0 10px 40px rgba(124, 58, 237, 0.28)",
      },
    },
  },
  plugins: [],
}
