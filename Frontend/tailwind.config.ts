import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // Orange
      primary: {
        100: "#FF6711",
        200: "#D9560C",
        300: "#FF8B4A",
      },
      // Blue
      secondary: {
        100: '#1F58C6',
        200: '#D9560C',
        300: '#5582D9'
      },
      // yellow
      tertiary:{
        100:'#FFBE2A ',
        200: '#E7A000',
        300: '#FFCA51'
      },
      darkgrey:'#5D5D5D',
      grey:'#9F9F9F',
      whitebackground: '#F4F4F4',
      error: '#FF3B30'

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
