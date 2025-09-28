import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Booking from './components/Booking'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-spa-cream">
      <Navbar />
      <Hero />
      <Services />
      <Booking />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
