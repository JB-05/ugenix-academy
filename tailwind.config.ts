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
        },
        // Warm Secondary Accent - Coral-Pink (minimal use)
        coral: {
          DEFAULT: '#E05C82',
        },
        // Neutrals
        neutral: {
          offwhite: '#F7F8FA',
          border: '#E6E8EE',
          muted: '#5B6072',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
}
export default config

