import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        frikiYellow: "#FFBB02",
        frikiBlue: "#475792",
        frikiWhite: "#F7F0EA",
      },
      backgroundImage: {
        "custom-gradient": "radial-gradient(#FFBB02 1.2px, #F7F0EA 1.2px)",
      },
      backgroundSize: {
        "custom-size": "24px 24px",
      },
      fontFamily: {
        impact: ["Impact"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        ".animation-paused": {
          "animation-play-state": "paused",
        },
        ".animation-running": {
          "animation-play-state": "running",
        },
      });
    },
  ],
};
export default config;
