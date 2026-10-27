/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#080808',
          bg: '#080808',
          surface: '#101010',
          elevated: '#161616',
          card: '#121212',
          border: '#1E1E1E',
          'border-light': '#2A2A2A',
        },
        gold: {
          100: '#FAF4E3',
          200: '#F5E8C4',
          300: '#EED9A0',
          400: '#E5C77A',
          500: '#D8B45A', // Base Champagne Gold
          600: '#B8933D',
          700: '#8C6C24',
          800: '#634B16',
          900: '#3D2D0B',
        },
        cream: {
          DEFAULT: '#F5F2EB',
          50: '#FFFFFF',
          100: '#F5F2EB', // Primary Text
          200: '#EBE5D8',
          300: '#D5CDBE',
        },
        muted: {
          DEFAULT: '#A7A29A', // Muted Text
          light: '#C4BFB7',
          dark: '#736F67',
        },
        navy: {
          950: '#06090F',
          900: '#0B101D',
          800: '#11192C',
          700: '#1B2744',
        }
      },
      fontFamily: {
        display: ['Syne', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'gold-sm': '0 0 15px -3px rgba(216, 180, 90, 0.12)',
        'gold-md': '0 0 25px -4px rgba(216, 180, 90, 0.20)',
        'gold-lg': '0 0 35px -5px rgba(216, 180, 90, 0.30)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
