import { useState } from 'react';
import servicesData from '../data/services.json';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-spa-earth mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of therapeutic treatments designed to rejuvenate your body and mind. 
            Each service is crafted to provide you with the ultimate relaxation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-spa-sage text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-spa-earth mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-spa-sage">
                    ${service.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToBooking();
                    }}
                    className="bg-spa-earth text-white px-4 py-2 rounded-full hover:bg-spa-earth/90 transition-colors duration-200 text-sm font-medium"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold text-spa-earth mb-2">
                  {selectedService.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedService.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-spa-earth mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Duration: </span>
                    <span className="font-semibold">{selectedService.duration}</span>
                  </div>
                  <span className="text-2xl font-bold text-spa-sage">
                    ${selectedService.price}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    scrollToBooking();
                  }}
                  className="w-full bg-spa-sage text-white py-3 rounded-full hover:bg-spa-sage/90 transition-colors duration-200 font-semibold"
                >
                  Book This Treatment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;