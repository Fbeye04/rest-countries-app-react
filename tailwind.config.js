/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "var(" /* Grey 50 */,
        "element-color": "hsl(0, 100%, 100%)" /* White */,
        "text-color": "hsl(200, 15%, 8%)" /* Grey 950 */,
        "input-color": "hsl(0, 0%, 50%)" /* Grey 400 */,
        "dark-bg": "hsl(207, 26%, 17%)" /* Blue 950 */,
        "dark-element": "hsl(209, 23%, 22%)" /* Blue 900 */,
        "dark-text": "hsl(0, 100%, 100%)" /* White */,
        "dark-input": "hsl(0, 0%, 50%)" /* Grey 400 */,
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
