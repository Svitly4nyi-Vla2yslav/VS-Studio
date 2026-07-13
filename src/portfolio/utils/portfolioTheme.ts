// Тема портфоліо тримає всі кольори в одному місці, щоб сторінка була ізольованою від основного сайту.
export const portfolioTheme = {
  colors: {
    background: '#070A12',
    backgroundSoft: '#0B101D',
    backgroundPanel: '#101827',
    surface: 'rgba(16, 24, 39, 0.76)',
    surfaceStrong: 'rgba(12, 18, 31, 0.94)',
    border: 'rgba(148, 163, 184, 0.22)',
    purple: '#7C3AED',
    purpleSoft: '#C084FC',
    cyan: '#67E8F9',
    blue: '#38BDF8',
    gold: '#D4AF37',
    goldSoft: '#FDE68A',
    white: '#F8FAFC',
    muted: '#B6C2D2',
    danger: '#FB7185',
  },
  fonts: {
    body: '"Geist", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading:
      '"Geist", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    display: '"Bebas Neue", "Geist", sans-serif',
  },
  radii: {
    panel: '20px',
    compact: '12px',
    pill: '999px',
  },
  motion: {
    fast: '160ms',
    base: '240ms',
    slow: '380ms',
    ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  z: {
    background: 0,
    content: 10,
    header: 40,
    skipLink: 60,
  },
  shadows: {
    panel: '0 24px 90px rgba(0, 0, 0, 0.45)',
    purpleGlow: '0 0 34px rgba(124, 58, 237, 0.36)',
    cyanGlow: '0 0 30px rgba(34, 211, 238, 0.3)',
    goldGlow: '0 0 30px rgba(246, 211, 101, 0.26)',
  },
} as const;
