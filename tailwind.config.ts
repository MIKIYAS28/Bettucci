import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: '#14100D',
        stone: '#2A211B',
        gold: '#C9A227',
        'gold-light': '#F0D77B',
        wine: '#5C1A22',
        terracotta: '#B5651D',
        ivory: '#F4ECD8',
      },
      fontFamily: {
        display: ['var(--font-tangerine)', 'serif'],
        heading: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(8px)' },
          '50%': { opacity: '0.8', filter: 'blur(12px)' },
        },
        'particle-drift': {
          '0%': { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-60px) translateX(20px)', opacity: '0' },
        },
        'checkmark-draw': {
          '0%': { strokeDashoffset: '25' },
          '100%': { strokeDashoffset: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'particle-drift': 'particle-drift 3s ease-in-out infinite',
        'checkmark-draw': 'checkmark-draw 0.8s ease-in-out forwards',
        'marquee': 'marquee 24s linear infinite',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
