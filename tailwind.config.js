/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#050505",
          card: "#0d0d0d",
          accent: "#f5f5f7",
          muted: "#86868b",
          border: "#1c1c1e"
        },
        cyber: {
          bg: "#030014",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          rose: "#f43f5e",
        }
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
