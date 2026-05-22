import type { Variants } from 'framer-motion';
import { easeOut } from 'framer-motion';

// Єдине viewport-налаштування допомагає секціям з'являтися один раз і не перевантажувати анімації.
export const portfolioViewport = {
  once: true,
  amount: 0.22,
} as const;

// Hero entrance імітує “system awakening” без важких canvas-ефектів.
export const systemAwakening: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(14px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.78,
      ease: easeOut,
    },
  },
};

// Контейнер керує stagger-появою карток у секціях.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Базовий reveal для manga panels, quest cards і guild documents.
export const revealCard: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: easeOut,
    },
  },
};

// Заповнення XP-ліній відбувається при появі відповідної секції.
export const xpFill: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: easeOut,
    },
  },
};
