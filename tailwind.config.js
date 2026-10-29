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
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'var(--ease)',
      },
      animation: {
        'change-project': 'changeProject 300ms var(--ease)',
        'change-image': 'changeImage 320ms var(--ease)',
        'gallery-expand': 'galleryExpand 450ms var(--ease) both',
        'hero-support': 'heroSupport 550ms var(--ease) 130ms both',
        'loading-line': 'loadingLine 1100ms var(--ease) infinite',
        'nav-open': 'navOpen 240ms var(--ease) both',
        'detail-reveal': 'detailReveal 260ms var(--ease) both',
      },
      keyframes: {
        galleryExpand: {
          from: {
            transform:
              'translate(var(--gallery-x), var(--gallery-y)) scale(var(--gallery-scale))',
            opacity: '.3',
          },
          to: {
            transform: 'translate(0, 0) scale(1)',
            opacity: '1',
          },
        },
        heroSupport: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        loadingLine: {
          '0%': {
            transform: 'scaleX(.08)',
            opacity: '.65',
          },
          '65%, 100%': {
            transform: 'scaleX(1)',
            opacity: '1',
          },
        },
        navOpen: {
          from: {
            clipPath: 'inset(0 0 100% 0)',
          },
          to: {
            clipPath: 'inset(0 0 0 0)',
          },
        },
        changeProject: {
          from: {
            transform: 'translateX(calc(12px * var(--project-direction, 1)))',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        changeImage: {
          from: {
            opacity: '.7',
            clipPath: 'inset(0 0 0 7%)',
          },
          to: {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },
        detailReveal: {
          from: {
            opacity: '0',
            clipPath: 'inset(0 0 12% 0)',
          },
          to: {
            opacity: '1',
            clipPath: 'inset(0 0 0 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
