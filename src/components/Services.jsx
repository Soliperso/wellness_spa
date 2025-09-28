import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesData from '../data/services.json';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    })
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.1 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-spa-cream via-spa-sand to-spa-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-spa-sage"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-spa-lavender"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-spa-mint"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <motion.h2 
            className="text-5xl font-serif font-bold text-spa-earth mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Discover our range of therapeutic treatments designed to rejuvenate your body and mind. 
            Each service is crafted to provide you with the ultimate relaxation experience.
          </motion.p>
        </motion.div>

        <motion.div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-soft overflow-hidden cursor-pointer card-hover group"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={index}
              onClick={() => setSelectedService(service)}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Duration badge */}
                <motion.div 
                  className="absolute top-4 right-4 bg-spa-sage text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  {service.duration}
                </motion.div>

                {/* Hover overlay */}
                <AnimatePresence>
                  {hoveredCard === service.id && (
                    <motion.div
                      className="absolute inset-0 bg-spa-sage/20 backdrop-blur-sm flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="text-white text-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium">View Details</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-serif font-semibold text-spa-earth mb-3 group-hover:text-spa-sage transition-colors duration-300"
                  layoutId={`title-${service.id}`}
                >
                  {service.name}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4 leading-relaxed line-clamp-2"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>
                <div className="flex justify-between items-center">
                  <motion.span 
                    className="text-2xl font-bold text-spa-sage"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ${service.price}
                  </motion.span>
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToBooking();
                    }}
                    className="bg-spa-earth text-white px-6 py-2 rounded-full hover:bg-spa-earth/90 transition-all duration-300 text-sm font-medium shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Backdrop */}
              <motion.div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedService(null)}
              />
              
              {/* Modal */}
              <motion.div 
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-elegant relative z-10"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <motion.img
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="w-full h-80 object-cover"
                    layoutId={`image-${selectedService.id}`}
                  />
                  
                  {/* Close button */}
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all duration-200 shadow-lg group"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6 group-hover:text-spa-sage transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                
                <div className="p-8">
                  <motion.h3 
                    className="text-3xl font-serif font-bold text-spa-earth mb-4"
                    layoutId={`title-${selectedService.id}`}
                  >
                    {selectedService.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedService.description}
                  </motion.p>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-spa-earth mb-3 text-lg">Benefits:</h4>
                    <motion.ul className="space-y-2">
                      {selectedService.benefits.map((benefit, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start text-gray-600"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                        >
                          <svg className="w-5 h-5 text-spa-sage mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-between items-center mb-6 p-4 bg-spa-cream/50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div>
                      <span className="text-sm text-gray-500 block">Duration</span>
                      <span className="font-semibold text-lg text-spa-earth">{selectedService.duration}</span>
                    </div>
                    <motion.span 
                      className="text-3xl font-bold text-spa-sage"
                      whileHover={{ scale: 1.1 }}
                    >
                      ${selectedService.price}
                    </motion.span>
                  </motion.div>
                  
                  <motion.button
                    onClick={() => {
                      setSelectedService(null);
                      scrollToBooking();
                    }}
                    className="w-full btn-primary text-white py-4 rounded-full font-semibold text-lg shadow-elegant"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Book This Treatment
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;