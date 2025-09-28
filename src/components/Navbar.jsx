import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-spa-earth">
              Serenity Spa
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-spa-sage transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-spa-sage transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="text-gray-700 hover:text-spa-sage transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-spa-sage transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-spa-sage transition-colors duration-200 px-3 py-2 text-sm font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="bg-spa-sage text-white px-6 py-2 rounded-full hover:bg-spa-sage/90 transition-colors duration-200 text-sm font-medium"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-spa-sage hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-spa-sage block px-3 py-2 text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-spa-sage block px-3 py-2 text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="text-gray-700 hover:text-spa-sage block px-3 py-2 text-base font-medium w-full text-left"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-spa-sage block px-3 py-2 text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-spa-sage block px-3 py-2 text-base font-medium w-full text-left"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-spa-sage text-white block px-3 py-2 rounded-full text-base font-medium w-full mt-4"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;