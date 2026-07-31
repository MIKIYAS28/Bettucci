import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#241611',
        walnut: '#3C2415',
        gold: '#D4AF37',
        'gold-soft': '#E8C766',
        'ethio-green': '#0B6E4F',
        wine: '#7A1F2B',
        parchment: '#F3EAD8',
        'charcoal-text': '#1C1410',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        heading: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
