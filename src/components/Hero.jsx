import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, staggerContainer, slideInFromBottom } from '../utils/animations';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const [ripples, setRipples] = useState([]);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(156, 175, 136, 0.3)), url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          y
        }}
      />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-spa-sage/20 via-transparent to-spa-lavender/20"
        animate={{
          background: [
            'linear-gradient(135deg, rgba(156, 175, 136, 0.2) 0%, transparent 50%, rgba(230, 230, 250, 0.2) 100%)',
            'linear-gradient(135deg, rgba(230, 230, 250, 0.2) 0%, transparent 50%, rgba(156, 175, 136, 0.2) 100%)',
            'linear-gradient(135deg, rgba(156, 175, 136, 0.2) 0%, transparent 50%, rgba(230, 230, 250, 0.2) 100%)'
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content */}
      <motion.div 
        className="relative text-center text-white px-4 sm:px-6 lg:px-8 z-10"
        style={{ opacity }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          variants={fadeInUp}
        >
          Welcome to{' '}
          <motion.span 
            className="block gradient-text text-6xl sm:text-7xl lg:text-8xl"
            variants={fadeInUp}
          >
            Serenity Spa
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-white/90"
          variants={fadeInUp}
        >
          Escape the stress of everyday life and immerse yourself in a world of tranquility. 
          Experience our rejuvenating treatments designed to restore your mind, body, and spirit.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={fadeInUp}
        >
          <motion.button
            onClick={(e) => {
              createRipple(e);
              scrollToBooking();
            }}
            className="relative overflow-hidden btn-primary text-white px-10 py-5 rounded-full text-lg font-semibold shadow-elegant"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className="absolute rounded-full bg-white/30"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
            Book Your Treatment
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary text-white px-10 py-5 rounded-full text-lg font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Explore Services
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        variants={slideInFromBottom}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.svg
            className="w-6 h-6 text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-spa-lavender/20 backdrop-blur-sm"
        animate={{
          y: [0, -30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};

export default Hero;