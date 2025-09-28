import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = '', prefix = '' }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [count, to, duration, inView]);

  return (
    <motion.div ref={ref} className="text-2xl font-bold text-spa-sage mb-1">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.div>
  );
};

export default AnimatedCounter;