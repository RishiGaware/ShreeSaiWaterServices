import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const Leadership = () => {
  const themeClasses = getThemeClasses;

  const leadershipTeam = [
    {
      name: "Mr. Gajanan Patil",
      position: "Founder & Managing Director",
      image: "/api/placeholder/300/300",
      bio: "With a clear vision to provide reliable and sustainable water solutions,Mr. Gajanan Patil has been at the forefront of the water treatment industry for over a decade. Under his leadership, the company has grown into a trusted name in Reverse Osmosis (RO), Ultra Filtration (UF), and advanced water purification technologies.",
      expertise: "Gajanan strongly believes that access to clean and safe water is not just a necessity but a responsibility. His focus on innovation, cost-effectiveness, and customer satisfaction has helped industries, commercial establishments, and communities achieve efficient water management.",
      vision: "Guided by his expertise and commitment, the company continues to deliver customized solutions that meet international standards, while ensuring long-term sustainability and reliability.",
      message: "Our mission is to create world-class water treatment solutions that not only serve today's needs but also safeguard resources for the future. With every project, we strive to build trust, deliver quality, and make clean water accessible for all."
    }
  ];

  const coreTeam = [
    {
      name: "Mr. Kailas Dhawle",
      position: "Technical Head",
      image: "/api/placeholder/250/250",
      bio: "Kailas brings extensive hands-on technical expertise in the design, installation, and maintenance of complex water treatment systems. His strong engineering background ensures that every project is executed with precision and long-term reliability."
    },
    {
      name: "Mr. Vinod Dhawle",
      position: "Senior Technical Consultant",
      image: "/api/placeholder/250/250",
      bio: "Known for his deep technical knowledge and problem-solving skills, Vinod specializes in troubleshooting, optimizing system performance, and guiding clients on sustainable solutions tailored to their unique requirements."
    },
    {
      name: "Mr. Kiran Patil",
      position: "Chemical Expert",
      image: "/api/placeholder/250/250",
      bio: "Kiran brings specialized knowledge in water chemistry and treatment processes. His expertise ensures the right balance of treatment solutions, improving efficiency and extending the life of plants while meeting regulatory standards."
    },
    {
      name: "Mr. Shivam Surve",
      position: "Service & Support Head",
      image: "/api/placeholder/250/250",
      bio: "Dedicated to after-sales service and client satisfaction, Shivam leads the service division with a strong focus on timely maintenance, system upgrades, and customer support—ensuring plants operate smoothly with minimal downtime."
    },
    {
      name: "Mr. Suresh Chikate",
      position: "Head of Accounts & Finance",
      image: "/api/placeholder/250/250",
      bio: "Suresh oversees the company's financial operations with a commitment to transparency, accountability, and efficiency. His role ensures smooth financial management, supporting sustainable growth and long-term client relationships."
    },
    {
      name: "Mr. Abhishek Patil",
      position: "Management & Strategy",
      image: "/api/placeholder/250/250",
      bio: "As part of the management team, Abhishek plays a key role in strategic planning, operations, and organizational growth. With a strong focus on efficiency and innovation, he helps align the company's vision with its long-term business goals, ensuring steady progress and continuous improvement."
    }
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Leadership Team
            </h1>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              Meet the visionary leaders and dedicated professionals who drive {COMPANY_INFO.shortName}'s success in delivering world-class water treatment solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Founder & Managing Director */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Founder & Managing Director
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

            {leadershipTeam.map((leader, index) => (
              <div key={index} className={`${themeClasses.card} p-8 sm:p-10 lg:p-12 mb-8`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  {/* Leader Image */}
                  <div className="lg:col-span-1 flex justify-center lg:justify-start">
                    <div className="relative">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                        className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl hidden items-center justify-center">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-white">
                              {leader.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Leadership Photo</p> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leader Details */}
                  <div className="lg:col-span-2">
                    <h3 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-2`}>
                      {leader.name}
                    </h3>
                    <p className={`text-lg sm:text-xl font-semibold ${themeClasses.text.accent} mb-6`}>
                      {leader.position}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <p className={`text-base sm:text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                      {leader.bio}
                    </p>
                      </div>

                      <div>
                        <p className={`text-base sm:text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                          {leader.expertise}
                        </p>
                      </div>

                      <div>
                        <p className={`text-base sm:text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                          {leader.vision}
                        </p>
                      </div>

                      {/* Message from Leader */}
                      <div className={`${themeClasses.background.secondary} p-6 rounded-xl border-l-4 border-blue-500`}>
                        <h4 className={`text-lg font-semibold ${themeClasses.text.primary} mb-3`}>
                          Message from the Leader:
                        </h4>
                        <blockquote className={`text-base sm:text-lg italic ${themeClasses.text.secondary} leading-relaxed`}>
                          "{leader.message}"
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Team */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Leadership & Core Team
              </h2>
              <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our dedicated team of experts brings together decades of combined experience in water treatment, engineering, and customer service.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    {/* Member Image */}
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mx-auto shadow-lg hidden items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg font-bold text-white">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Member Details */}
                    <h3 className={`text-xl sm:text-2xl font-bold ${themeClasses.text.primary} mb-2`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg font-semibold ${themeClasses.text.accent} mb-4`}>
                      {member.position}
                    </p>
                    <p className={`text-sm sm:text-base ${themeClasses.text.secondary} leading-relaxed`}>
                      {member.bio}
                    </p>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
        </div>

      {/* Call to Action */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-6`}>
              Ready to Work with Our Expert Team?
            </h2>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Our experienced leadership and technical team is ready to help you find the perfect water treatment solution for your needs.
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

export default Leadership;