const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Clinical Precision brand tokens
        surface: {
          DEFAULT: "hsl(var(--surface))",
          low: "hsl(var(--surface-low))",
          high: "hsl(var(--surface-high))",
          lowest: "hsl(var(--surface-lowest))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        glow: "0 0 40px -8px hsl(var(--primary) / 0.45)",
        "glow-sm": "0 0 22px -6px hsl(var(--primary) / 0.4)",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0.35)" },
          "70%": { boxShadow: "0 0 0 12px hsl(var(--primary) / 0)" },
          "100%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0)" },
        },
        "spine-scan-beam": {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(440px)", opacity: "0" },
        },
        "spine-scan-halo": {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "15%": { opacity: "0.55" },
          "85%": { opacity: "0.55" },
          "100%": { transform: "translateY(480px)", opacity: "0" },
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 7s ease-in-out infinite",
        "pulse-ring": "pulse-ring 3s infinite",
        "spine-scan-beam":
          "spine-scan-beam 4.2s ease-in-out infinite",
        "spine-scan-halo":
          "spine-scan-halo 4.2s ease-in-out infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--blue-500),
// which the Aurora background relies on. Color values that are already CSS-variable
// references (the shadcn semantic tokens) are skipped to avoid circular definitions.
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors)
      .filter(([, val]) => typeof val === "string" && !val.includes("var("))
      .map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
