import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { getThemeClasses } from '../../theme/themeUtils';

const Manufacturing = () => {
  const capabilities = [
    {
      id: 1,
      title: 'Custom Equipment Design',
      description: 'Tailored water treatment equipment designed to meet your specific requirements and operational needs.',
      icon: '🎨',
      features: ['3D modeling and simulation', 'Custom specifications', 'Performance optimization']
    },
    {
      id: 2,
      title: 'Precision Manufacturing',
      description: 'State-of-the-art manufacturing facilities with CNC machining and automated assembly lines.',
      icon: '⚙️',
      features: ['CNC precision machining', 'Automated assembly', 'Quality control systems']
    },
    {
      id: 3,
      title: 'Material Selection',
      description: 'Expert selection of corrosion-resistant materials suitable for water treatment applications.',
      icon: '🔧',
      features: ['Stainless steel fabrication', 'Corrosion resistance', 'Long-term durability']
    },
    {
      id: 4,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality control processes ensuring reliable performance.',
      icon: '✅',
      features: ['Performance testing', 'Durability testing', 'Compliance verification']
    }
  ];

  const products = [
    {
      title: 'Filtration Systems',
      description: 'Custom filtration units for various applications',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      capacity: '100 - 10,000 L/hr'
    },
    {
      title: 'Treatment Tanks',
      description: 'Stainless steel and fiberglass tanks',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      capacity: '1,000 - 100,000 L'
    },
    {
      title: 'Pump Systems',
      description: 'High-efficiency pump assemblies',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      capacity: '10 - 1,000 L/min'
    },
    {
      title: 'Control Panels',
      description: 'Automated control and monitoring systems',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      capacity: 'Custom configurations'
    }
  ];

  const facilities = [
    {
      name: 'Main Production Facility',
      location: 'Mumbai, India',
      size: '25,000 sq ft',
      capacity: '50+ units/month',
      specialties: ['Assembly', 'Testing', 'Quality Control']
    },
    {
      name: 'Precision Machining Center',
      location: 'Pune, India',
      size: '15,000 sq ft',
      capacity: '100+ components/day',
      specialties: ['CNC Machining', 'Fabrication', 'Welding']
    },
    {
      name: 'Research & Development',
      location: 'Bangalore, India',
      size: '10,000 sq ft',
      capacity: 'Ongoing projects',
      specialties: ['Prototyping', 'Testing', 'Innovation']
    }
  ];

  return (
    <PageTemplate
      title="Manufacturing"
      description="State-of-the-art manufacturing facilities producing high-quality water treatment equipment with precision engineering and rigorous quality control."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Precision engineering and quality manufacturing of water treatment equipment
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
                  World-Class Manufacturing
                </h2>
                <p className={`text-lg mb-6 ${getThemeClasses.text.secondary}`}>
                  Our manufacturing facilities combine cutting-edge technology with skilled craftsmanship 
                  to produce water treatment equipment that meets the highest international standards. 
                  From concept to completion, we ensure every product exceeds expectations.
                </p>
                <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
                  With ISO 9001:2015 certification and advanced quality control systems, we deliver 
                  reliable, durable equipment that performs consistently in demanding environments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={getThemeClasses.button.primary}>
                    Tour Our Facility
                  </button>
                  <button className={getThemeClasses.button.secondary}>
                    Request Quote
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Manufacturing Facility"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-2xl">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-sm">9001:2015</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Manufacturing Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability) => (
                <div key={capability.id} className={`${getThemeClasses.card} p-8`}>
                  <div className="text-5xl mb-4">{capability.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                    {capability.title}
                  </h3>
                  <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className={getThemeClasses.text.secondary}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Range */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Product Range
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div key={index} className={`${getThemeClasses.card} overflow-hidden`}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {product.title}
                    </h3>
                    <p className={`mb-3 ${getThemeClasses.text.secondary}`}>
                      {product.description}
                    </p>
                    <div className={`text-sm font-medium ${getThemeClasses.text.brand}`}>
                      Capacity: {product.capacity}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chemical Manufacturing Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Chemical Manufacturing
            </h2>
            <div className="text-center mb-12">
              <p className={`text-lg mb-6 ${getThemeClasses.text.secondary} max-w-4xl mx-auto`}>
                Our portfolio includes key water treatment chemicals to meet industry standards and enhance the efficiency of water treatment systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cooling Water Biocides */}
              <div className={`${getThemeClasses.card} p-8`}>
                <h3 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary} flex items-center`}>
                  <span className="text-3xl mr-3">🧪</span>
                  Cooling Water Biocides
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.brand}`}>SSWS-602</h4>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      Specially manufactured for ionizing scale depositing substances like Calcium, Magnesium. 
                      Works as prevention from scale & corrosion. Dosing on daily basis on quantity of water present in tank & make up water.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.brand}`}>SSWS-605</h4>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      Special design chemical for algae & slime. Reduces growth of micro organism present in water 
                      which responsible for aerobic & anaerobic oxidation which causes chock-ups & formation of algae. 
                      Dosing once in a week as shock treatment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cooling Water Antiscalant */}
              <div className={`${getThemeClasses.card} p-8`}>
                <h3 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary} flex items-center`}>
                  <span className="text-3xl mr-3">⚗️</span>
                  Cooling Water Antiscalant
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.brand}`}>SSWS-202</h4>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      Cooling tower normally put in open atmosphere which contains dust particles. It can stick on cooling towers 
                      easily & causes scaling. This chemical works as settle down these dust particles as well as it works as a 
                      corrosion inhibitor. It does not allow corrode metal parts. Dosing maintaining pH on daily basis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mould Tube */}
              <div className={`${getThemeClasses.card} p-8`}>
                <h3 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary} flex items-center`}>
                  <span className="text-3xl mr-3">🔧</span>
                  Mould Tube
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.brand}`}>SSWS-23862</h4>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      Utilizing SSWS 23862 helps prevent black coating formation on mould tubes, thereby enhancing heat transfer 
                      efficiency and extending equipment lifespan.
                    </p>
                  </div>
                </div>
              </div>

              {/* RO Antiscalant */}
              <div className={`${getThemeClasses.card} p-8`}>
                <h3 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary} flex items-center`}>
                  <span className="text-3xl mr-3">💧</span>
                  RO Antiscalant
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.brand}`}>RO ANTISCLANT 111</h4>
                    <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                      Antiscalant 111 prevents scale formation heavy metals such as Calcium Magnesium Silica Sulphate etc. 
                      Extends membrane life, reduces maintenance costs, ensures compatibility with a wide range of feed waters 
                      and minimizes system downtime delivering reliable and efficient performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facilities */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our Manufacturing Facilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className={`${getThemeClasses.card} p-8`}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">🏭</div>
                    <h3 className={`text-2xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {facility.name}
                    </h3>
                    <p className={`text-lg ${getThemeClasses.text.brand}`}>
                      {facility.location}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className={getThemeClasses.text.tertiary}>Size:</span>
                      <span className={getThemeClasses.text.secondary}>{facility.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={getThemeClasses.text.tertiary}>Capacity:</span>
                      <span className={getThemeClasses.text.secondary}>{facility.capacity}</span>
                    </div>
                    <div className="mt-4">
                      <h4 className={`font-semibold mb-2 ${getThemeClasses.text.primary}`}>
                        Specialties:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.specialties.map((specialty, idx) => (
                          <span 
                            key={idx}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Control Process */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Quality Control Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Design Review', desc: 'Engineering validation', icon: '📋' },
                { step: '2', title: 'Material Inspection', desc: 'Quality verification', icon: '🔍' },
                { step: '3', title: 'Production Monitoring', desc: 'Real-time oversight', icon: '👁️' },
                { step: '4', title: 'Final Testing', desc: 'Performance validation', icon: '✅' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className={`${getThemeClasses.card} p-6 relative`}>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">
                        →
                      </div>
                    )}
                    <div className="text-4xl mb-3">{process.icon}</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">{process.step}</div>
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

        {/* Certifications & Standards */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-8 ${getThemeClasses.text.primary}`}>
              Certifications & Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${getThemeClasses.card} p-6`}>
                <div className="text-4xl mb-3">🏆</div>
                <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>ISO 9001:2015</h3>
                <p className={getThemeClasses.text.secondary}>Quality Management System</p>
              </div>
              <div className={`${getThemeClasses.card} p-6`}>
                <div className="text-4xl mb-3">🌱</div>
                <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>ISO 14001:2015</h3>
                <p className={getThemeClasses.text.secondary}>Environmental Management</p>
              </div>
              <div className={`${getThemeClasses.card} p-6`}>
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>OHSAS 18001:2007</h3>
                <p className={getThemeClasses.text.secondary}>Health & Safety Management</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Ready to Partner with Us?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Our manufacturing expertise and quality commitment make us the ideal partner for your 
              water treatment equipment needs. Let's discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Schedule Factory Tour
              </button>
              <button className={getThemeClasses.button.secondary}>
                Request Custom Quote
              </button>
              <button className={getThemeClasses.button.success}>
                Download Specifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Manufacturing;
