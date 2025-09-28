import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';
import testimonialsData from '../data/testimonials.json';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const teamMembers = [
    {
      name: "Sarah Williams",
      role: "Founder & Lead Therapist",
      credentials: ["Licensed Massage Therapist (LMT)", "Certified in Swedish, Deep Tissue & Hot Stone"],
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Rodriguez",
      role: "Senior Therapist",
      credentials: ["Certified Aromatherapist", "Specialized in Prenatal & Therapeutic Massage"],
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "James Chen",
      role: "Wellness Specialist",
      credentials: ["Certified in Sports Massage", "Expert in Pain Management & Recovery"],
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const certifications = [
    "Licensed Massage Therapy Practice",
    "Certified by Associated Bodywork & Massage Professionals",
    '"Best Spa Experience" - City Wellness Awards 2023',
    "5-Star Rating on Google & Yelp"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-spa-cream via-white to-spa-sand relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-48 h-48 rounded-full bg-spa-lavender"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-spa-mint"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <motion.h2 
            className="text-5xl font-serif font-bold text-spa-earth mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Serenity Spa
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Founded with a passion for wellness and relaxation, Serenity Spa has been providing 
            exceptional therapeutic treatments for over a decade. Our team of certified therapists 
            is dedicated to helping you achieve ultimate relaxation and rejuvenation.
          </motion.p>
        </motion.div>

        {/* Our Story Section */}
        <motion.div 
          ref={aboutRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            className="relative"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Spa interior"
              className="rounded-3xl shadow-elegant w-full h-96 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-spa-sage/20 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
          
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
          >
            <motion.h3 
              className="text-3xl font-serif font-semibold text-spa-earth mb-6"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h3>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Serenity Spa began as a vision to create a sanctuary where people could escape 
              the pressures of daily life and reconnect with their inner peace. Our founder, 
              Sarah Williams, a licensed massage therapist with over 15 years of experience, 
              opened our doors in 2010 with a simple mission: to provide exceptional wellness 
              services in a tranquil, healing environment.
            </motion.p>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Today, we're proud to be recognized as one of the premier wellness destinations 
              in the city, offering a comprehensive range of massage therapies and spa treatments 
              that cater to every individual's unique needs.
            </motion.p>
            
            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <motion.div 
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter from={0} to={500} suffix="+" />
                <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter from={0} to={10} suffix="+" />
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          ref={teamRef}
          className="mb-24"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <motion.h3 
            className="text-4xl font-serif font-semibold text-spa-earth text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Therapists
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={teamInView ? "animate" : "initial"}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="text-center group"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div className="relative mb-6 inline-block">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-elegant"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-spa-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.div>
                <motion.h4 
                  className="text-xl font-semibold text-spa-earth mb-2 group-hover:text-spa-sage transition-colors duration-300"
                  layoutId={`name-${index}`}
                >
                  {member.name}
                </motion.h4>
                <motion.p 
                  className="text-spa-sage font-medium mb-3"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {member.role}
                </motion.p>
                <motion.div className="text-gray-600 text-sm space-y-1">
                  {member.credentials.map((credential, idx) => (
                    <motion.p 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.8 + index * 0.1 + idx * 0.1 }}
                    >
                      {credential}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          ref={testimonialsRef}
          className="mb-24"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <motion.h3 
            className="text-4xl font-serif font-semibold text-spa-earth text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={testimonialsInView ? "animate" : "initial"}
          >
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft card-hover"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg 
                        key={i} 
                        className="w-5 h-5 fill-current" 
                        viewBox="0 0 24 24"
                        initial={{ opacity: 0, rotate: -180 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 + i * 0.1, duration: 0.3 }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </motion.svg>
                    ))}
                  </div>
                </motion.div>
                <motion.p 
                  className="text-gray-600 mb-6 italic leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  "{testimonial.review}"
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <p className="font-semibold text-spa-earth text-lg">{testimonial.name}</p>
                  <p className="text-sm text-spa-sage font-medium">{testimonial.service}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          className="bg-gradient-to-r from-white/80 to-spa-cream/80 backdrop-blur-sm rounded-3xl p-10 shadow-elegant"
          data-aos="fade-up"
          data-aos-duration="1200"
          whileInView={{ scale: [0.95, 1] }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-serif font-semibold text-spa-earth mb-8">
                Our Certifications & Awards
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-600 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 10, color: "#9CAF88" }}
                  >
                    <motion.svg 
                      className="w-6 h-6 text-spa-sage mr-4 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </motion.svg>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Spa certificates"
                className="rounded-2xl shadow-elegant w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-16 h-16 bg-spa-lavender/30 rounded-full backdrop-blur-sm"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;