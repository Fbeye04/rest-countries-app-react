/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "hsl(0, 0%, 99%)" /* Grey 50 */,
        "element-color": "hsl(0, 100%, 100%)" /* White */,
        "text-color": "hsl(200, 15%, 8%)" /* Grey 950 */,
        "input-color": "hsl(0, 0%, 50%)" /* Grey 400 */,
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
