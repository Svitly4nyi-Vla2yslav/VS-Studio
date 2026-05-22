// Тема портфоліо тримає всі кольори в одному місці, щоб сторінка була ізольованою від основного сайту.
export const portfolioTheme = {
  colors: {
    background: '#050510',
    backgroundSoft: '#080812',
    backgroundPanel: '#0B0B18',
    purple: '#7C3AED',
    purpleSoft: '#A855F7',
    cyan: '#22D3EE',
    blue: '#38BDF8',
    gold: '#D4AF37',
    goldSoft: '#F6D365',
    white: '#F8FAFC',
    muted: '#A1A1AA',
    danger: '#FB7185',
  },
  fonts: {
    body: '"Inter", "Manrope", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Cinzel", "Playfair Display", "Geist", system-ui, serif',
  },
  radii: {
    panel: '8px',
    pill: '999px',
  },
  shadows: {
    panel: '0 24px 90px rgba(0, 0, 0, 0.45)',
    purpleGlow: '0 0 34px rgba(124, 58, 237, 0.36)',
    cyanGlow: '0 0 30px rgba(34, 211, 238, 0.3)',
    goldGlow: '0 0 30px rgba(246, 211, 101, 0.26)',
  },
} as const;
