import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const WaterTreatment = () => {
  const themeClasses = getThemeClasses;

  const roSpecifications = [
    { model: 'PAQRO-1', flowRate: '1000 lph', inletSize: '1 Inch', membranes: '4', size: '4" x 40"', motor: '4 HP' },
    { model: 'PAQRO-2', flowRate: '2000 lph', inletSize: '1.5 Inch', membranes: '8', size: '4" x 40"', motor: '1.5 HP' },
    { model: 'PAQRO-3', flowRate: '3000 lph', inletSize: '1.5 Inch', membranes: '3', size: '8" x 40"', motor: '3 HP' },
    { model: 'PAQRO-5', flowRate: '5000 lph', inletSize: '1.5 Inch', membranes: '5', size: '8" x 40"', motor: '5 HP' },
    { model: 'PAQRO-8', flowRate: '8000 lph', inletSize: '1.5 Inch', membranes: '8', size: '8" x 40"', motor: '5 HP' },
    { model: 'PAQRO-10', flowRate: '10000 lph', inletSize: '1.5 Inch', membranes: '10', size: '8" x 40"', motor: '5 HP' },
    { model: 'PAQRO-15', flowRate: '15000 lph', inletSize: '2 Inch', membranes: '15', size: '8" x 40"', motor: '10 KW' },
    { model: 'PAQRO-20', flowRate: '20000 lph', inletSize: '6 Inch', membranes: '20', size: '8" x 40"', motor: '15 KW' },
    { model: 'PAQRO-25', flowRate: '25000 lph', inletSize: '6 Inch', membranes: '25', size: '8" x 40"', motor: '15 KW' },
    { model: 'PAQRO-30', flowRate: '30000 lph', inletSize: '6 Inch', membranes: '30', size: '8" x 40"', motor: '17 KW' },
    { model: 'PAQRO-40', flowRate: '40000 lph', inletSize: '8 Inch', membranes: '40', size: '8" x 40"', motor: '20 KW' },
    { model: 'PAQRO-50', flowRate: '50000 lph', inletSize: '8 Inch', membranes: '50', size: '8" x 40"', motor: '22 KW' }
  ];

  const industrialProcess = [
    {
      step: 'Pressure Sand Filter (PSF)',
      description: 'Water is first filtered by Pressure Sand Filter unit for removal of suspended matters and turbidity.',
      icon: '🏭'
    },
    {
      step: 'Activated Carbon Filter',
      description: 'To remove Colour, Odor and Chlorine from water. To remove Oil & Grease from the raw water.',
      icon: '🧪'
    },
    {
      step: 'Micron Filtration (2 Nos.)',
      description: 'These are pressure Vessels fitted internally with pleated cartridge elements of 5 micron & 20 micron rating, which removes micron sized particles.',
      icon: '🔬'
    },
    {
      step: 'Osmosis Pressure System',
      description: 'A high pressure Pump is provided for supplying the feed water to RO System at high pressure of 12-14 kg./cm.',
      icon: '⚙️'
    },
    {
      step: 'Desalination System by RO Membrane',
      description: 'A reverse Osmosis System reject 90-95% of Total Dissolved Solids (TDS).',
      icon: '💧'
    },
    {
      step: 'Storage of Treated Water',
      description: 'To store Treated final water in tank',
      icon: '🏺'
    },
    {
      step: 'UV System',
      description: 'To deactivate bacteria of final water',
      icon: '☀️'
    },
    {
      step: 'Auto Flushing System',
      description: 'This system auto flushes the RO system automatically for preset time.',
      icon: '🔄'
    }
  ];

  const applications = [
    'Drinking water', 'Kidney dialysis machine', 'Boiler feed water treatment',
    'Cooling tower water treatment', 'Production of USP grade water',
    'Zero-liquid discharge', 'Seawater Desalination', 'Effluent Treatment'
  ];

  const industries = [
    'Dairy, food and beverage industry', 'Hotels, spa and restaurants',
    'Iron and steel industry, metal and electroplating', 'Metro and highway construction projects',
    'Pharmaceutical industry', 'Sugar industry', 'Energy and power plants', 'Marine navy'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/products/Reverse Osmosis Plant .png" 
                alt="Industrial Reverse Osmosis Systems" 
                className="mx-auto max-w-full h-auto max-h-96 object-contain rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Industrial Reverse Osmosis Systems
            </h1>
            <div className="text-xl sm:text-2xl font-semibold text-blue-200 mb-2">
              WATER FILTRATION & TREATMENT
            </div>
            <div className="text-lg text-blue-100 mb-6">
              MR. G. M. PATIL
            </div>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {COMPANY_INFO.shortName} brings to you India's most reliable and cost effective industrial reverse osmosis water systems for drinking, laboratory and healthcare applications, capacities available from 100 lph to 50000 lph or more.
            </p>
          </div>
        </div>
        </div>

        {/* Overview Section */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Advanced Water Treatment Solutions
            </h2>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  A reverse osmosis system is an essential part for every industry; whether there is need of pure water for drinking, laboratory use, healthcare (dialysis) and miscellaneous industrial and commercial applications etc. reverse osmosis plays important role everywhere considering the fact that it can remove up to 99.5% of dissolved solids and all colloidal and suspended matter from the most challenging feed water including well water, brackish and sea water.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                  Using trusted membrane technology, rugged construction and certified instruments our engineering team carefully designs RO systems that meet and exceed required water quality standards.
            </p>
          </div>
          
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4`}>Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                    <span className={themeClasses.text.secondary}>99.5% dissolved solids removal</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                    <span className={themeClasses.text.secondary}>Energy efficient operation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                    <span className={themeClasses.text.secondary}>Rugged construction</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                    <span className={themeClasses.text.secondary}>Certified instruments</span>
              </li>
            </ul>
              </div>
            </div>
          </div>
          </div>
        </div>

      {/* Industrial Process */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Industrial RO Process
          </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our industrial RO systems follow a comprehensive multi-stage process to ensure the highest quality water output.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrialProcess.map((process, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {process.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3`}>
                      {process.step}
                </h3>
                    <p className={`text-sm ${themeClasses.text.secondary} leading-relaxed`}>
                      {process.description}
                    </p>
                  </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>

      {/* Specifications Table */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Reverse Osmosis System Specifications
          </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Complete specifications for our range of industrial RO systems from 1000 LPH to 50000 LPH.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="overflow-x-auto">
              <table className={`w-full ${themeClasses.card} overflow-hidden`}>
                <thead className={`${themeClasses.background.secondary}`}>
                  <tr>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Model No.</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Flow Rate</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Inlet Size</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Membranes</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Size</th>
                    <th className={`px-4 py-3 text-left font-semibold ${themeClasses.text.primary}`}>Motor</th>
                  </tr>
                </thead>
                <tbody>
                  {roSpecifications.map((spec, index) => (
                    <tr key={index} className={`border-t ${themeClasses.border.primary} hover:${themeClasses.background.secondary} transition-colors duration-200`}>
                      <td className={`px-4 py-3 font-medium ${themeClasses.text.primary}`}>{spec.model}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.flowRate}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.inletSize}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.membranes}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.size}</td>
                      <td className={`px-4 py-3 ${themeClasses.text.secondary}`}>{spec.motor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Applications & Industries */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                  Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((application, index) => (
                    <div key={index} className={`${themeClasses.card} p-4 text-center hover:shadow-lg transition-all duration-300 group`}>
                      <span className={`text-sm font-medium ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                        {application}
                      </span>
              </div>
            ))}
          </div>
        </div>

              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                  Industries We Serve
          </h2>
                <div className="grid grid-cols-1 gap-3">
                  {industries.map((industry, index) => (
                    <div key={index} className={`${themeClasses.card} p-4 text-center hover:shadow-lg transition-all duration-300 group`}>
                      <span className={`text-sm font-medium ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                        {industry}
                      </span>
                    </div>
                  ))}
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Ready to Get Started?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact our team to discuss your water treatment needs and get a customized solution that meets your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
            >
              Request Quote
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

export default WaterTreatment;