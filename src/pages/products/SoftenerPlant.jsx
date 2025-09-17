import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const SoftenerPlant = () => {
  const themeClasses = getThemeClasses;

  const softenerSpecs = [
    { model: 'PAQSoft-8', flowRate: '8 gpm', peak: '12 gpm', tankSize: '10 x 40 Inches', resin: '1 Cu. Ft.', salt: '127 KG' },
    { model: 'PAQSoft-10', flowRate: '10 gpm', peak: '16 gpm', tankSize: '12 x 52 Inches', resin: '2 Cu. Ft.', salt: '145 KG' },
    { model: 'PAQSoft-14', flowRate: '14 gpm', peak: '20 gpm', tankSize: '14 x 65 Inches', resin: '3 Cu. Ft.', salt: '381 KG' },
    { model: 'PAQSoft-18', flowRate: '18 gpm', peak: '28 gpm', tankSize: '16 x 65 Inches', resin: '4 Cu. Ft.', salt: '350 KG' },
    { model: 'PAQSoft-27', flowRate: '27 gpm', peak: '34 gpm', tankSize: '18 x 65 Inches', resin: '5 Cu. Ft.', salt: '331 KG' },
    { model: 'PAQSoft-36', flowRate: '36 gpm', peak: '42 gpm', tankSize: '21 x 62 Inches', resin: '6 Cu. Ft.', salt: '300 KG' },
    { model: 'PAQSoft-42', flowRate: '42 gpm', peak: '50 gpm', tankSize: '24 x 72 Inches', resin: '9 Cu. Ft.', salt: '400 KG' }
  ];

  const features = [
    {
      title: 'Ion Exchange Technology',
      description: 'Removes calcium and magnesium ions by replacing them with sodium ions.',
      icon: '⚗️'
    },
    {
      title: 'Customizable Capacities',
      description: 'Available from 1000 LPH (1 m³/hr) to 25000 LPH (25 m³/hr) or more.',
      icon: '📊'
    },
    {
      title: 'High Efficiency',
      description: 'Designed to reduce hardness from 250 ppm to less than 5 ppm.',
      icon: '🎯'
    },
    {
      title: 'Reliable Operation',
      description: 'One working and one standby unit configuration for continuous operation.',
      icon: '🔄'
    }
  ];

  const applications = [
    'Boiler feed water treatment',
    'Industrial process water',
    'Cooling tower make-up',
    'Laundry and cleaning',
    'Food and beverage industry',
    'Pharmaceutical industry',
    'Textile industry',
    'Hotel and hospitality'
  ];

  const benefits = [
    'Prevents scale formation',
    'Reduces soap consumption',
    'Extends equipment life',
    'Improves water quality',
    'Energy savings',
    'Low maintenance'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/products/Softner/Softner 1.jpg" 
                alt="Water Softener Plant" 
                className="mx-auto max-w-full h-auto max-h-96 object-contain rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Water Softener Plant
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-blue-200 mb-2">
              WATER FILTRATION & TREATMENT
            </div>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              A typical water softener uses ion exchange technology to remove calcium and magnesium ions by replacing them with sodium ions, providing high-quality softened water for various applications.
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
                  About Water Softening
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  Water softening is essential for preventing scale formation in boilers, heat exchangers, and other equipment. Our industrial water softeners are designed to meet future water softening requirements at highly competitive prices.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  At {COMPANY_INFO.shortName}, we can construct a water softening plant from 1000 LPH (1 m³/hr) to 25000 LPH (25 m³/hr) or more meeting your exact specifications and compliant to required industry specific standards and regulations.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                  Each unit is constructed and fabricated with wide range of options including skid mounting, explosion-proof wiring and control panels, water or pneumatic actuated control valves, brine pumps, and custom steel tank designs for maximum reliability and longevity.
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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Product Gallery
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Explore our range of water softener plants and systems.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/products/Softner/Softner 1.jpg" 
                    alt="Water Softener Plant 1" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Water Softener Plant</h3>
                    <p className="text-sm text-blue-200">Ion exchange technology</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/products/Softner/Softner 2.JPG" 
                    alt="Water Softener Plant 2" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Softener System</h3>
                    <p className="text-sm text-blue-200">High efficiency design</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img 
                    src="/products/Softner/Softner 3.jpg" 
                    alt="Water Softener Plant 3" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Industrial Softener</h3>
                    <p className="text-sm text-blue-200">Custom configurations</p>
                  </div>
                </div>
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
                Key Features
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Advanced features that make our water softener plants highly efficient and reliable.
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

      {/* Specifications Table */}
      {/* <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Water Softener Specifications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Complete specifications for our range of industrial water softener plants.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="overflow-x-auto">
              <table className={`w-full ${themeClasses.card} overflow-hidden`}>
                <thead className={`${themeClasses.background.secondary}`}>
                  <tr>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Model</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Flow Rate</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Peak</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Tank Size</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Resin</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Salt Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {softenerSpecs.map((spec, index) => (
                    <tr key={index} className={`border-t ${themeClasses.border.primary} hover:${themeClasses.background.secondary} transition-colors duration-200`}>
                      <td className={`px-4 py-3 font-medium ${themeClasses.text.primary}`}>{spec.model}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.flowRate}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.peak}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.tankSize}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.resin}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.salt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}

      {/* Applications */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Applications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our water softener plants serve various industries and applications.
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

      {/* CTA Section */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Need a Water Softener Solution?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact us today to discuss your water softening requirements and get a customized solution that meets your specific needs.
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

export default SoftenerPlant;
