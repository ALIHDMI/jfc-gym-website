import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "jfc-bg": "#050505",
        "jfc-surface": "#111111",
        "jfc-card": "#181818",
        "jfc-accent": "#D00000",
        "jfc-accent-2": "#A00000",
        "jfc-fg": "#FFFFFF",
        "jfc-muted": "#C5C5C5",
        "jfc-border": "rgba(255,255,255,0.06)",
      },
      boxShadow: {
        soft: "0 16px 40px rgba(0,0,0,0.55)",
        "glow-accent":
          "0 0 0 1px rgba(208,0,0,0.18), 0 0 36px rgba(208,0,0,0.20)",
        glass:
          "0 0 0 1px rgba(255,255,255,0.06), 0 10px 30px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "jfc-hero": [
          "radial-gradient(900px 550px at 15% 25%, rgba(208,0,0,0.18), transparent 60%)",
          "radial-gradient(700px 500px at 90% 25%, rgba(160,0,0,0.14), transparent 55%)",
          "radial-gradient(800px 560px at 55% 110%, rgba(208,0,0,0.10), transparent 55%)",
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 35%)",
        ].join(", "),
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;

