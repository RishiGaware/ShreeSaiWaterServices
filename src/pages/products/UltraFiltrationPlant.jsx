import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const UltraFiltrationPlant = () => {
  const themeClasses = getThemeClasses;

  const features = [
    {
      title: 'Microprocessor Control',
      description: 'Fully automatic system based on microprocessor control for precise operation.',
      icon: '💻'
    },
    {
      title: 'Pre-engineered Package',
      description: 'Plug and play kind of package system for easy installation and operation.',
      icon: '📦'
    },
    {
      title: 'Complete System',
      description: 'Includes raw water pump, bag filter, UF module, dosing systems, and control panel.',
      icon: '⚙️'
    }
  ];

  const systemComponents = [
    'Raw water pump',
    'Bag filter',
    'Ultrafiltration module',
    '2 CEB dosing systems',
    'Piping and auto valves',
    'Backwash pump',
    'MSEP skid mounting',
    'Microprocessor based control panel'
  ];

  const applications = [
    'Raw water pretreatment',
    'Industrial wastewater treatment',
    'Municipal water treatment',
    'Food and beverage industry',
    'Pharmaceutical industry',
    'Textile industry',
    'Chemical industry'
  ];

  const benefits = [
    'High removal efficiency',
    'Low energy consumption',
    'Compact design',
    'Easy maintenance',
    'Automated operation',
    'Cost effective solution'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <section className={`${themeClasses.background.gradient} py-16 sm:py-20`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                Ultra Filtration <span className="text-gradient-primary">Plant</span>
              </h1>
              <div className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                WATER FILTRATION & TREATMENT
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Advanced ultrafiltration package system with microprocessor control, ideal for domestic sewage recycle and raw water applications.
              </p>
            </div>
            <div className="order-first md:order-last">
              <div className="relative">
                <img 
                  src="/products/Ultra Filtration/Ultra Filtration.jpg"
                  alt="Ultra Filtration Plant"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                  About Ultra Filtration
                </h2>
                {/* <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  The system is fully automatic based on microprocessor based control. These are pre engineered plug and play kind of package. Ideal for recycle of domestic sewage recycle and raw water applications.
                </p> */}
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  The system will include a raw water pump, bag filter, Ultrafiltration module, 2 CEB dosing systems, piping, auto valves and one backwash pump mounted on a MSEP skid with a microprocessor based control panel.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                  Ultra filtration is an effective membrane separation process that removes suspended solids, bacteria, viruses, and other microorganisms from water, providing high-quality treated water for various applications.
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

      {/* Features */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                System Features
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Advanced features that make our ultra filtration plants highly efficient and reliable.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${themeClasses.text.secondary} leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                System Components
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Complete package system with all necessary components for efficient operation.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemComponents.map((component, index) => (
                <div key={index} className={`${themeClasses.card} p-6 text-center hover:shadow-lg transition-all duration-300 group`}>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                  <h3 className={`text-sm font-bold ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                    {component}
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
                Our ultra filtration plants serve various industries and applications.
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
                Complete technical details of our ultra filtration package systems.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  System Specifications
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Fully automatic operation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Microprocessor control</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Pre-engineered package</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Plug and play installation</span>
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
                    <span className={`${themeClasses.text.secondary}`}>High removal efficiency</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Low energy consumption</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Compact design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>Easy maintenance</span>
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
              Ready for Ultra Filtration Solution?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact us today to discuss your ultra filtration requirements and get a customized solution that meets your specific needs.
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

export default UltraFiltrationPlant;
