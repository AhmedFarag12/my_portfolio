/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f",
          light: "#112240",
          lighter: "#1d2d50",
          deep: "#060f20",
        },
        slatey: {
          light: "#ccd6f6",
          DEFAULT: "#8892b0",
          dark: "#5b6b91",
        },
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#7dd3fc",
        },
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px -5px rgba(56, 189, 248, 0.35)",
        card: "0 10px 40px -15px rgba(2, 12, 27, 0.7)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        wheel: {
          "0%": { opacity: "0", transform: "translateY(-4px)" },
          "40%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "33%": { transform: "translate3d(40px, -30px, 0)" },
          "66%": { transform: "translate3d(-30px, 20px, 0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        fadeIn: "fadeIn 0.9s ease both",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 7s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1.1s step-end infinite",
        wheel: "wheel 1.8s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        popIn: "popIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
