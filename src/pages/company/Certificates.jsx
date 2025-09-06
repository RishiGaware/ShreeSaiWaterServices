import React from 'react';
import { getThemeClasses } from '../../theme/themeUtils';
import { COMPANY_INFO } from '../../constants/companyInfo';
import Certificate1 from '../../../public/certificates/certificate1.png';
import Certificate2 from '../../../public/certificates/certificate2.png';

const Certificates = () => {
  const themeClasses = getThemeClasses;

  const certificates = [
    {
      id: 1,
      name: 'Quality Certification',
      description: 'Professional certification demonstrating our commitment to quality and excellence in water treatment solutions.',
      issuedBy: 'Certification Authority',
      validUntil: '2025-12-31',
      image: Certificate1,
      category: 'Quality Certification'
    },
    {
      id: 2,
      name: 'Industry Recognition',
      description: 'Industry recognition for our expertise and compliance with international standards in water treatment technology.',
      issuedBy: 'Industry Standards Board',
      validUntil: '2025-12-31',
      image: Certificate2,
      category: 'Industry Recognition'
    },
    // {
    //   id: 3,
    //   name: 'GST Certificate of Appreciation 2021',
    //   description: 'Government recognition for our contribution to the economy and compliance with tax regulations.',
    //   issuedBy: 'Government of India',
    //   validUntil: 'Ongoing',
    //   image: '/GST CERTIFICATE OF APPRECIATION 2021.pdf',
    //   category: 'Government Recognition',
    //   isPdf: true
    // }
  ];

  const categories = ['All', 'Quality Certification', 'Industry Recognition', 'Government Recognition'];

  return (
    <div className={`min-h-screen ${themeClasses.background.primary} ${themeClasses.text.primary}`}>
      {/* Hero Section */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.text.primary} mb-6`}>
              Certificates & Accreditations
            </h1>
            <p className={`text-lg sm:text-xl ${themeClasses.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              Our commitment to quality, safety, and environmental responsibility is validated through internationally recognized certifications and accreditations.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-6`}>
                Why Certifications Matter
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-4xl mx-auto leading-relaxed`}>
                Our certifications demonstrate our commitment to maintaining the highest standards in quality management, 
                environmental responsibility, and workplace safety. These accreditations assure our clients that we operate 
                according to internationally recognized best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`${themeClasses.card} p-6 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text.primary}`}>Quality Assurance</h3>
                <p className={themeClasses.text.secondary}>Consistent delivery of high-quality solutions</p>
              </div>
              <div className={`${themeClasses.card} p-6 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text.primary}`}>Environmental Responsibility</h3>
                <p className={themeClasses.text.secondary}>Sustainable practices and eco-friendly solutions</p>
              </div>
              <div className={`${themeClasses.card} p-6 text-center hover:shadow-xl transition-all duration-300 group`}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text.primary}`}>Safety First</h3>
                <p className={themeClasses.text.secondary}>Protecting our people and communities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className={`py-16 sm:py-20 ${themeClasses.background.secondary}`}>
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${themeClasses.text.primary} mb-4`}>
                Our Certifications
              </h2>
              <p className={`text-lg ${themeClasses.text.secondary} max-w-3xl mx-auto`}>
                {COMPANY_INFO.shortName} is proud to hold various certifications that demonstrate our commitment to excellence and compliance with industry standards.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div key={cert.id} className={`${themeClasses.card} overflow-hidden hover:shadow-xl transition-all duration-300 group`}>
                  <div className="relative">
                    {cert.isPdf ? (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400">PDF Certificate</p> */}
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    )}
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 hidden items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Certificate Image</p> */}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${themeClasses.text.primary}`}>
                      {cert.name}
                    </h3>
                    <p className={`mb-4 ${themeClasses.text.secondary}`}>
                      {cert.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={themeClasses.text.tertiary}>Issued by:</span>
                        <span className={themeClasses.text.secondary}>{cert.issuedBy}</span>
                      </div>
                      <div className="flex justify-between">
                        {/* <span className={themeClasses.text.tertiary}>Valid until:</span> */}
                        {/* <span className={themeClasses.text.secondary}>
                          {cert.validUntil}
                        </span> */}
                      </div>
                    </div>
                    {/* {cert.isPdf && (
                      <div className="mt-4">
                        <a
                          href={cert.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${themeClasses.button.primary} w-full text-center inline-block py-2 px-4 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105`}
                        >
                          View PDF Certificate
                          <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )} */}
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
              Ready to Work with a Certified Partner?
            </h2>
            <p className={`text-lg ${themeClasses.text.secondary} mb-8 leading-relaxed`}>
              Our certifications demonstrate our commitment to excellence. 
              Let's discuss how we can help you achieve your water treatment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className={`${themeClasses.button.primary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Get a Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/about"
                className={`${themeClasses.button.secondary} inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;