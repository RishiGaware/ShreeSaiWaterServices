import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const Services = () => {
  const themeClasses = getThemeClasses;

  const postOrderServices = [
    {
      id: 1,
      title: 'Operation And Maintenance Contracts',
      description: 'Comprehensive O&M contracts to ensure optimal performance of your water treatment systems.',
      icon: '⚙️',
      features: ['Regular maintenance schedules', 'Performance monitoring', 'Preventive maintenance', 'System optimization']
    },
    {
      id: 2,
      title: 'Annual Maintenance Contracts',
      description: 'Year-round maintenance contracts with priority support and guaranteed response times.',
      icon: '📅',
      features: ['Scheduled maintenance visits', 'Priority support', 'Emergency response', 'Performance reports']
    },
    {
      id: 3,
      title: 'Trouble Shooting',
      description: 'Expert troubleshooting services to quickly identify and resolve system issues.',
      icon: '🔧',
      features: ['Rapid diagnosis', 'Root cause analysis', 'Quick resolution', 'Prevention strategies']
    },
    {
      id: 4,
      title: 'On-site Membrane UF Integrity Test',
      description: 'Professional membrane integrity testing services to ensure optimal filtration performance.',
      icon: '🔬',
      features: ['Membrane testing', 'Performance analysis', 'Quality assurance', 'Compliance verification']
    },
    {
      id: 5,
      title: 'Renovation/Retrofit',
      description: 'System upgrades and modernization to improve efficiency and extend equipment life.',
      icon: '🔄',
      features: ['System upgrades', 'Technology updates', 'Efficiency improvements', 'Life extension']
    },
    {
      id: 6,
      title: 'Installation and Commissioning',
      description: 'Professional installation and commissioning services for all water treatment systems.',
      icon: '🚀',
      features: ['Expert installation', 'System testing', 'Performance validation', 'Operator training']
    },
    {
      id: 7,
      title: 'Chemical Supply and Dosing',
      description: 'Complete chemical supply and automated dosing solutions for optimal water treatment performance.',
      icon: '🧪',
      features: ['Chemical supply', 'Dosing systems', 'Dosage optimization', 'Performance monitoring']
    },
    {
      id: 8,
      title: 'Chemical Analysis and Testing',
      description: 'Comprehensive water analysis and chemical testing services to ensure optimal treatment efficiency.',
      icon: '🔬',
      features: ['Water quality analysis', 'Chemical testing', 'Dosage recommendations', 'Performance optimization']
    }
  ];

  const preOrderServices = [
    {
      id: 1,
      title: 'Water Management Audits',
      description: 'Comprehensive water audits to assess current systems and identify optimization opportunities.',
      icon: '📊',
      features: ['System assessment', 'Efficiency analysis', 'Cost optimization', 'Recommendations']
    },
    {
      id: 2,
      title: 'Water Management and Project Management Consultancy',
      description: 'Expert consultancy for water management projects and BOOT project execution.',
      icon: '💼',
      features: ['Project planning', 'BOOT consultancy', 'Risk assessment', 'Implementation support']
    },
    {
      id: 3,
      title: 'RFQ/Tender Specification',
      description: 'Professional assistance with RFQ preparation and tender specification development.',
      icon: '📋',
      features: ['Technical specifications', 'Tender preparation', 'Compliance review', 'Documentation']
    },
    {
      id: 4,
      title: 'Technical Offer Evaluation',
      description: 'Expert evaluation of technical offers to ensure optimal solution selection.',
      icon: '✅',
      features: ['Technical review', 'Compliance check', 'Performance analysis', 'Recommendations']
    }
  ];

  const projectOfferings = [
    {
      category: 'FRP Vessels & Distribution',
      items: ['FRP Vessels', 'Distribution system', 'Fine Bubble Tube and Disc Diffuser']
    },
    {
      category: 'Clarifier Mechanisms & Media',
      items: ['Clarifier Mechanisms', 'MBBR Media', 'Tube Settler', 'SAFF Media']
    },
    {
      category: 'Filtration Media',
      items: ['Quartz - River Sand', 'Activated Carbon', 'Mn02', 'Air Diffuser']
    },
    {
      category: 'Advanced Systems',
      items: ['Ozone Generator', 'Oxygen Concentrator', 'Ultrafiltration', 'Nano Filtration Membranes']
    },
    {
      category: 'RO Components',
      items: ['RO Membranes', 'Ion Exchange Resins', 'Multiport Valves', 'RO Pressure Vessels']
    },
    {
      category: 'Spares & Accessories',
      items: ['All Spares and accessories', 'Water Treatment Plant Components', 'Waste Water Treatment Components']
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: '₹25,000',
      period: 'per year',
      features: [
        'Email support',
        'Phone support (8am-5pm)',
        'Quarterly maintenance visits',
        'Basic troubleshooting',
        'Software updates'
      ],
      recommended: false
    },
    {
      name: 'Professional Support',
      price: '₹50,000',
      period: 'per year',
      features: [
        'Priority email support',
        '24/7 phone support',
        'Monthly maintenance visits',
        'Advanced troubleshooting',
        'Performance optimization',
        'Emergency response (4 hours)',
        'Training sessions'
      ],
      recommended: true
    },
    {
      name: 'Enterprise Support',
      price: '₹1,00,000',
      period: 'per year',
      features: [
        'Dedicated support engineer',
        '24/7 priority support',
        'Weekly maintenance visits',
        'Custom solutions',
        'Performance monitoring',
        'Emergency response (1 hour)',
        'Unlimited training',
        'Custom reporting'
      ],
      recommended: false
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Professional Services
            </h1>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              End-to-end water treatment solutions from concept to operation. We provide comprehensive services that ensure your water treatment systems operate at peak efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Post Order Services */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Post Order Services
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Comprehensive support services to ensure optimal performance and longevity of your water treatment systems.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postOrderServices.map((service) => (
                <div key={service.id} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3`}>
                      {service.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
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

      {/* Pre Order Services */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Pre Order Services
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Expert consultancy and planning services to help you make informed decisions about your water treatment needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {preOrderServices.map((service) => (
                <div key={service.id} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3`}>
                        {service.title}
                      </h3>
                      <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className={`text-sm ${themeClasses.text.secondary}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Offerings */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Project Offerings
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Complete range of components and systems for water and wastewater treatment plants.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectOfferings.map((offering, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-4`}>
                    {offering.category}
                  </h3>
                  <ul className="space-y-2">
                    {offering.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className={`text-sm ${themeClasses.text.secondary}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support Plans */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Support & Maintenance Plans
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Choose the support plan that best fits your needs and budget.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((plan, index) => (
                <div key={index} className={`${themeClasses.card} p-8 relative ${plan.recommended ? 'ring-2 ring-blue-500' : ''} hover:shadow-xl transition-all duration-300`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${themeClasses.text.primary}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${themeClasses.text.accent}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${themeClasses.text.secondary}`}>
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className={`text-sm ${themeClasses.text.secondary}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`${plan.recommended ? themeClasses.button.primary : themeClasses.button.secondary} w-full text-center inline-block py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105`}
                  >
                    Choose Plan
                  </a>
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
              Ready to Get Started?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Our expert team is ready to discuss your water treatment needs and provide customized solutions that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Schedule Consultation
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

export default Services;