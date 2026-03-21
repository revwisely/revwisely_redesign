import type { Variants } from "framer-motion";

// Brand-compliant motion presets
// Duration: 600ms | Ease: cubic-bezier(0.25, 0.1, 0.25, 1)
// Translation: 20-40px | Stagger: 80-120ms
// Rule: Never distracting, never gimmicky.

const brandEase = [0.25, 0.1, 0.25, 1] as const;
const brandDuration = 0.6;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: brandDuration, ease: brandEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: brandDuration, ease: brandEase },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: brandDuration, ease: brandEase },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: brandDuration, ease: brandEase },
  },
};
