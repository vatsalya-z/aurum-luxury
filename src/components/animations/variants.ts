import { Variants, Transition } from 'framer-motion';

// Premium luxury easing curves
export const luxuryEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const gentleEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
export const bounceEase: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: luxuryEase,
};

// Directional Reveal Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? 0.7,
      delay: custom?.delay ?? 0,
      ease: luxuryEase,
    },
  }),
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -28 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom?.duration ?? 0.7,
      delay: custom?.delay ?? 0,
      ease: luxuryEase,
    },
  }),
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? 0.75,
      delay: custom?.delay ?? 0,
      ease: luxuryEase,
    },
  }),
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom?.duration ?? 0.75,
      delay: custom?.delay ?? 0,
      ease: luxuryEase,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (custom?: { delay?: number; duration?: number }) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom?.duration ?? 0.65,
      delay: custom?.delay ?? 0,
      ease: luxuryEase,
    },
  }),
};

// Stagger Container Variants
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: luxuryEase,
    },
  },
};

export const staggerItemLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: luxuryEase,
    },
  },
};

export const staggerItemRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: luxuryEase,
    },
  },
};

// Card Hover Variants
export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: luxuryEase },
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.35, ease: luxuryEase },
  },
};

// Button Micro-interactions
export const buttonHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2, ease: 'easeOut' } },
  tap: { scale: 0.97, transition: { duration: 0.1, ease: 'easeIn' } },
};
