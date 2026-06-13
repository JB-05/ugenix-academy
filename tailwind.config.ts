import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        // Premium Industrial — Burnt Orange accent scale
        orange: {
          400: '#EB6844',
          500: '#E4572E',
          glow: '#C6A75E',
        },
        gold: {
          DEFAULT: '#C6A75E',
          light: '#D4BA82',
        },
        // Dark surfaces
        bg: {
          950: '#121212',
          900: '#1F1F1F',
          850: '#2A2A2A',
          800: '#333333',
        },
        text: {
          primary: '#F4F1ED',
          secondary: '#BDBDBD',
          muted: '#757575',
        },
        border: {
          primary: '#333333',
          hover: '#4D4D4D',
        },
        // Legacy tokens (sections not yet migrated)
        slate: {
          deep: '#1A1F2E',
        },
        brand: {
          DEFAULT: '#6758E0',
          dark: '#5548C0',
          light: '#7A6BE8',
        },
        violet: {
          soft: '#B2A0EC',
          light: '#E0DDF8',
        },
        coral: {
          DEFAULT: '#E05C82',
          light: '#FDA4AF',
          soft: '#FFEFF2',
        },
        neutral: {
          offwhite: '#F5F3F0',
          border: '#E6E8EE',
          muted: '#5B6072',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        btn: '14px',
        input: '12px',
      },
      boxShadow: {
        'orange-glow':
          '0 0 20px rgba(228, 87, 46, 0.15), 0 0 40px rgba(228, 87, 46, 0.10)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      animation: {
        aurora: 'aurora 20s linear infinite',
        blob: 'blob 10s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%': { backgroundPosition: '50% 50%, 50% 50%' },
          '100%': { backgroundPosition: '350% 50%, 350% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
