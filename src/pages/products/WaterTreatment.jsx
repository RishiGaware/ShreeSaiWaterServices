import PageTemplate from '../../components/PageTemplate';

const WaterTreatment = () => {
  const features = [
    {
      title: 'Advanced Filtration Systems',
      description: 'Multi-stage filtration using cutting-edge membrane technology for superior water quality.',
      icon: '🔬',
      benefits: ['Removes 99.9% of contaminants', 'Long-lasting filter media', 'Easy maintenance']
    },
    {
      title: 'Smart Monitoring',
      description: 'IoT-enabled sensors and real-time monitoring for optimal performance and efficiency.',
      icon: '📱',
      benefits: ['Real-time data collection', 'Predictive maintenance alerts', 'Remote monitoring capabilities']
    },
    {
      title: 'Energy Efficient',
      description: 'Optimized processes that reduce energy consumption while maintaining high performance.',
      icon: '⚡',
      benefits: ['30% energy savings', 'Variable speed pumps', 'Smart automation']
    },
    {
      title: 'Scalable Design',
      description: 'Modular systems that can be easily expanded to meet growing water treatment needs.',
      icon: '📈',
      benefits: ['Flexible capacity', 'Easy expansion', 'Cost-effective scaling']
    }
  ];

  const specifications = [
    { category: 'Capacity', details: ['5,000 - 100,000 L/day', 'Customizable for larger needs'] },
    { category: 'Filtration', details: ['Multi-stage process', 'Membrane technology', 'UV sterilization'] },
    { category: 'Automation', details: ['PLC control system', 'Touch screen interface', 'Mobile app control'] },
    { category: 'Maintenance', details: ['Predictive maintenance', 'Easy access design', 'Minimal downtime'] }
  ];

  return (
    <PageTemplate
      title="Water Treatment Plant"
      description="Advanced water purification and treatment solutions for industrial and municipal applications."
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Image Section */}
        <div className="mb-16">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop"
            alt="Water Treatment Plant"
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Water Treatment Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Our water treatment plants utilize state-of-the-art technology to deliver clean, 
              safe water for industrial, commercial, and municipal applications. With over 25 years 
              of experience, we've developed systems that are both efficient and environmentally responsible.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From small-scale industrial units to large municipal facilities, our solutions are 
              designed to meet the highest standards of water quality while minimizing environmental impact.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">99.9% contaminant removal</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Energy efficient operation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Smart monitoring & control</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Low maintenance requirements</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Advanced Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <svg className="w-4 h-4 text-corporate-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {spec.category}
                </h3>
                <ul className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Industrial</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manufacturing, food processing, pharmaceutical, and chemical industries
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Commercial</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hotels, hospitals, schools, and office buildings
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Municipal</h3>
              <p className="text-gray-600 dark:text-gray-300">
                City water treatment plants and community water systems
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-corporate-blue to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact our team to discuss your water treatment needs and get a customized solution 
            that meets your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Request Quote
            </a>
            <a 
              href="/products" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-colors duration-200"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default WaterTreatment;
