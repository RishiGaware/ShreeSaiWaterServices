import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const DMPlant = () => {
  const themeClasses = getThemeClasses;

  const dmProcesses = [
    {
      name: 'Demineralization',
      description: 'Also known as Deionization, it is an economical option when feed water TDS is low and low conductivity product water is required.',
      icon: '🧪'
    },
    {
      name: 'Mixed Bed',
      description: 'Cation and Anion resins can be mixed together in a single vessel to produce very high purity water.',
      icon: '⚗️'
    },
    {
      name: 'Ion Exchange',
      description: 'Multiple ion exchange reactions occur as water passes through the mixed bed of resins for maximum purification.',
      icon: '🔄'
    }
  ];

  const features = [
    'High purity water production',
    'Low TDS feed water suitable',
    'Economical operation',
    'Low conductivity output',
    'Mixed bed technology',
    'Ion exchange process'
  ];

  const applications = [
    'Boiler feed water',
    'Steam generation',
    'Laboratory water',
    'Pharmaceutical industry',
    'Power plants',
    'Chemical industry',
    'Electronics industry',
    'Research facilities'
  ];

  const benefits = [
    'Removes all dissolved minerals',
    'Produces ultra-pure water',
    'Cost-effective solution',
    'Low maintenance',
    'High efficiency',
    'Reliable operation'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/products/DM Plant/DMPlant1.jpg" 
                alt="Demineralization (DM) Plant" 
                className="mx-auto max-w-full h-auto max-h-96 object-contain rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Demineralization (DM) Plant
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-blue-200 mb-2">
              WATER FILTRATION & TREATMENT
            </div>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              The Demineralization process, also known as Deionization, is an economical option when feed water TDS is low and low conductivity product water is required.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                  About Demineralization
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  The Demineralization process is also known as Deionization. It is an economical option when feed water TDS is low and low conductivity product water is required.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  Cation and Anion resins can be mixed together in a single vessel to produce a very high purity of water. This is due to the many ion exchange reactions that occur over and over as the water passes through the Mixed Bed of resins.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                  Our DM plants are designed to remove all dissolved minerals and salts from water, producing ultra-pure water suitable for various industrial applications.
                </p>
              </div>
              
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={themeClasses.text.secondary}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                Our DM Plant Products
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Explore our comprehensive range of demineralization plant systems and equipment.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/DM Plant/DMPlant1.jpg" 
                  alt="DM Plant System 1" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  DM Plant System 1
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  Advanced demineralization system for industrial water treatment applications
                </p>
              </div>

              <div className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                <img 
                  src="/products/DM Plant/DMPlant2.jpg" 
                  alt="DM Plant System 2" 
                  className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-2`}>
                  DM Plant System 2
                </h3>
                <p className={`text-sm ${themeClasses.text.secondary}`}>
                  High-capacity demineralization plant for large-scale industrial operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DM Processes */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                DM Plant Processes
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Advanced demineralization processes for producing ultra-pure water.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dmProcesses.map((process, index) => (
                <div key={index} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                      {process.name}
                    </h3>
                    <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Plant Features
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Key features that make our DM plants highly efficient and reliable.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className={`${themeClasses.card} p-6 text-center hover:shadow-lg transition-all duration-300 group`}>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💧</div>
                  <h3 className={`text-sm font-bold ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Applications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our DM plants serve various industries requiring ultra-pure water.
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

      {/* Technical Specifications */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Technical Specifications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Complete technical details of our demineralization plants.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Process Specifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Ion exchange technology</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Mixed bed configuration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>High purity output</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Low conductivity water</span>
                  </li>
                </ul>
              </div>

              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Performance Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Economical operation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Low TDS feed suitable</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>High efficiency</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Reliable performance</span>
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
              Need a DM Plant Solution?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact us today to discuss your demineralization requirements and get a customized solution that meets your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DMPlant;
