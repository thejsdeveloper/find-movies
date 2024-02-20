import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2.5xl": "2.5rem",
        "1.31xl": "1.31rem",
      },
      colors: {
        primary: {
          DEFAULT: "#FDD835",
          light: "#ffeb3b",
        },
        gray: {
          "900": "#212121",
          DEFAULT: "#F5F5F5",
          "60": "rgba(245, 245, 245, 0.6)",
          "36": "rgba(255, 255, 255, 0.36)",
          "16": "rgba(255, 255, 255, 0.16)",
        },
      },
      backgroundImage: {
        movie: "linear-gradient(116deg, #ffee58 0%, #ff8f00 105%)",
      },
    },
  },
  plugins: [],
};
export default config;
