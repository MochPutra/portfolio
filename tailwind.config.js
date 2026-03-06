/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          blue: "#2563eb",
          cyan: "#06b6d4"
        }
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        soft: "0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04)",
      },
      backgroundImage: {
        "gradient-soft":
          "radial-gradient(circle at top left, rgba(37,99,235,0.18), transparent 55%), radial-gradient(circle at top right, rgba(6,182,212,0.18), transparent 55%), linear-gradient(to bottom, #f9fafb, #e0f2fe)"
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    }
  },
  plugins: []
};