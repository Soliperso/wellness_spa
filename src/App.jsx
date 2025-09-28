import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingContact from './components/FloatingContact'
import BackToTop from './components/BackToTop'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    })

    // Disable animations for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      AOS.init({
        duration: 0,
        once: true,
      });
    }
  }, [])

  return (
    <div className="min-h-screen bg-spa-cream overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Booking />
      <About />
      <Contact />
      <Footer />
      <FloatingContact />
      <BackToTop />
    </div>
  )
}

export default App
