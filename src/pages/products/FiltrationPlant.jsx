import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const FiltrationPlant = () => {
  const themeClasses = getThemeClasses;

  const steelIndustryUses = [
    {
      category: 'In Mills (Rolling Mills / Hot & Cold Mills)',
      applications: [
        {
          title: 'Cooling Water Treatment',
          description: 'Sand filters remove suspended solids, scale, and mill scale particles from cooling water before it is recirculated.'
        },
        {
          title: 'Lubrication & Hydraulic Systems',
          description: 'Clean water is required for hydraulic descaling systems and lubrication circuits.'
        },
        {
          title: 'Protects Heat Exchangers & Spray Nozzles',
          description: 'Prevents clogging and scaling caused by fine suspended solids in water.'
        }
      ]
    },
    {
      category: 'Secondary Processes (Steelmaking & Utilities)',
      applications: [
        {
          title: 'Secondary Cooling in Continuous Casting',
          description: 'Filters cooling water used for solidifying steel billets, blooms, or slabs.'
        },
        {
          title: 'Blast Furnace & Converter Gas Cleaning Water',
          description: 'Removes suspended solids from circulating water in gas scrubbers.'
        },
        {
          title: 'Power & Utility Section',
          description: 'Pre-treatment of feed water before softeners, RO plants, and cooling towers.'
        },
        {
          title: 'Wastewater Treatment',
          description: 'Removes fine suspended solids from effluent before discharge or reuse (ZLD systems).'
        }
      ]
    }
  ];

  const keyBenefits = [
    'Reduces turbidity and suspended solids in mill water',
    'Protects nozzles, pumps, and heat exchangers from clogging and erosion',
    'Ensures consistent cooling efficiency in rolling and casting',
    'Supports water recycling & reuse, reducing fresh water consumption'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${themeClasses.background.gradient} py-16 sm:py-20`}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                Filtration <span className="text-gradient-primary">Plant</span>
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Advanced water filtration solutions for industrial, commercial, and municipal applications
                </p>
              </div>
            <div className="order-first md:order-last">
              <div className="relative">
                <img 
                  src="/products/Water Filtration/Water Filtration 3.JPG" 
                  alt="Filtration Plant - Sand Filtration System"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className={`py-16 sm:py-20 ${themeClasses.background.primary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Filtration Plant
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className={`text-lg ${themeClasses.text.secondary} mb-6 leading-relaxed`}>
                Since 2004, SSWS has been providing a wide spectrum of high-quality Filtration Plants and advanced water filtration solutions for an extensive range of industrial, commercial, and municipal applications.
              </p>
              
              <p className={`text-lg ${themeClasses.text.secondary} mb-6 leading-relaxed`}>
                A Sand Filtration Plant is one of the most effective and affordable water treatment systems. It uses multiple layers of sand and gravel to remove suspended solids, turbidity, algae, and microorganisms from raw water, delivering clear and safe water for industrial, commercial, and municipal use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                How a Sand Filtration Plant Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className={`${themeClasses.card} p-8`}>
              <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                Water enters the system and passes through fine sand, coarse sand, and gravel layers. These layers trap particles of different sizes, ensuring high-clarity water. The purified water is then collected through the underdrain system and stored for further use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Industry Uses Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.primary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Sand Filter Uses in Steel Industry
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="space-y-12">
              {steelIndustryUses.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {section.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.applications.map((app, appIndex) => (
                      <div key={appIndex} className={`${themeClasses.card} p-6 hover:shadow-xl transition-shadow duration-300`}>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {app.title}
                        </h4>
                        <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                          {app.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Key Benefits in Steel Plants
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-shadow duration-300`}>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                      {benefit}
                    </p>
              </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-20 ${themeClasses.background.gradient}`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to Implement Filtration Solutions?
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Contact our experts to discuss your specific filtration requirements and get a customized solution for your steel plant or industrial facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
              >
                Get Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-600 inline-flex items-center justify-center"
              >
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltrationPlant;