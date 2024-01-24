import type { Config } from "tailwindcss";
import { Poppins } from "next/font/google";
import { secureHeapUsed } from "crypto";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        poppins: ['Poppins'],
      },
      colors: {
        primaryBlue: '#0032ff',
        secondaryBlue: '#000096',
        tertiaryBlue: '#082bb7',
        quaternaryBlue: '#2273ff',
        primaryLightBlue: '#00c8ff',
        secondaryLightBlue: '#f7f9ff',
        tertiaryLightBlue: '#e5f1ff',
        cuaternaryLightBlue: '#eff2ff',
        primaryOrange: '#ff6e00',
        secondaryOrange: '#ff9900',
        primaryGreen: '#00ff96',
        secondaryGreen: '#2bd346',
        primaryYellow: '#ffe600',
        secondaryYellow: '#ffc85d14',
        tertiaryYellow: '#f7b600',
        primaryPink: '#ff0f64',
        primaryRed: '#ff2e00',
        primaryWhite: '#ffffff',
        secondaryWhite: '#e4ebef',
        tertiaryWhite: '#f6f9ff',
        cuaternaryWhite: '#f6f6f6',
        quinaryWhite: '#f7f8fb',
        primaryBlack: '#3e4045',
        secondaryBlack: '#5e5e60',
        primaryGray: '#707e9b',
        secondaryGray: '#cdd6e0',
        tertiaryGray: '#aeaeae',
        quaternaryGray: '#d0d6e3',
        grayHoverEffect: 'rgba(60, 64, 67, .08)',
      },
    },
  },
  plugins: [],
};
export default config;
