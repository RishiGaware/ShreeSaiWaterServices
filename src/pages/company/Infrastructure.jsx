import PageTemplate from '../../components/PageTemplate';

const Infrastructure = () => {
  const facilities = [
    {
      name: 'Main Manufacturing Facility',
      description: 'State-of-the-art production facility with advanced automation and quality control systems.',
      features: ['50,000 sq ft production area', 'Advanced automation', 'Quality control labs', 'R&D center']
    },
    {
      name: 'Research & Development Center',
      description: 'Cutting-edge R&D facility dedicated to innovation in water treatment technology.',
      features: ['Modern laboratories', 'Testing facilities', 'Innovation hub', 'Collaboration spaces']
    },
    {
      name: 'Quality Assurance Lab',
      description: 'Comprehensive testing and quality assurance facilities ensuring product excellence.',
      features: ['Chemical analysis', 'Performance testing', 'Environmental testing', 'Certification support']
    }
  ];

  return (
    <PageTemplate
      title="Infrastructure"
      description="Explore our world-class facilities and cutting-edge infrastructure."
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Facilities</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            SSWS operates from state-of-the-art facilities designed to support innovation, 
            quality, and sustainable production. Our infrastructure reflects our commitment 
            to excellence and environmental responsibility.
          </p>
        </div>

        <div className="space-y-12">
          {facilities.map((facility, index) => (
            <div key={index} className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{facility.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{facility.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {facility.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-corporate-blue dark:text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 gradient-blue text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Technology & Innovation</h3>
          <p className="text-blue-100 mb-6">
            Our infrastructure is continuously evolving with the latest technologies and innovations 
            in water treatment and environmental management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Automated Systems</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ISO</div>
              <div className="text-blue-100">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Infrastructure;
