import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const FiltrationPlant = () => {
  const themeClasses = getThemeClasses;

  const filtrationTypes = [
    {
      name: 'Media Filtration',
      description: 'The first step in most water purification systems, removing suspended impurities and turbidity.',
      features: [
        'Removes suspended impurities',
        'Reduces turbidity',
        'First step in purification',
        'Multiple media options'
      ],
      icon: '🏭'
    },
    {
      name: 'Cartridge Filtration',
      description: 'Advanced cartridge-based filtration for fine particle removal and water polishing.',
      features: [
        'Fine particle removal',
        'Water polishing',
        'Easy maintenance',
        'High efficiency'
      ],
      icon: '🔬'
    },
    {
      name: 'Membrane Filtration',
      description: 'Ultra-fine membrane technology for removing bacteria, viruses, and dissolved solids.',
      features: [
        'Bacteria removal',
        'Virus elimination',
        'Dissolved solids removal',
        'Ultra-fine filtration'
      ],
      icon: '💧'
    }
  ];

  const applications = [
    'Industrial water treatment',
    'Municipal water supply',
    'Commercial buildings',
    'Hospitals and healthcare',
    'Food and beverage industry',
    'Pharmaceutical industry',
    'Laboratory water',
    'Swimming pool filtration'
  ];

  const capacities = [
    '500 LPH - 1000 LPH',
    '1000 LPH - 5000 LPH', 
    '5000 LPH - 10000 LPH',
    '10000 LPH - 25000 LPH',
    '25000 LPH - 50000 LPH',
    'Custom capacities available'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/products/Water Filtration/Water Filtration 5.jpg" 
                alt="Filtration Plant" 
                className="mx-auto max-w-full h-auto max-h-96 object-contain rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Filtration Plant
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-blue-200 mb-2">
              WATER FILTRATION & TREATMENT
            </div>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {COMPANY_INFO.shortName} has been involved since 2004 in offering a wide spectrum of high quality industrial RO Plants, De-mineralization Plants, Water Softener Solutions for extensive range of applications commercial RO Plants.
            </p>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className={`${themeClasses.card} p-8 sm:p-10 lg:p-12`}>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                About Our Filtration Solutions
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                RO systems for bore well, ground, well river and tap water applications. Our highly customized plants are available in various capacity of potable water production from 500 LPH to 50000 LPH. In the short span of time we have gained international acclaim for our varied range of products.
              </p>
              <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                We are undertaking annual maintenance contract, on time service operation and maintenance contract of any company make. Water purification is a step by step process often requiring a combination of technologies. {COMPANY_INFO.shortName} provide you the best water treatment systems by blending these technologies to suit your need.
              </p>
              <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                <strong>Filtration is the process of removing suspended impurities and turbidity from the water. {COMPANY_INFO.shortName} offer you all media, cartridge & membrane filtration technologies. Media filtration is the first step in most water purification system.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Gallery */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Water Filtration Products
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Explore our comprehensive range of water filtration systems and equipment.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/Water Filtration/Water Filtration 5.jpg" 
                  alt="Main Filtration Plant" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  Main Filtration Plant
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  Complete water filtration system for industrial applications
                </p>
              </div>

              {/* <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/Water Filtration/Water Filtration 2.HEIC" 
                  alt="Sand Filter System" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  Sand Filter System
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  Advanced sand filtration for removing suspended particles
                </p>
              </div> */}

              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/Water Filtration/Water Filtration 3.JPG" 
                  alt="Sand Filter Unit" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  Sand Filter Unit
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  Compact sand filter unit for smaller applications
                </p>
              </div>

              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/Water Filtration/Water Filtration 4.jpg" 
                  alt="Ultra Filtration System" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  Ultra Filtration System
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  High-performance ultra filtration for fine particle removal
                </p>
              </div>

              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/Water Filtration/Water Filtration 5.jpg" 
                  alt="RO Filtration Unit" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  RO Filtration Unit
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  Reverse osmosis system for pure water production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtration Types */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Types of Filtration
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                We offer comprehensive filtration solutions using the latest technologies and media.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtrationTypes.map((type, index) => (
                <div key={index} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {type.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                      {type.name}
                    </h3>
                    <p className={`${themeClasses.text.secondary} leading-relaxed mb-6`}>
                      {type.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span className={`text-sm ${themeClasses.text.secondary}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Applications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our filtration plants serve a wide range of industries and applications.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {applications.map((application, index) => (
                <div key={index} className={`${themeClasses.card} p-4 text-center hover:shadow-lg transition-all duration-300 group`}>
                  <span className={`text-sm font-medium ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                    {application}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capacities */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Available Capacities
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                From small-scale to large industrial applications, we have the right capacity for your needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capacities.map((capacity, index) => (
                <div key={index} className={`${themeClasses.card} p-6 text-center hover:shadow-lg transition-all duration-300 group`}>
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">💧</div>
                  <h3 className={`text-lg font-bold ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                    {capacity}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Services
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Comprehensive support services for all your filtration needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Annual Maintenance Contracts
                </h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                  We undertake annual maintenance contracts for any company make, ensuring optimal performance and longevity of your filtration systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>Regular maintenance schedules</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>Performance monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>Emergency support</span>
                  </li>
                </ul>
              </div>

              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  On-Time Service & Operation
                </h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                  Our dedicated service team ensures timely maintenance and operation support for all filtration systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>24/7 technical support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>Quick response times</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`text-sm ${themeClasses.text.secondary}`}>Expert technicians</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Ready to Get Your Filtration Solution?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact us today to discuss your filtration requirements and get a customized solution that meets your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Get Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products"
                className={`${themeClasses.button.secondary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltrationPlant;
