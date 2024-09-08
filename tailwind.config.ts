import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#C8EE44",
        "bg-color": "#1E1C30",
        "gray-color": "#1C1A2E"
      },
      boxShadow: {
        "right-side":"5px 0 10px -2px #00000040" 
      },
      padding: {
        "px": "1rem",
        "py": "1.875rem"
      }
    },
  },
  plugins: [],
};
export default config;
