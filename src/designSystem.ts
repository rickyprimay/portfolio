/**
 * DESIGN SYSTEM - CLEAN PORTFOLIO
 *
 * This document outlines the clean design principles and standards for the portfolio
 */

// ============================================
// COLOR PALETTE
// ============================================
export const colors = {
  // Primary Brand Colors
  primary: "#c770f0", // Purple highlight
  primaryDark: "#a24dd3", // Darker purple

  // Backgrounds
  bgDark: "#0c0513", // Darkest
  bgBase: "#1b1429", // Base dark
  bgCard: "#181a27", // Card background
  bgLight: "#2d1950", // Lighter shade

  // Text
  textPrimary: "#ffffff", // White text
  textSecondary: "#b0b0b0", // Gray text
  textMuted: "#808080", // Muted gray

  // Accents
  accentPurple: "#cd5ff8", // Bright purple
  accentGold: "#ffd700", // Gold

  // Status
  error: "#ff6b6b",
  success: "#51cf66",
  warning: "#ffa94d",
};

// ============================================
// TYPOGRAPHY
// ============================================
export const typography = {
  // Headings
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold",
  h2: "text-3xl md:text-4xl font-bold",
  h3: "text-2xl md:text-3xl font-semibold",
  h4: "text-xl md:text-2xl font-semibold",
  h5: "text-lg font-semibold",
  h6: "text-base font-semibold",

  // Body
  bodyLarge: "text-lg leading-relaxed",
  body: "text-base leading-normal",
  bodySmall: "text-sm leading-normal",

  // Special
  caption: "text-xs uppercase tracking-wider",
};

// ============================================
// SPACING SCALE
// ============================================
export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  xxl: "3rem", // 48px
  xxxl: "4rem", // 64px
};

// ============================================
// COMPONENT PATTERNS
// ============================================

/**
 * BUTTONS
 * - Use consistent sizing: px-4 py-2 (sm), px-6 py-3 (md), px-8 py-4 (lg)
 * - All buttons have rounded-lg
 * - Transitions: all duration-300
 * - Hover effects: scale-105, shadow-lg
 */

/**
 * CARDS
 * - Background: bg-[#181a27]
 * - Border: border border-[#934cce5e]
 * - Rounded: rounded-xl
 * - Padding: p-6 md:p-8
 * - Shadow: shadow-lg
 * - Hover: scale-105 shadow-xl transition-all duration-300
 */

/**
 * SECTIONS
 * - Padding: py-12 md:py-20
 * - Max width: max-w-7xl mx-auto
 * - Heading: text-center mb-12
 * - Background: use gradient overlay
 */

/**
 * INPUTS & FORMS
 * - Background: bg-[#181a27]
 * - Border: border border-[#934cce5e]
 * - Focus: outline-none ring-2 ring-[#c770f0]
 * - Padding: px-4 py-2
 * - Rounded: rounded-lg
 */

// ============================================
// BREAKPOINTS
// ============================================
export const breakpoints = {
  mobile: "640px", // sm
  tablet: "768px", // md
  desktop: "1024px", // lg
  wide: "1280px", // xl
};

// ============================================
// ANIMATIONS
// ============================================
export const animations = {
  // Transition durations
  fast: "duration-150",
  normal: "duration-300",
  slow: "duration-500",

  // Easing
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
};

/**
 * ANIMATION BEST PRACTICES
 * - Use duration-300 as default
 * - Hover effects: scale-105, shadow-lg
 * - No jarring transforms, always smooth
 * - Group animations for multi-element interactions
 */

// ============================================
// RESPONSIVE DESIGN
// ============================================
/**
 * MOBILE FIRST APPROACH
 * - Base: mobile styles (< 640px)
 * - sm: 640px and up
 * - md: 768px and up  <- PRIMARY BREAKPOINT
 * - lg: 1024px and up
 * - xl: 1280px and up
 *
 * Example:
 * className="px-4 md:px-8 lg:px-12"
 * className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
 */

// ============================================
// CLEAN DESIGN PRINCIPLES
// ============================================
/**
 * 1. CONSISTENCY
 *    - Use the same colors, spacing, fonts throughout
 *    - Follow the spacing scale strictly
 *
 * 2. VISUAL HIERARCHY
 *    - Use size, color, spacing to guide attention
 *    - H1 > H2 > H3 > Body text
 *
 * 3. WHITESPACE
 *    - Don't overcrowd elements
 *    - Use consistent spacing
 *    - Breathing room improves readability
 *
 * 4. SIMPLICITY
 *    - Remove unnecessary elements
 *    - Clear typography
 *    - Minimal but purposeful color usage
 *
 * 5. FEEDBACK
 *    - Hover states on interactive elements
 *    - Smooth transitions (never instant)
 *    - Clear active/selected states
 *
 * 6. ACCESSIBILITY
 *    - Sufficient color contrast
 *    - Keyboard navigation
 *    - ARIA labels where needed
 */
