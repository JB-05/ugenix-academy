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
        // Primary Text / Anchors - Deep Slate
        slate: {
          deep: '#1A1F2E',
        },
        // Brand Accent - Indigo-Blue (from Ugenix logo)
        brand: {
          DEFAULT: '#6758E0',
          dark: '#5548C0',
          light: '#7A6BE8',
        },
        // Soft Violet (for highlights, dividers)
        violet: {
          soft: '#B2A0EC',
          light: '#E0DDF8', 
        },
        // Warm Secondary Accent - Coral-Pink
        coral: {
          DEFAULT: '#E05C82',
          light: '#FDA4AF',
          soft: '#FFEFF2',
        },
        // Neutrals
        neutral: {
          offwhite: '#F5F3F0', // Warmer off-white
          border: '#E6E8EE',
          muted: '#5B6072',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
        'blob': 'blob 10s infinite',
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
      },
    },
  },
  plugins: [],
}
export default config

