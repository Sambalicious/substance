const easeing = [0.6, -0.05, 0.01, 0.99];
export const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

export const slowTextReveal = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

export const textFadeIn = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const textFadeStyle = {
  initial: { y: "100%" },
  animate: { y: 0, transition: { delay: 0.5 } },
};
