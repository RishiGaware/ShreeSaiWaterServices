import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getThemeClasses } from '../theme/themeUtils';
import { COMPANY_INFO } from '../constants/companyInfo';

const Home = () => {
  const themeClasses = getThemeClasses;
  const [currentCustomerIndex, setCurrentCustomerIndex] = useState(0);

  // Customer logos array
  const customerLogos = [
    'Radha TMT.png',
    'image_2025-08-27_170840604.png',
    'image_2025-08-27_171021271.png',
    'image_2025-08-27_171140936.png',
    'image_2025-08-27_171621589.png',
    'image_2025-08-27_172221098.png',
    'image_2025-08-27_173207648.png',
    'image_2025-08-27_183347426.png',
    'image_2025-08-27_183529996.png',
    'image_2025-08-27_183930911.png',
    'image_2025-08-27_184316302.png',
    'image_2025-08-27_184559448.png',
    'image_2025-08-27_191341712.png',
    'image_2025-08-27_191645199.png',
    'image_2025-08-27_191848170.png',
    'image_2025-08-27_192359268.png',
    'image_2025-08-27_192753885.png',
    'image_2025-08-27_193528239.png',
    'image_2025-08-27_194044546.png',
    'image_2025-08-27_194417877.png',
    'image_2025-08-27_194941343.png',
    'image_2025-08-27_200823655.png',
    'image_2025-08-27_201404538.png',
    'image_2025-08-27_202001779.png',
    'image_2025-08-27_202434312.png',
    'image_2025-08-27_202801212.png',
    'image_2025-08-27_203015112.png',
    'image_2025-08-27_203514315.png',
    'image_2025-08-27_204632454.png',
    'image_2025-08-27_204848789.png',
    'image_2025-08-27_205015867.png',
    'image_2025-08-27_210252114.png',
    'image_2025-08-27_210700710.png',
    'Sangam Steel.jpg',
    'smw_ispat_pvt_ltd.jpg'
  ];

  // Product plants data
  const productPlants = [
    {
      name: 'Water Treatment Plant',
      description: 'Industrial Reverse Osmosis Systems for high-purity water production',
      image: '/products/Reverse Osmosis Plant .png',
      path: '/products/water-treatment',
      icon: '⚗️'
    },
    {
      name: 'Filtration Plant',
      description: 'Media, cartridge & membrane filtration technologies',
      image: '/products/Water Filtration/Water Filtration 1.png',
      path: '/products/filtration-plant',
      icon: '🏭'
    },
    {
      name: 'Softener Plant',
      description: 'Ion exchange technology for water softening',
      image: '/products/Softner/Softner 1.jpg',
      path: '/products/softener-plant',
      icon: '💧'
    },
    {
      name: 'Ultra Filtration Plant',
      description: 'Advanced ultrafiltration with microprocessor control',
      image: '/products/Ultra Filtration/Ultra Filtration.jpg',
      path: '/products/ultra-filtration-plant',
      icon: '🔬'
    },
    {
      name: 'DM Plant',
      description: 'Demineralization and deionization systems',
      image: '/products/DM Plant/DMPlant1.jpg',
      path: '/products/dm-plant',
      icon: '🧪'
    }
  ];

  // Auto-rotate customer logos (4 at a time)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCustomerIndex((prevIndex) => 
        (prevIndex + 1) % Math.ceil(customerLogos.length / 4)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [customerLogos.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat pt-0" style={{ backgroundImage: 'url("/bg.jpg")' }}>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60 backdrop-blur-sm"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>

        {/* Content Container */}
        <div className="container-custom relative z-10 text-center">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-8 animate-fade-in-down flex justify-center">
            <img src="/logo.png" alt="SSWS" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 transform group-hover:scale-105 transition-all duration-300 drop-shadow-lg" />
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-tight animate-fade-in-up delay-200 drop-shadow-2xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Shree Sai Water Services
          </h1>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-in-up delay-400">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-medium drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
              Leading provider in water filtration industry with <span className="text-blue-300 font-semibold">20+ years of expertise</span> in delivering <span className="text-purple-300 font-semibold">high-quality solutions</span> for clean and safe industrial water
            </p>
          </div>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-600">
            <Link to="/contact" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-blue-400/30 hover:border-blue-300/50">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link to="/products/water-treatment" className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Our Solutions
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up delay-800">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
              Our Product Plants
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
              Comprehensive water treatment solutions for all your industrial needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productPlants.map((plant, index) => (
              <Link
                key={index}
                to={plant.path}
                className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group transform hover:scale-105`}
              >
                <div className="text-center">
                  <div className="mb-4">
                    <img 
                      src={plant.image} 
                      alt={plant.name}
                      className="mx-auto max-w-full h-48 object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {plant.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3 group-hover:text-blue-600 transition-colors duration-300`}>
                    {plant.name}
                </h3>
                  <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                    {plant.description}
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Logos Slideshow */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
              Our Trusted Customers
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
              We are proud to serve leading companies across various industries
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
                </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentCustomerIndex * (100 / 4)}%)` }}
              >
                {customerLogos.map((logo, index) => (
                  <div key={index} className="w-1/4 flex-shrink-0 flex justify-center items-center px-2">
                    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                      <img 
                        src={`/Customer /${logo}`}
                        alt={`Customer ${index + 1}`}
                        className="max-h-16 sm:max-h-20 max-w-full object-contain transition-all duration-300 mx-auto"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(customerLogos.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCustomerIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentCustomerIndex === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.primary}`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="animate-fade-in-left">
              <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${themeClasses.text.primary} mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight`}>
                Your Trusted Water Treatment Partner
              </h2>
              <p className={`text-sm sm:text-base ${themeClasses.text.secondary} mb-3 sm:mb-4 leading-relaxed font-normal`}>
                With 20+ years of expertise, {COMPANY_INFO.name} has established itself as a trusted name known for innovation and reliability in water purification technologies.
              </p>
              <p className={`text-sm sm:text-base ${themeClasses.text.secondary} mb-4 sm:mb-6 leading-relaxed font-normal`}>
                We are supported by excellent dedicated service persons, well qualified, trained, and experienced in this field. Our commitment to excellence and customer satisfaction drives us to continuously innovate and provide effective water treatment solutions tailored to the unique requirements of each client.
              </p>
              <Link to="/company/about-us" className={`${themeClasses.button.primary} text-sm px-4 sm:px-6 py-2 sm:py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-xl inline-block font-semibold tracking-wide`}>
                Learn More About Us
              </Link>
            </div>
            <div className={`${themeClasses.card} p-4 sm:p-6 animate-fade-in-right hover:shadow-xl transition-shadow duration-300`}>
              <h3 className={`text-base sm:text-lg md:text-xl font-bold ${themeClasses.text.primary} mb-3 sm:mb-4 leading-tight tracking-tight`}>Why Choose Us?</h3>
              <ul className="space-y-2">
                <li className={`flex items-center ${themeClasses.text.secondary} text-sm font-medium`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  20+ Years of Industry Experience
                </li>
                <li className={`flex items-center ${themeClasses.text.secondary} text-sm font-medium`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Qualified & Trained Service Personnel
                </li>
                <li className={`flex items-center ${themeClasses.text.secondary} text-sm font-medium`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Never Compromise on Quality
                </li>
                <li className={`flex items-center ${themeClasses.text.secondary} text-sm font-medium`}>
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Sustainable & Environmentally Responsible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 text-center mb-16">
          <h3 className="text-2xl font-bold mb-6">Our Project Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">3+</div>
              <div className="text-gray-600">States Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">1M+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-gray-900">99.9%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.gradient}`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Contact us today to discuss your water treatment requirements and get a customized solution that meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                Contact Our Experts
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 inline-flex items-center justify-center"
              >
                View All Products
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;