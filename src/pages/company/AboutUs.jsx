import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';

const AboutUs = () => {
  const themeClasses = getThemeClasses;

  const services = [
    {
      name: 'Sand Filtration Plant',
      description: 'High-efficiency sand filtration systems for removing suspended matters and turbidity.',
      icon: '🏭'
    },
    {
      name: 'Softener Plant',
      description: 'Advanced water softening systems using ion exchange technology to remove calcium and magnesium.',
      icon: '💧'
    },
    {
      name: 'Ultra Filtration Plant',
      description: 'Advanced ultra-filtration systems for removing bacteria, viruses, and microorganisms.',
      icon: '🔬'
    },
    {
      name: 'Reverse Osmosis (RO)',
      description: 'State-of-the-art RO systems for producing high-purity water through membrane technology.',
      icon: '⚗️'
    },
    {
      name: 'DM Water Plant',
      description: 'De-mineralization plants for producing ultra-pure water by removing dissolved minerals.',
      icon: '🧪'
    },
    {
      name: 'Chemical Spares',
      description: 'Complete range of chemical spares and consumables for plant maintenance.',
      icon: '⚙️'
    }
  ];

  const industries = [
    'Automobile', 'Construction', 'Mining', 'Steel & Iron', 'Electroplating',
    'Food & Beverages', 'Sugar Mill', 'Petroleum Industry', 'Pulp and Paper',
    'Chemical & Pharmaceutical', 'Laboratory', 'Hospitals & Clinics',
    'Schools, Universities and Offices', 'Hotels, Spa, Theme Parks and Resorts',
    'Plastic Extrusions & Moldings', 'Printing Ink Manufacturing', 'Paint Production'
  ];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              About {COMPANY_INFO.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Leading provider in water filtration industry with 20+ years of expertise in delivering high-quality solutions for clean and safe industrial water
            </p>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
                  Company Overview
                </h2>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  {COMPANY_INFO.name} has been involved since 2004 in offering a wide spectrum of high quality industrial RO Plants, De-mineralization Plants, Water Softener Solutions for extensive range of applications commercial RO Plants. RO systems for bore well, ground, well river and tap water applications.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed mb-6`}>
                  Our highly customized plants are available in various capacity of potable water production from 500 LPH to 50000 LPH. In the short span of time we have gained international acclaim for our varied range of products.
                </p>
                <p className={`text-lg ${themeClasses.text.secondary} leading-relaxed`}>
                  We are undertaking annual maintenance contract, on time service operation and maintenance contract of any company make. Water purification is a step by step process often requiring a combination of technologies. {COMPANY_INFO.shortName} provide you the best water treatment systems by blending these technologies to suit your need.
                </p>
              </div>
              
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>Company Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Established:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>2004</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Registered:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>2016</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Experience:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>20+ years</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>GSTIN:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.business.gstin}</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>PAN:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.business.pan}</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Contact Person:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.contact.contactPerson}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Values */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Vision, Mission & Values
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                The core principles that drive {COMPANY_INFO.shortName} towards a sustainable future.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className={`${themeClasses.card} p-8 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>Our Vision</h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                  {COMPANY_INFO.vision}
                </p>
              </div>

              <div className={`${themeClasses.card} p-8 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>Our Mission</h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                  {COMPANY_INFO.mission}
                </p>
              </div>

              <div className={`${themeClasses.card} p-8 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💎</div>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>Our Values</h3>
                <p className={`${themeClasses.text.secondary} leading-relaxed`}>
                  {COMPANY_INFO.values}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Recognition */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Government Recognition
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Recognition from the Government of India for our contribution to the nation.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className={`${themeClasses.card} p-8 text-center`}>
              <div className="text-6xl mb-6">🏆</div>
              <h3 className={`text-2xl font-bold ${themeClasses.text.primary} mb-4`}>
                {COMPANY_INFO.recognition.ministry}
              </h3>
              <h4 className={`text-xl font-semibold ${themeClasses.text.primary} mb-4`}>
                {COMPANY_INFO.recognition.department}
              </h4>
              <div className={`text-lg ${themeClasses.text.accent} mb-4`}>
                {COMPANY_INFO.recognition.category}
              </div>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto`}>
                {COMPANY_INFO.recognition.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Services
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Comprehensive water treatment solutions for all your needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`${themeClasses.card} p-6 hover:shadow-xl transition-all duration-300 group`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className={`text-lg font-bold ${themeClasses.text.primary} mb-3`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm ${themeClasses.text.secondary} leading-relaxed`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Industries We Serve
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Our water treatment solutions serve a wide range of industries across India.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className={`${themeClasses.card} p-4 text-center hover:shadow-lg transition-all duration-300 group`}>
                  <span className={`text-sm font-medium ${themeClasses.text.primary} group-hover:text-blue-600 transition-colors duration-300`}>
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Contact Information
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                Get in touch with us for all your water treatment needs.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Head Office
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Address:</span>
                    <p className={`${themeClasses.text.secondary} mt-1`}>
                      {COMPANY_INFO.contact.address}
                    </p>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Alternative Address:</span>
                    <p className={`${themeClasses.text.secondary} mt-1`}>
                      {COMPANY_INFO.contact.addressSecondary}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${themeClasses.card} p-8`}>
                <h3 className={`text-xl font-bold ${themeClasses.text.primary} mb-4`}>
                  Contact Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Phone:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.contact.phone}</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Email:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.contact.email}</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Website:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.contact.website}</span>
                  </div>
                  <div>
                    <span className={`font-semibold ${themeClasses.text.primary}`}>Contact Person:</span>
                    <span className={`ml-2 ${themeClasses.text.secondary}`}>{COMPANY_INFO.contact.contactPerson}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text.primary} mb-6`}>
              Ready to Partner with Us?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Contact us today to discuss your water treatment requirements and get a customized solution that meets your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products"
                className={`${themeClasses.button.secondary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;