import testimonialsData from '../data/testimonials.json';

const About = () => {
  return (
    <section id="about" className="py-20 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-spa-earth mb-4">
            About Serenity Spa
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded with a passion for wellness and relaxation, Serenity Spa has been providing 
            exceptional therapeutic treatments for over a decade. Our team of certified therapists 
            is dedicated to helping you achieve ultimate relaxation and rejuvenation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Spa interior"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-semibold text-spa-earth mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Serenity Spa began as a vision to create a sanctuary where people could escape 
              the pressures of daily life and reconnect with their inner peace. Our founder, 
              Sarah Williams, a licensed massage therapist with over 15 years of experience, 
              opened our doors in 2010 with a simple mission: to provide exceptional wellness 
              services in a tranquil, healing environment.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we're proud to be recognized as one of the premier wellness destinations 
              in the city, offering a comprehensive range of massage therapies and spa treatments 
              that cater to every individual's unique needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-spa-sage mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-spa-sage mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-serif font-semibold text-spa-earth text-center mb-12">
            Meet Our Therapists
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Sarah Williams"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-semibold text-spa-earth mb-2">Sarah Williams</h4>
              <p className="text-spa-sage font-medium mb-2">Founder & Lead Therapist</p>
              <p className="text-gray-600 text-sm">
                Licensed Massage Therapist (LMT)<br />
                Certified in Swedish, Deep Tissue & Hot Stone
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Maria Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-semibold text-spa-earth mb-2">Maria Rodriguez</h4>
              <p className="text-spa-sage font-medium mb-2">Senior Therapist</p>
              <p className="text-gray-600 text-sm">
                Certified Aromatherapist<br />
                Specialized in Prenatal & Therapeutic Massage
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="James Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h4 className="text-xl font-semibold text-spa-earth mb-2">James Chen</h4>
              <p className="text-spa-sage font-medium mb-2">Wellness Specialist</p>
              <p className="text-gray-600 text-sm">
                Certified in Sports Massage<br />
                Expert in Pain Management & Recovery
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-serif font-semibold text-spa-earth text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-spa-earth">{testimonial.name}</p>
                  <p className="text-sm text-spa-sage">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-spa-earth mb-4">
                Our Certifications & Awards
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-spa-sage mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Licensed Massage Therapy Practice
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-spa-sage mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certified by Associated Bodywork & Massage Professionals
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-spa-sage mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  "Best Spa Experience" - City Wellness Awards 2023
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-spa-sage mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  5-Star Rating on Google & Yelp
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Spa certificates"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;