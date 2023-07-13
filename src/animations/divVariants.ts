export const boxVariant1 = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const slideInVariant = {
  initial: {
    x: 0,
    scale: 1.5,
    backgroundColor: "yellow",
  },
  animate: {
    x: 500,
    scale: 0.3,
  },
};

export const revealVariant = {
  initial: {
    opacity: 0,
    y: 75,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const slideRevealVariant = {
  initial: { left: 0 },
  animate: { left: "100%" },
};

export const staggerVariant = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const staggeredContainer = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 0.8,
    rotate: 630,
    borderRadius: "100%",
  },
};

export const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
