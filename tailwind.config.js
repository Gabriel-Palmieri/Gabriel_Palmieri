/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7A00FF 0%, #9933FF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #111827 0%, #1F2937 50%, #111827 100%)',
        'gradient-purple': 'linear-gradient(to right, #7A00FF, #9933FF, #B366FF)',
        'gradient-neon': 'linear-gradient(to right bottom, #7A00FF 0%, #330066 100%)',
        'gradient-cosmic': 'radial-gradient(circle at center, #7A00FF 0%, #1A0033 100%)',
        'gradient-tech': 'linear-gradient(45deg, #111827, #1F2937, #374151)',
        'gradient-glow': 'linear-gradient(to right, rgba(122, 0, 255, 0.2), rgba(153, 51, 255, 0.2), rgba(122, 0, 255, 0.2))'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(122, 0, 255, 0.5)',
        'glow-lg': '0 0 30px rgba(122, 0, 255, 0.7)',
        'glow-xl': '0 0 50px rgba(122, 0, 255, 0.9)',
        'inner-glow': 'inset 0 0 20px rgba(122, 0, 255, 0.5)',
        'neon': '0 0 5px #7A00FF, 0 0 20px #9933FF, 0 0 40px #B366FF',
        'cosmic': '0 0 15px rgba(122, 0, 255, 0.3), 0 0 30px rgba(153, 51, 255, 0.2)'
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'bounce-soft': 'bounce-soft 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'scale': 'scale 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'cosmic-pulse': 'cosmic-pulse 4s ease infinite',
        'text-shimmer': 'text-shimmer 2s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-reverse': 'spin-reverse 10s linear infinite',
        'loading-progress': 'loading-progress 2.5s ease-out forwards',
        'gradient': 'gradient 15s ease infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'slide-right': 'slide-right 15s linear infinite',
        'slide-left': 'slide-left 15s linear infinite',
        'slide-right-slow': 'slide-right 25s linear infinite',
        'slide-left-slow': 'slide-left 25s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) scale(1.05)' },
          '50%': { transform: 'translateY(20px) scale(1)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(122, 0, 255, 0.5)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(122, 0, 255, 0.8)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(5%)' }
        },
        'scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'cosmic-pulse': {
          '0%': { boxShadow: '0 0 15px rgba(122, 0, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(122, 0, 255, 0.6)' },
          '100%': { boxShadow: '0 0 15px rgba(122, 0, 255, 0.3)' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'border-pulse': {
          '0%, 100%': { borderColor: '#7A00FF' },
          '50%': { borderColor: '#9933FF' }
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'loading-progress': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        gradient: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
} 