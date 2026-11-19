import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050508',
        charcoal: '#0E0F14',
        offwhite: '#EAEAEA',
        muted: '#888888',
        patina: '#8DA399',
        royal: '#3B82F6',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'halo': '0 0 80px rgba(255, 255, 255, 0.14), 0 0 24px rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
