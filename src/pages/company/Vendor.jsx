import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const Vendor = () => {
  const themeClasses = getThemeClasses;

  const vendorCategories = [
    {
      name: 'RO & UF Technology',
      description: 'Specialized in Reverse Osmosis and Ultra Filtration systems',
      components: ['RO Membranes', 'UF Modules', 'Pressure Vessels', 'Membrane Housings'],
      icon: '💧'
    },
    {
      name: 'Chemical Treatment Solutions',
      description: 'Advanced chemical treatment and dosing systems',
      components: ['Dosing Pumps', 'Chemical Tanks', 'Mixing Systems', 'pH Controllers'],
      icon: '🧪'
    },
    {
      name: 'High-Performance Pumps',
      description: 'Energy-efficient pumping solutions for water treatment',
      components: ['Centrifugal Pumps', 'Booster Pumps', 'Transfer Pumps', 'Control Valves'],
      icon: '⚙️'
    },
    {
      name: 'Automation Systems',
      description: 'Smart control and monitoring systems',
      components: ['PLC Controllers', 'SCADA Systems', 'Sensors', 'Control Panels'],
      icon: '🤖'
    }
  ];

  const qualityStandards = [
    'Globally recognized brands only',
    'International quality certifications',
    'Reliability and efficiency focus',
    'Long-term availability guarantee',
    'Genuine spare parts assurance',
    'Technical support commitment'
  ];

  const partnershipBenefits = [
    'Long-term business relationships',
    'Priority order processing',
    'Joint development opportunities',
    'Volume pricing discounts',
    'Technical collaboration',
    'Market expansion support'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Vendor Partnerships
            </h1>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              At {COMPANY_INFO.shortName}, we believe that the quality of a water treatment plant is defined not only by its design but also by the components and materials used in its construction.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-6`}>
                Quality Through Partnership
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  To ensure unmatched performance and durability, we partner with some of the most trusted and reputed vendors in the industry. We source RO membranes, pumps, motors, filtration media, and control systems only from globally recognized brands known for their reliability and efficiency.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  By working closely with these vendors, we are able to deliver water treatment plants that consistently meet international standards and exceed client expectations.
                </p>
              </div>
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Our Commitment
                </h3>
                <ul className="space-y-3">
                  {qualityStandards.map((standard, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={`${themeClasses.text.secondary}`}>{standard}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendor Categories */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Vendor Network
              </h2>
              <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our vendor network includes specialists in RO and UF technology, chemical treatment solutions, high-performance pumps, and automation systems.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vendorCategories.map((category, index) => (
                <div key={index} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-2`}>
                        {category.name}
                      </h3>
                      <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${themeClasses.text.primary} mb-3`}>
                      Key Components:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.components.map((component, compIndex) => (
                        <div key={compIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className={`text-sm ${themeClasses.text.secondary}`}>
                            {component}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-6`}>
                Long-Term Partnership Benefits
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
                By maintaining long-term relationships with our vendors, we ensure not only the availability of genuine spare parts and consumables but also the assurance of quality, safety, and long-term support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className={`${themeClasses.card} p-6 text-center hover:shadow-xl transition-all duration-300 group`}>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-semibold ${themeClasses.text.primary} mb-2`}>
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${themeClasses.card} p-8 sm:p-12`}>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our Mission Together
              </h2>
              <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} leading-relaxed mb-8`}>
                Together with our vendors, we strive to build world-class water treatment solutions that are reliable, future-ready, and environmentally responsible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
                >
                  Partner With Us
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className={`${themeClasses.button.secondary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
                >
                  Learn More About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor;