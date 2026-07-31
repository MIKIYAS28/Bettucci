import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf7f0',
          100: '#f8eadc',
          200: '#efd3b7',
          300: '#e3b182',
          400: '#d68b4a',
          500: '#c56e2e',
          600: '#ab5623',
          700: '#8a4521',
          800: '#703b21',
          900: '#5d3220',
        },
        accent: {
          500: '#4b3a2f',
          700: '#31251f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
