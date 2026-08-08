// Reusable Framer Motion variants for consistent editorial motion

export const easeOutExpo = [0.22, 1, 0.36, 1];

// Container that staggers children
export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0,
) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Word-by-word slide up
export const wordSlideUp = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easeOutExpo,
    },
  },
};

// Simple fade in from bottom
export const fadeUp = (delay = 0) => ({
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      delay,
    },
  },
});

// Scale in (used for the logo)
export const scaleIn = (delay = 0) => ({
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      delay,
    },
  },
});

// Fade down (used for nav)
export const fadeDown = (delay = 0) => ({
  hidden: { y: -20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
      delay,
    },
  },
});
