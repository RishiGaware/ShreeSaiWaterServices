import PageTemplate from '../../components/PageTemplate';

const OurTeam = () => {
  const departments = [
    {
      name: 'Engineering & R&D',
      description: 'Our core team of engineers and researchers developing innovative water treatment solutions.',
      members: [
        { name: 'Dr. Alex Kim', role: 'Senior Research Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
        { name: 'Maria Santos', role: 'Process Engineer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
        { name: 'James Wilson', role: 'Systems Engineer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' }
      ],
      icon: '🔬'
    },
    {
      name: 'Operations & Quality',
      description: 'Ensuring excellence in every project through rigorous quality control and efficient operations.',
      members: [
        { name: 'Lisa Chen', role: 'Quality Manager', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
        { name: 'Robert Martinez', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
        { name: 'Amanda Foster', role: 'Safety Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' }
      ],
      icon: '⚙️'
    },
    {
      name: 'Sales & Business Development',
      description: 'Building relationships and expanding our global reach in sustainable water solutions.',
      members: [
        { name: 'Carlos Rodriguez', role: 'Sales Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
        { name: 'Jennifer Lee', role: 'Business Development Manager', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
        { name: 'Thomas Brown', role: 'Client Relations', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' }
      ],
      icon: '💼'
    },
    {
      name: 'Environmental Services',
      description: 'Specialists in environmental impact assessment and sustainable development consulting.',
      members: [
        { name: 'Dr. Rachel Green', role: 'Environmental Scientist', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face' },
        { name: 'Kevin O\'Connor', role: 'Sustainability Consultant', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
        { name: 'Sophie Turner', role: 'Compliance Specialist', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' }
      ],
      icon: '🌱'
    }
  ];

  return (
    <PageTemplate
      title="Our Team"
      description="Meet the talented professionals behind our success in sustainable water solutions."
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Amazing Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our diverse team of professionals brings together expertise from various fields to create 
            innovative solutions for water treatment and environmental sustainability. We're united by 
            our passion for making a positive impact on the world.
          </p>
        </div>

        <div className="space-y-12">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{dept.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {dept.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {dept.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="text-center">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                      />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-corporate-blue dark:text-blue-400">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a difference in 
            environmental sustainability and water treatment technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/company/careers" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View Open Positions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Contact HR
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-corporate-blue dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Team Members</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Countries</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-300">Languages</div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default OurTeam;
