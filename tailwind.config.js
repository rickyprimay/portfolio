/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Star Wars Blue Saber Theme - Enhanced & Brighter
        primary: "#0080ff",      // Bright electric blue saber
        "primary-dark": "#0052cc", // Darker blue variant

        // Backgrounds - More vibrant with better contrast
        "bg-dark": "#000508",     // Nearly black with blue tint
        "bg-base": "#050a1a",     // Deep space with blue accent
        "bg-card": "#0a1529",     // Card background with blue glow potential
        "bg-light": "#0f1f3d",    // Lighter blue with visible depth

        // Text Colors
        "text-muted": "#6b8fd4",  // Brighter muted blue

        // Accents - More vibrant cyan/electric
        "accent-purple": "#00ffff", // Bright cyan (max brightness)
        "accent-gold": "#00e5ff",   // Electric cyan bright
      },
      boxShadow: {
        "sm": "0 1px 2px 0 rgba(0, 128, 255, 0.15)",
        "md": "0 4px 6px -1px rgba(0, 128, 255, 0.2)",
        "lg": "0 10px 15px -3px rgba(0, 128, 255, 0.25)",
        "xl": "0 20px 25px -5px rgba(0, 128, 255, 0.3)",
        "glow": "0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 128, 255, 0.5)",
        "glow-lg": "0 0 30px rgba(0, 255, 255, 0.9), 0 0 60px rgba(0, 128, 255, 0.7)",
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
        wave: "wave 2s ease-in-out infinite",
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
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
}
