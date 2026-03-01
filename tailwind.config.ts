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
        black: "#0A0A0A",
        white: "#FFFFFF",
        surface: "#F7F7F7",
        border: "#E5E5E5",
        "text-primary": "#0A0A0A",
        "text-secondary": "#6B6B6B",
        accent: "#D62B2B",
        "accent-dark": "#A81F1F",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderColor: {
        DEFAULT: "#E5E5E5",
      },
    },
  },
  plugins: [],
};

export default config;
