/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 0px 10px rgba(255, 255, 255, 100)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        sphinxisland: " sphinxisland 5s infinite alternate-reverse",
        ship1: "ship1 5s linear infinite",
        ship2: "ship2 50s linear infinite",
        ship3: "ship3 10s linear infinite",
      },
      keyframes: {
        sphinxisland: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(20px)" },
        },
        ship1: {
          "0%": { transform: "translateX(-1200px)" },
          "50%": { transform: "translateY(100px)" },
          "100%": { transform: "translateX(1270px)" },
        },
        ship2: {
          "0%": { transform: "translateX(500px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateX(-1000px)" },
        },
        ship3: {
          "0%": { transform: "translateX(-1000px)" },
          "50%": { transform: "translateY(100px)" },
          "100%": { transform: "translateX(500px)" },
        },
      },
    },
  },
  plugins: [],
};
