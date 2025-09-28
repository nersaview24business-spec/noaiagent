module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wwwchatbasecoalabaster: "var(--wwwchatbasecoalabaster)",
        wwwchatbasecoiron: "var(--wwwchatbasecoiron)",
        "wwwchatbasecosantas-gray": "var(--wwwchatbasecosantas-gray)",
        "wwwchatbasecoscarpa-flow": "var(--wwwchatbasecoscarpa-flow)",
        "wwwchatbasecospun-pearl": "var(--wwwchatbasecospun-pearl)",
        "wwwchatbasecostorm-gray": "var(--wwwchatbasecostorm-gray)",
        "wwwchatbasecostorm-gray-30": "var(--wwwchatbasecostorm-gray-30)",
        wwwchatbasecowhite: "var(--wwwchatbasecowhite)",
        wwwchatbasecowoodsmoke: "var(--wwwchatbasecowoodsmoke)",
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
      },
      fontFamily: {
        "www-chatbase-co-inter-medium":
          "var(--www-chatbase-co-inter-medium-font-family)",
        "www-chatbase-co-inter-regular":
          "var(--www-chatbase-co-inter-regular-font-family)",
        "www-chatbase-co-semantic-button":
          "var(--www-chatbase-co-semantic-button-font-family)",
        "www-chatbase-co-semantic-heading-1":
          "var(--www-chatbase-co-semantic-heading-1-font-family)",
        "www-chatbase-co-semantic-heading-2":
          "var(--www-chatbase-co-semantic-heading-2-font-family)",
        "www-chatbase-co-semantic-link":
          "var(--www-chatbase-co-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
