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
        background: "#08090C",
        surface: "#0E1015",
        "surface-border": "rgba(255, 255, 255, 0.08)",
        "surface-hover": "#131620",
        cyan: {
          glow: "#00F2FE",
          dim: "rgba(0, 242, 254, 0.15)",
        },
        emerald: {
          accent: "#00E676",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(0, 242, 254, 0.12) 0%, rgba(8, 9, 12, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
