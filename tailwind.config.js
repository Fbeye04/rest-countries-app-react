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
    },
  },
  plugins: [],
};
