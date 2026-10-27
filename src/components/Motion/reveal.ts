import type { Variants } from 'framer-motion';
import { easeOut } from 'framer-motion';

/** Поява знизу: переводить opacity до 1 і y до 0 за 0,6 секунди. */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/** Поява зліва: прибирає відступ -40 px зі спільним плавним easeOut. */
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/** Поява справа: симетрично повертає елемент з x=40 до початкової позиції. */
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/** М'яко збільшує елемент від 95% до повного масштабу разом із проявленням. */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

/** Контейнер не анімує себе, а запускає дочірні variants з інтервалом 0,1 секунди. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

