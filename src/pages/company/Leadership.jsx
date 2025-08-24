import PageTemplate from '../../components/PageTemplate';

const Leadership = () => {
  const leaders = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Johnson brings over 20 years of experience in water treatment technology and environmental engineering. She holds a PhD in Environmental Science and has led numerous successful projects across multiple continents.',
      expertise: ['Strategic Planning', 'Environmental Policy', 'International Relations']
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Michael is a technology innovator with expertise in advanced water purification systems and IoT integration. He has developed 15+ patents in water treatment technology.',
      expertise: ['R&D Leadership', 'Patent Development', 'Technology Innovation']
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Operations Officer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Rodriguez oversees all operational aspects of SSWS, ensuring quality standards and operational excellence. She has a proven track record in scaling operations globally.',
      expertise: ['Operations Management', 'Quality Assurance', 'Process Optimization']
    },
    {
      name: 'David Thompson',
      position: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'David manages SSWS\'s financial strategy and investor relations. With 18 years in financial management, he ensures sustainable growth and financial stability.',
      expertise: ['Financial Strategy', 'Investor Relations', 'Risk Management']
    }
  ];

  return (
    <PageTemplate
      title="Leadership"
      description="Meet our experienced leadership team driving innovation and growth in sustainable water solutions."
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Executive Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our leadership team combines decades of experience in water treatment, environmental science, 
            and business management. Together, they drive our mission to provide sustainable water solutions 
            for a better future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-corporate-blue dark:text-blue-400 font-semibold mb-3">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-corporate-blue to-blue-800 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our leadership team is committed to fostering innovation, sustainability, and excellence. 
            We're always looking for talented individuals who share our vision for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/company/careers" 
              className="bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Careers
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Leadership;
