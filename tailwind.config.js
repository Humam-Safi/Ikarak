/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary color family (teal/turquoise)
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
        },
        
        // Secondary color family (soft amber)
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        
        // Grey scale - softer than default
        grey: {
          50: "var(--grey-50)",
          100: "var(--grey-100)",
          200: "var(--grey-200)",
          300: "var(--grey-300)",
          400: "var(--grey-400)",
          500: "var(--grey-500)",
          600: "var(--grey-600)",
          700: "var(--grey-700)",
          800: "var(--grey-800)",
          900: "var(--grey-900)",
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'page-enter': 'pageEnter 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'page-exit': 'pageExit 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'shadowBreathing': 'shadowBreathing 3s infinite',
        // New title animations
        'title-reveal': 'titleReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'title-glow': 'titleGlow 2s ease-in-out infinite',
        'title-shimmer': 'titleShimmer 2.5s ease-in-out infinite',
        'title-wave': 'titleWave 2s ease-in-out infinite',
        'title-shadow': 'titleShadow 4s ease-in-out infinite',
        'title-bg-shift': 'titleBgShift 8s ease-in-out infinite',
        'underline-expand': 'underlineExpand 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'letter-spacing': 'letterSpacing 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
      keyframes: {
        pageEnter: {
          '0%': {
            opacity: '0.5',
            transform: 'translate3d(0, 20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        pageExit: {
          '0%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            opacity: '0.5',
            transform: 'translate3d(0, -20px, 0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-5px)' },
          '75%': { transform: 'translateY(5px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        shadowBreathing: {
          '0%, 100%': { boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' },
          '50%': { boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        zoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        // New title animation keyframes
        titleReveal: {
          '0%': {
            opacity: '0.5',
            transform: 'translateY(20px) scaleY(0.8)',
            letterSpacing: '-0.2em',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scaleY(1)',
            letterSpacing: 'normal',
            filter: 'blur(0)',
          },
        },
        titleGlow: {
          '0%, 100%': { 
            textShadow: '0 0 2px rgba(0, 175, 175, 0.2), 0 0 3px rgba(0, 175, 175, 0.2), 0 0 4px rgba(0, 175, 175, 0.2)',
          },
          '50%': { 
            textShadow: '0 0 4px rgba(0, 175, 175, 0.5), 0 0 8px rgba(0, 175, 175, 0.4), 0 0 12px rgba(0, 175, 175, 0.3)',
          },
        },
        titleShimmer: {
          '0%': { 
            backgroundPosition: '-300px 0',
          },
          '100%': { 
            backgroundPosition: '300px 0',
          },
        },
        titleWave: {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '25%': { 
            transform: 'translateY(-5px)',
          },
          '50%': { 
            transform: 'translateY(0)',
          },
          '75%': { 
            transform: 'translateY(5px)',
          },
        },
        titleShadow: {
          '0%, 100%': { 
            textShadow: '2px 2px 0 rgba(0, 175, 175, 0.4)',
          },
          '50%': { 
            textShadow: '4px 4px 0 rgba(255, 187, 0, 0.4)',
          },
        },
        titleBgShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
          },
        },
        underlineExpand: {
          '0%': {
            width: '0%',
            opacity: '0',
          },
          '100%': {
            width: '100%',
            opacity: '1',
          },
        },
        letterSpacing: {
          '0%': {
            letterSpacing: '-0.05em',
          },
          '100%': {
            letterSpacing: 'normal',
          },
        },
      },
      boxShadow: {
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 0 15px rgba(0, 0, 0, 0.1)',
        'soft': '0 5px 15px rgba(0, 0, 0, 0.05)',
        'floating': '0 15px 25px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(var(--primary-500-rgb), 0.5)'
      },
      fontSize: {
        // Slightly adjusted font sizes for better readability
        'xs': '0.8125rem',    // 13px
        'sm': '0.9375rem',    // 15px
        'base': '1.0625rem',  // 17px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
      },
      fontFamily: {
        'sans': [
          'Cairo',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        'arabic': [
          'Cairo',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        arabic: ["Tajawal", "sans-serif"],
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      letterSpacing: {
        'slight': '0.01em',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, var(--primary-600), var(--primary-500))',
        'gradient-secondary': 'linear-gradient(45deg, var(--secondary-500), var(--secondary-300))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
