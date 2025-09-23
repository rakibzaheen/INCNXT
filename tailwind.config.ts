
import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";
// import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/layout.tsx',
    './app/page.tsx',
  ],
  theme: {
    extend: {
      colors: {
         primary: {
          50: '#e6f0f7',
          100: '#c0d9ec',
          200: '#99c2e0',
          300: '#73abd5',
          400: '#4d94ca',
          500: '#267dbf',
          600: '#0F395D', // your main color
          700: '#0c2e4a',
          800: '#092236',
          900: '#061523',
        },
        secondary: {
          50: '#fdfdfd',
          100: '#f8f8f8',
          200: '#f2f2f2',
          300: '#ececec',
          400: '#e6e6e6',
          500: '#f5f5f5', // your main secondary
          600: '#d9d9d9',
          700: '#bfbfbf',
          800: '#a6a6a6',
          900: '#8c8c8c',
        },
        background: '#fcfcfc',
        text: '#0F395D',
        orange: {
          500: '#D51F27',
          600: '#b71c20',
        },
      },
    },
  },
  plugins: [aspectRatio],
};

export default config;


