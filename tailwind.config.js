import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#0A5C5C',
          mid: '#166666',
          light: '#2A7A7A',
        },
        gold: {
          burnt: '#C08A2E',
          soft: '#D4A04A',
        },
        offwhite: '#F4F1EA',
        graphite: {
          DEFAULT: '#1A1F1F',
          soft: '#3A4040',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
