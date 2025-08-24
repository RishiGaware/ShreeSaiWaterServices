import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { getThemeClasses } from '../../theme/themeUtils';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Consulting & Design',
      description: 'Expert consultation and custom design services for water treatment systems.',
      icon: '💡',
      features: ['System design & optimization', 'Feasibility studies', 'Technical specifications'],
      pricing: 'Custom Quote'
    },
    {
      id: 2,
      title: 'Installation & Commissioning',
      description: 'Professional installation and startup services ensuring optimal performance.',
      icon: '🔧',
      features: ['Turnkey installation', 'System testing', 'Performance optimization'],
      pricing: 'Project-based'
    },
    {
      id: 3,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance programs and 24/7 technical support.',
      icon: '🛠️',
      features: ['Preventive maintenance', 'Emergency repairs', 'Remote monitoring'],
      pricing: 'Annual Contract'
    },
    {
      id: 4,
      title: 'Training & Certification',
      description: 'Operator training and certification programs for your team.',
      icon: '📚',
      features: ['Operator training', 'Safety protocols', 'System operation'],
      pricing: 'Per Person'
    }
  ];

  const serviceAreas = [
    {
      title: 'Municipal Water',
      description: 'Cities, towns, and public water systems',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      services: ['Treatment plant design', 'Infrastructure upgrades', 'Compliance consulting']
    },
    {
      title: 'Industrial Applications',
      description: 'Manufacturing, mining, and processing facilities',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      services: ['Process water treatment', 'Wastewater management', 'Cooling water systems']
    },
    {
      title: 'Commercial Buildings',
      description: 'Hotels, hospitals, and office complexes',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      services: ['Water purification', 'Filtration systems', 'Maintenance contracts']
    },
    {
      title: 'Agricultural Sector',
      description: 'Farms, irrigation systems, and food processing',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      services: ['Irrigation water treatment', 'Crop protection', 'Sustainable solutions']
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: '$2,500',
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
      price: '$5,000',
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
      price: '$10,000',
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
    <PageTemplate
      title="Services"
      description="Comprehensive water treatment services including consulting, design, installation, maintenance, and support for all your water management needs."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              End-to-end water treatment solutions from concept to operation
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
                  Complete Service Solutions
                </h2>
                <p className={`text-lg mb-6 ${getThemeClasses.text.secondary}`}>
                  From initial consultation to ongoing support, we provide comprehensive services 
                  that ensure your water treatment systems operate at peak efficiency. Our team of 
                  experts is committed to delivering solutions that meet your specific needs.
                </p>
                <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
                  With decades of experience and a commitment to excellence, we're your trusted 
                  partner for all water treatment challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={getThemeClasses.button.primary}>
                    Get Service Quote
                  </button>
                  <button className={getThemeClasses.button.secondary}>
                    Download Service Guide
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
                  alt="Professional Services"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-2xl">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className={`${getThemeClasses.card} p-8`}>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                    {service.title}
                  </h3>
                  <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className={getThemeClasses.text.secondary}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getThemeClasses.text.brand}`}>
                      {service.pricing}
                    </div>
                    <button className={`${getThemeClasses.button.primary} mt-4 w-full`}>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Service Areas & Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className={`${getThemeClasses.card} overflow-hidden`}>
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {area.title}
                    </h3>
                    <p className={`mb-3 ${getThemeClasses.text.secondary}`}>
                      {area.description}
                    </p>
                    <ul className="space-y-1">
                      {area.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Plans */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Support & Maintenance Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportLevels.map((plan, index) => (
                <div key={index} className={`${getThemeClasses.card} p-8 relative ${plan.recommended ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${getThemeClasses.text.brand}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${getThemeClasses.text.secondary}`}>
                        /{plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className={getThemeClasses.text.secondary}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`${plan.recommended ? getThemeClasses.button.primary : getThemeClasses.button.secondary} w-full`}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our Service Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Consultation', desc: 'Initial assessment', icon: '💬' },
                { step: '2', title: 'Analysis', desc: 'Requirements review', icon: '🔍' },
                { step: '3', title: 'Design', desc: 'Solution development', icon: '✏️' },
                { step: '4', title: 'Implementation', desc: 'Execution & testing', icon: '🚀' },
                { step: '5', title: 'Support', desc: 'Ongoing maintenance', icon: '🛠️' }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className={`${getThemeClasses.card} p-6 relative`}>
                    {index < 4 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-2xl text-gray-400">
                        →
                      </div>
                    )}
                    <div className="text-4xl mb-3">{process.icon}</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{process.step}</div>
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

        {/* Why Choose Us */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎯', title: 'Expert Team', desc: 'Certified professionals with decades of experience' },
                { icon: '⚡', title: 'Fast Response', desc: '24/7 support with rapid emergency response times' },
                { icon: '🔒', title: 'Guaranteed Quality', desc: '100% satisfaction guarantee on all services' },
                { icon: '🌱', title: 'Sustainable', desc: 'Eco-friendly solutions and practices' }
              ].map((feature, index) => (
                <div key={index} className={`${getThemeClasses.card} p-6 text-center`}>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                    {feature.title}
                  </h3>
                  <p className={getThemeClasses.text.secondary}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Ready to Get Started?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Our expert team is ready to discuss your water treatment needs and provide 
              customized solutions that deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Schedule Consultation
              </button>
              <button className={getThemeClasses.button.secondary}>
                Get Service Quote
              </button>
              <button className={getThemeClasses.button.success}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Services;
