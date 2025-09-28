// Animation configurations for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const cardHover = {
  scale: 1.05,
  y: -10,
  transition: { duration: 0.3, ease: "easeOut" }
};

export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const parallaxAnimation = {
  initial: { y: 0 },
  animate: { y: -50 },
  transition: { duration: 1, ease: "easeOut" }
};

export const typewriter = {
  initial: { width: 0 },
  animate: { width: "100%" },
  transition: { duration: 2, ease: "easeInOut" }
};

export const rippleEffect = {
  initial: { scale: 0, opacity: 1 },
  animate: { scale: 4, opacity: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};