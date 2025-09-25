import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const VisionMission = () => {
  const themeClasses = getThemeClasses;

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Continuously learning and innovating to create feasible, long-term and sustainable water purification solutions.',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Never compromising on quality and delivering best performance projects with premium materials.',
      icon: '🏆'
    },
    {
      title: 'Customer Focus',
      description: 'Quick and easy connection to a network of qualified and trained RO water purifier providers.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Striving to be recognized as the most preferred water purification solutions provider company.',
      icon: '⭐'
    }
  ];

  const materialsCommitment = {
    title: 'Materials Commitment',
    description: 'We source only certified, industry-standard raw materials from trusted suppliers.',
    policies: [
      'All materials comply with national and international quality standards (ISI, ISO, NSF, etc.)',
      'We use corrosion-resistant and food-grade materials to ensure safety and longevity',
      'Components are selected for high mechanical strength and durability, even in demanding industrial conditions',
      'Preference is given to energy-efficient and eco-friendly materials to support sustainable solutions',
      'Every batch of materials undergoes stringent incoming quality inspection before use',
      'Traceability of material sourcing is maintained for accountability and reliability',
      'Regular audits are conducted to ensure zero compromise on quality and safety',
      'We continually upgrade our material selection process to adopt the latest innovations in water treatment technology',
      'Our policy ensures that only materials with proven performance are integrated into our systems'
    ]
  };

  const responsibilities = [
    'Design and Engineering Consultancy',
    'Raw water treatment',
    'Desalination and Reverse osmosis',
    'Demineralization and Dealkalisation',
    'Mineral water plants',
    'Operation and maintenance of treatment plant',
    'Augmentation and expansion of the existing plant',
    'Sampling and laboratory analysis of water and wastewater'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Vision, Mission & Values
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our guiding principles that drive us to deliver exceptional water purification solutions and create a better life for all.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className={`${themeClasses.card} p-8 sm:p-12 text-center`}>
              <div className="text-6xl mb-6">🔮</div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our Vision
              </h2>
              <blockquote className={`text-lg sm:text-xl italic ${themeClasses.text.secondary} leading-relaxed max-w-4xl mx-auto`}>
                "{COMPANY_INFO.vision}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className={`${themeClasses.card} p-8 sm:p-12 text-center`}>
              <div className="text-6xl mb-6">🎯</div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our Mission
              </h2>
              <blockquote className={`text-lg sm:text-xl italic ${themeClasses.text.secondary} leading-relaxed max-w-4xl mx-auto`}>
                "{COMPANY_INFO.mission}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Values Statement */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className={`${themeClasses.card} p-8 sm:p-12 text-center`}>
              <div className="text-6xl mb-6">💎</div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our Values
              </h2>
              <blockquote className={`text-lg sm:text-xl italic ${themeClasses.text.secondary} leading-relaxed max-w-4xl mx-auto`}>
                "{COMPANY_INFO.values}"
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Core Values
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                The fundamental principles that guide our actions and decisions in everything we do.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className={`${themeClasses.card} p-8 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                      {value.title}
                    </h3>
                    <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quality Policies */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Quality Policies
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                {COMPANY_INFO.qualityPolicies.iso}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className={`${themeClasses.card} p-8`}>
              <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-6`}>
                Our Responsibilities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary}`}>{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Commitment */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                {materialsCommitment.title}
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                {materialsCommitment.description}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className={`${themeClasses.card} p-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {materialsCommitment.policies.map((policy, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className={`${themeClasses.text.secondary} leading-relaxed`}>{policy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Why Choose {COMPANY_INFO.shortName}?
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our commitment to excellence and customer satisfaction sets us apart in the water treatment industry.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMPANY_INFO.whyChooseUs.map((reason, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-lg transition-all duration-300 group`}>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className={`${themeClasses.text.secondary} leading-relaxed`}>{reason}</span>
                  </div>
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
              Ready to Experience Our Commitment?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Let us demonstrate our vision, mission, and values through exceptional water treatment solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Get in Touch
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
  );
};

export default VisionMission;
