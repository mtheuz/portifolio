import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow-primary' : '#FFA800',
        'green-button-primary' : '#33FF00'
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),
],
};
export default config;
