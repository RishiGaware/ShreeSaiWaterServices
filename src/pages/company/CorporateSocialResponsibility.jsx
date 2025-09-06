import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const CorporateSocialResponsibility = () => {
  const themeClasses = getThemeClasses;

  const csrInitiatives = [
    {
      id: 1,
      title: 'Commitment to the Environment',
      description: 'We design and implement systems that promote efficient water usage, energy savings, and eco-friendly technologies. By reducing wastewater and recycling resources, we help industries and communities minimize their environmental footprint.',
      icon: '🌱',
      features: [
        'Efficient water usage systems',
        'Energy-saving technologies',
        'Eco-friendly solutions',
        'Wastewater reduction',
        'Resource recycling programs'
      ]
    },
    {
      id: 2,
      title: 'Access to Clean Water',
      description: 'Water is a basic human right. Through our expertise in RO, UF, and wastewater treatment systems, we contribute to projects that bring safe drinking water to communities, schools, and institutions—improving health and well-being.',
      icon: '💧',
      features: [
        'Safe drinking water projects',
        'Community water systems',
        'School water programs',
        'Institutional water solutions',
        'Health and well-being focus'
      ]
    },
    {
      id: 3,
      title: 'Community Engagement',
      description: 'We actively support initiatives aimed at raising awareness about water conservation, hygiene, and sustainability. Our team participates in local programs to educate communities on how small actions can make a big impact on water security.',
      icon: '🤝',
      features: [
        'Water conservation awareness',
        'Hygiene education programs',
        'Sustainability workshops',
        'Local community participation',
        'Educational initiatives'
      ]
    },
    {
      id: 4,
      title: 'Ethical Business Practices',
      description: 'Integrity and transparency are the foundations of our business. We are committed to fair practices in dealing with customers, vendors, and employees, ensuring long-term relationships built on trust.',
      icon: '⚖️',
      features: [
        'Integrity and transparency',
        'Fair customer practices',
        'Ethical vendor relationships',
        'Employee fairness',
        'Trust-based partnerships'
      ]
    },
    {
      id: 5,
      title: 'Employee Well-being',
      description: 'We value our people as our greatest strength. By fostering a safe, inclusive, and growth-oriented workplace, we ensure our employees are empowered to contribute both to the company\'s success and to society at large.',
      icon: '👥',
      features: [
        'Safe workplace environment',
        'Inclusive culture',
        'Growth opportunities',
        'Employee empowerment',
        'Society contribution focus'
      ]
    }
  ];

  const impactStats = [
    { label: 'Communities Served', value: '150+', icon: '🏘️' },
    { label: 'Clean Water Projects', value: '75+', icon: '💧' },
    { label: 'Educational Programs', value: '50+', icon: '📚' },
    { label: 'Environmental Initiatives', value: '30+', icon: '🌱' },
    { label: 'Employee Volunteer Hours', value: '5,000+', icon: '🤝' },
    { label: 'Sustainable Solutions', value: '100+', icon: '♻️' }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Corporate & Social Responsibility
            </h1>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              At {COMPANY_INFO.shortName}, we believe that business growth and social responsibility go hand in hand. As a provider of water treatment solutions, we recognize the vital role we play in preserving natural resources and ensuring access to clean water for future generations.
            </p>
          </div>
        </div>
      </div>

      {/* CSR Initiatives */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our CSR Commitments
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {csrInitiatives.map((initiative, index) => (
                <div key={initiative.id} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {initiative.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-3`}>
                        {initiative.id}. {initiative.title}
                      </h3>
                      <p className={`${themeClasses.text.secondary} leading-relaxed mb-4`}>
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${themeClasses.text.primary} mb-3`}>
                      Key Focus Areas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {initiative.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          <span className={`text-sm ${themeClasses.text.secondary}`}>
                            {feature}
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

      {/* Impact Statistics */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Impact
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Through our CSR initiatives, we're making a measurable difference in communities and the environment.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className={`${themeClasses.card} p-6 text-center hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${themeClasses.text.primary}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${themeClasses.text.secondary}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`${themeClasses.card} p-8 sm:p-12`}>
              <div className="text-6xl mb-6">🌊</div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our CSR Mission
              </h2>

              <blockquote className={`text-lg sm:text-xl italic ${themeClasses.text.secondary} leading-relaxed mb-8`}>
                "Through our corporate and social responsibility initiatives, we aim not only to provide high-quality water treatment solutions but also to make a meaningful contribution toward a cleaner, healthier, and more sustainable future."
              </blockquote>
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

      {/* Call to Action */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Join Us in Making a Difference
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Together, we can create a sustainable future where clean water is accessible to all. 
              Whether you're a client, partner, or community member, there are many ways to get involved in our CSR initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Get Involved
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/gallery"
                className={`${themeClasses.button.secondary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateSocialResponsibility;