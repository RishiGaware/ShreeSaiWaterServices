import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { getThemeClasses } from '../../theme/themeUtils';

const WasteWaterTreatment = () => {
  const features = [
    {
      id: 1,
      title: 'Advanced Filtration Systems',
      description: 'Multi-stage filtration using cutting-edge membrane technology for superior water quality.',
      icon: '🔬',
      benefits: ['Removes 99.9% of contaminants', 'Extends membrane life', 'Reduces maintenance costs']
    },
    {
      id: 2,
      title: 'Biological Treatment',
      description: 'Eco-friendly biological processes that naturally break down organic pollutants.',
      icon: '🌱',
      benefits: ['Environmentally sustainable', 'Low energy consumption', 'Natural degradation process']
    },
    {
      id: 3,
      title: 'Chemical Treatment',
      description: 'Advanced chemical processes for removing heavy metals and toxic substances.',
      icon: '🧪',
      benefits: ['Effective heavy metal removal', 'Customizable treatment', 'Rapid results']
    },
    {
      id: 4,
      title: 'Sludge Management',
      description: 'Comprehensive sludge treatment and disposal solutions for waste management.',
      icon: '♻️',
      benefits: ['Reduces waste volume', 'Creates reusable byproducts', 'Compliant disposal methods']
    }
  ];

  const applications = [
    {
      title: 'Municipal Wastewater',
      description: 'Treatment plants for cities and towns',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      capacity: '1,000 - 100,000 m³/day'
    },
    {
      title: 'Industrial Wastewater',
      description: 'Manufacturing and processing facilities',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      capacity: '100 - 50,000 m³/day'
    },
    {
      title: 'Agricultural Runoff',
      description: 'Farms and agricultural facilities',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      capacity: '500 - 10,000 m³/day'
    },
    {
      title: 'Mining Operations',
      description: 'Mining and extraction facilities',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      capacity: '5,000 - 100,000 m³/day'
    }
  ];

  const specifications = [
    { parameter: 'Treatment Capacity', value: '100 - 100,000 m³/day', unit: '' },
    { parameter: 'Removal Efficiency', value: '99.9%', unit: 'contaminants' },
    { parameter: 'Power Consumption', value: '0.5 - 2.0', unit: 'kWh/m³' },
    { parameter: 'Footprint', value: '500 - 50,000', unit: 'm²' },
    { parameter: 'Construction Time', value: '6 - 24', unit: 'months' },
    { parameter: 'Operational Life', value: '25+', unit: 'years' }
  ];

  return (
    <PageTemplate
      title="Waste Water Treatment"
      description="Advanced wastewater treatment solutions for municipalities, industries, and agricultural facilities. Transform contaminated water into clean, reusable resources."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Waste Water Treatment Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Advanced treatment systems that transform wastewater into clean, reusable resources
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
                  Comprehensive Wastewater Treatment
                </h2>
                <p className={`text-lg mb-6 ${getThemeClasses.text.secondary}`}>
                  Our wastewater treatment solutions combine cutting-edge technology with proven engineering 
                  principles to deliver exceptional results. We handle everything from municipal sewage to 
                  complex industrial wastewater, ensuring compliance with environmental regulations.
                </p>
                <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
                  Our systems are designed for efficiency, sustainability, and long-term reliability, 
                  helping you meet your environmental goals while optimizing operational costs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={getThemeClasses.button.primary}>
                    Get Custom Quote
                  </button>
                  <button className={getThemeClasses.button.secondary}>
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                  alt="Wastewater Treatment Plant"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm">Removal Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Advanced Treatment Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.id} className={`${getThemeClasses.card} p-8`}>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                    {feature.title}
                  </h3>
                  <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className={getThemeClasses.text.secondary}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Applications & Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className={`${getThemeClasses.card} overflow-hidden`}>
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {app.title}
                    </h3>
                    <p className={`mb-3 ${getThemeClasses.text.secondary}`}>
                      {app.description}
                    </p>
                    <div className={`text-sm font-medium ${getThemeClasses.text.brand}`}>
                      Capacity: {app.capacity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Technical Specifications
            </h2>
            <div className={`${getThemeClasses.card} p-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                    <span className={`font-medium ${getThemeClasses.text.primary}`}>
                      {spec.parameter}
                    </span>
                    <div className="text-right">
                      <span className={`text-xl font-bold ${getThemeClasses.text.brand}`}>
                        {spec.value}
                      </span>
                      {spec.unit && (
                        <span className={`ml-1 ${getThemeClasses.text.secondary}`}>
                          {spec.unit}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Treatment Process Flow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Screening', desc: 'Remove large debris', icon: '🔍' },
                { step: '2', title: 'Primary', desc: 'Sedimentation & settling', icon: '⚖️' },
                { step: '3', title: 'Secondary', desc: 'Biological treatment', icon: '🌱' },
                { step: '4', title: 'Tertiary', desc: 'Advanced filtration', icon: '🔬' },
                { step: '5', title: 'Discharge', desc: 'Clean water release', icon: '💧' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className={`${getThemeClasses.card} p-6 relative`}>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">
                        →
                      </div>
                    )}
                    <div className="text-4xl mb-3">{process.icon}</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{process.step}</div>
                    <h3 className={`font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {process.title}
                    </h3>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      {process.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Ready to Transform Your Wastewater?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Our expert team is ready to design and implement a custom wastewater treatment solution 
              that meets your specific needs and environmental requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Schedule Consultation
              </button>
              <button className={getThemeClasses.button.secondary}>
                Download Brochure
              </button>
              <button className={getThemeClasses.button.success}>
                View References
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default WasteWaterTreatment;
