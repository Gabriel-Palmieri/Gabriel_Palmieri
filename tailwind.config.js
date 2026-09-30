/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        line: 'var(--line)',
      },
      fontFamily: { sans: ['Space Grotesk', 'sans-serif'] },
      transitionTimingFunction: { 'out-expo': 'var(--ease)' },
      animation: {
        'change-project': 'changeProject 400ms var(--ease)',
        'change-image': 'changeImage 320ms var(--ease)',
        compose: 'compose 1600ms var(--ease) infinite',
      },
    },
  },
  plugins: [],
};
