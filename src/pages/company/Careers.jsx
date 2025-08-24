import PageTemplate from '../../components/PageTemplate';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Water Treatment Engineer',
      department: 'Engineering',
      location: 'Headquarters',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the design and development of advanced water treatment systems.',
      requirements: ['Bachelor\'s in Engineering', 'Water treatment experience', 'Project management skills', 'Team leadership']
    },
    {
      title: 'Environmental Scientist',
      department: 'Research & Development',
      location: 'R&D Center',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Conduct research on environmental impact and sustainability solutions.',
      requirements: ['Master\'s in Environmental Science', 'Research experience', 'Data analysis skills', 'Field work capability']
    },
    {
      title: 'Sales Manager',
      department: 'Business Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: ['Bachelor\'s degree', 'Sales experience', 'Water industry knowledge', 'Leadership skills']
    },
    {
      title: 'Quality Control Specialist',
      department: 'Operations',
      location: 'Manufacturing Facility',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure product quality and compliance with industry standards.',
      requirements: ['Quality control experience', 'Attention to detail', 'Testing procedures', 'Documentation skills']
    }
  ];

  const benefits = [
    { title: 'Health Insurance', icon: '🏥', description: 'Comprehensive health, dental, and vision coverage' },
    { title: 'Professional Development', icon: '📚', description: 'Training programs and career advancement opportunities' },
    { title: 'Work-Life Balance', icon: '⚖️', description: 'Flexible schedules and paid time off' },
    { title: 'Team Environment', icon: '🤝', description: 'Collaborative culture with passionate professionals' },
    { title: 'Innovation Focus', icon: '💡', description: 'Work on cutting-edge environmental solutions' },
    { title: 'Global Impact', icon: '🌍', description: 'Contribute to sustainable water management worldwide' }
  ];

  return (
    <PageTemplate
      title="Careers"
      description="Join our team and build a career in sustainable water solutions."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            At SSWS, we're not just building careers – we're building a sustainable future. 
            Join our team of passionate professionals dedicated to solving the world's water challenges 
            through innovation and technology.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Open Positions</h3>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="card p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>📍 {position.location}</span>
                      <span>💼 {position.type}</span>
                      <span>⏰ {position.experience}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="btn-primary">
                      Apply Now
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {position.description}
                </p>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h5>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Application Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Submit Application</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Complete our online application form</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Initial Review</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Our team reviews your application</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interviews</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Meet with our team members</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Offer</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Join the SSWS family!</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-green rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See the Right Position?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Send Resume
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Contact HR
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Careers;
