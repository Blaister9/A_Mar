/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#003366',
        'mystic-blue': '#001F3F',
        'light-turquoise': '#33CCCC',
        'aquamarine': '#7FFFD4',
        'luxury-gold': '#DAA520',
        'sophisticated-bronze': '#CD7F32',
        'modern-rose': '#FFC0CB',
        'vanguard-lavender': '#E6E6FA',
        'soft-gray':'#F5F5F5'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s forwards',
        'slide-in-from-right': 'slideIn 0s forwards'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}