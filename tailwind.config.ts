import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        herobg: '#ECD2FA',
        accent: '#FB2E86',
        text: '#0D0E43',
        subText: '#8A8FB9',
        violet: '#7E33E0',
        blue: '#2F1AC4',
        bright_green: '#08D15F',
        light_bg: '#F6F5FF'
      }
    },
  },
  plugins: [],
};
export default config;
