import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { getThemeClasses } from '../../theme/themeUtils';

const CorporateSocialResponsibility = () => {
  const initiatives = [
    {
      id: 1,
      title: 'Clean Water Access',
      description: 'Providing clean drinking water to underserved communities through our technology and expertise.',
      impact: '10,000+ people provided with clean water',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Community Development'
    },
    {
      id: 2,
      title: 'Environmental Education',
      description: 'Conducting workshops and training programs to raise awareness about water conservation.',
      impact: '5,000+ students educated annually',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Green Technology Research',
      description: 'Investing in research and development of eco-friendly water treatment solutions.',
      impact: '15+ patents filed for green technologies',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      category: 'Innovation'
    },
    {
      id: 4,
      title: 'Employee Volunteer Program',
      description: 'Encouraging our team to contribute to community service and environmental projects.',
      impact: '2,000+ volunteer hours annually',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      category: 'Employee Engagement'
    },
    {
      id: 5,
      title: 'Sustainable Supply Chain',
      description: 'Working with suppliers who share our commitment to environmental responsibility.',
      impact: '90% of suppliers certified sustainable',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Supply Chain'
    },
    {
      id: 6,
      title: 'Carbon Footprint Reduction',
      description: 'Implementing measures to reduce our carbon footprint and environmental impact.',
      impact: '25% reduction in carbon emissions',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Environmental Impact'
    }
  ];

  const stats = [
    { label: 'Communities Served', value: '150+', icon: '🏘️' },
    { label: 'Clean Water Projects', value: '75+', icon: '💧' },
    { label: 'Volunteer Hours', value: '10,000+', icon: '🤝' },
    { label: 'Students Educated', value: '25,000+', icon: '📚' },
    { label: 'Green Technologies', value: '20+', icon: '🌱' },
    { label: 'Carbon Reduction', value: '25%', icon: '🌍' }
  ];

  return (
    <PageTemplate
      title="Corporate Social Responsibility"
      description="Making a positive impact on society and the environment through sustainable business practices and community engagement."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Social Responsibility
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Committed to creating positive change through sustainable practices and community engagement
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Our CSR Mission
            </h2>
            <p className={`text-lg ${getThemeClasses.text.secondary} mb-8`}>
              At SSWS, we believe that business success and social responsibility go hand in hand. 
              Our CSR initiatives focus on environmental sustainability, community development, and 
              creating lasting positive impact through our water treatment expertise.
            </p>
            <div className={`${getThemeClasses.card} p-8`}>
              <div className="text-6xl mb-4">🌊</div>
              <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                "Clean Water for All"
              </h3>
              <p className={`text-lg ${getThemeClasses.text.secondary}`}>
                We're committed to ensuring access to clean water for communities worldwide, 
                while protecting our planet for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className={`${getThemeClasses.card} p-6 text-center`}>
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-2xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${getThemeClasses.text.secondary}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSR Initiatives */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our CSR Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative) => (
                <div key={initiative.id} className={`${getThemeClasses.card} overflow-hidden`}>
                  <div className="relative">
                    <img 
                      src={initiative.image} 
                      alt={initiative.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {initiative.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${getThemeClasses.text.primary}`}>
                      {initiative.title}
                    </h3>
                    <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
                      {initiative.description}
                    </p>
                    <div className={`p-3 bg-green-50 dark:bg-green-900/20 rounded-lg`}>
                      <p className={`text-sm font-medium ${getThemeClasses.text.primary}`}>
                        <span className="text-green-600 dark:text-green-400">Impact: </span>
                        {initiative.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Goals */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Sustainability Goals 2025
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${getThemeClasses.card} p-8`}>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                  Environmental Goals
                </h3>
                <ul className={`space-y-3 ${getThemeClasses.text.secondary}`}>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Achieve carbon neutrality by 2025
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    100% renewable energy usage
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Zero waste to landfill
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Water recycling rate of 95%
                  </li>
                </ul>
              </div>
              <div className={`${getThemeClasses.card} p-8`}>
                <div className="text-5xl mb-4">🤝</div>
                <h3 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                  Social Goals
                </h3>
                <ul className={`space-y-3 ${getThemeClasses.text.secondary}`}>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Provide clean water to 50,000+ people
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Educate 100,000+ students on water conservation
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    20,000+ volunteer hours annually
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    Support 200+ community projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Get Involved
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Join us in making a difference. Whether you're a client, partner, or community member, 
              there are many ways to get involved in our CSR initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Partner With Us
              </button>
              <button className={getThemeClasses.button.secondary}>
                Volunteer Opportunities
              </button>
              <button className={getThemeClasses.button.success}>
                Donate to Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default CorporateSocialResponsibility;
