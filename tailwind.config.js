/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        primary: "#c770f0",      // Purple highlight
        "primary-dark": "#a24dd3", // Darker purple

        // Backgrounds
        "bg-dark": "#0c0513",     // Darkest
        "bg-base": "#1b1429",     // Base dark
        "bg-card": "#181a27",     // Card background
        "bg-light": "#2d1950",    // Lighter shade

        // Text Colors
        "text-muted": "#808080",  // Muted gray

        // Accents
        "accent-purple": "#cd5ff8", // Bright purple
        "accent-gold": "#ffd700",   // Gold
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        "xs": "0.25rem",    // 4px
        "sm": "0.5rem",     // 8px
        "md": "1rem",       // 16px
        "lg": "1.5rem",     // 24px
        "xl": "2rem",       // 32px
        "xxl": "3rem",      // 48px
        "xxxl": "4rem",     // 64px
      },
      borderRadius: {
        "xs": "0.25rem",
        "sm": "0.375rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
      },
      boxShadow: {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeIn: "fadeIn 0.3s ease-in-out",
        slideUp: "slideUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}
