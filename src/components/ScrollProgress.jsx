import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-spa-sage to-spa-lavender z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;