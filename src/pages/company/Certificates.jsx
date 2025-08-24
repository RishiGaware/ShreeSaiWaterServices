import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import { getThemeClasses } from '../../theme/themeUtils';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      issuedBy: 'International Organization for Standardization',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop',
      category: 'Quality Management'
    },
    {
      id: 2,
      name: 'ISO 14001:2015',
      description: 'Environmental Management System Certification',
      issuedBy: 'International Organization for Standardization',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
      category: 'Environmental Management'
    },
    {
      id: 3,
      name: 'OHSAS 18001:2007',
      description: 'Occupational Health and Safety Management',
      issuedBy: 'British Standards Institution',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop',
      category: 'Health & Safety'
    },
    {
      id: 4,
      name: 'CE Marking',
      description: 'European Conformity for Water Treatment Equipment',
      issuedBy: 'European Union',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Product Safety'
    },
    {
      id: 5,
      name: 'NSF/ANSI 61',
      description: 'Drinking Water System Components Certification',
      issuedBy: 'NSF International',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Water Safety'
    },
    {
      id: 6,
      name: 'WRAS Approval',
      description: 'Water Regulations Advisory Scheme Approval',
      issuedBy: 'WRAS Ltd',
      validUntil: '2025-12-31',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Water Regulations'
    }
  ];

  const categories = ['All', 'Quality Management', 'Environmental Management', 'Health & Safety', 'Product Safety', 'Water Safety', 'Water Regulations'];

  return (
    <PageTemplate
      title="Certificates & Accreditations"
      description="Our commitment to quality, safety, and environmental responsibility is validated through internationally recognized certifications and accreditations."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Certificates & Accreditations
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Demonstrating our commitment to excellence through internationally recognized standards
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Why Certifications Matter
            </h2>
            <p className={`text-lg ${getThemeClasses.text.secondary} mb-8`}>
              Our certifications demonstrate our commitment to maintaining the highest standards in quality management, 
              environmental responsibility, and workplace safety. These accreditations assure our clients that we operate 
              according to internationally recognized best practices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${getThemeClasses.card} p-6 text-center`}>
                <div className="text-4xl mb-4">🏆</div>
                <h3 className={`text-xl font-semibold mb-2 ${getThemeClasses.text.primary}`}>Quality Assurance</h3>
                <p className={getThemeClasses.text.secondary}>Consistent delivery of high-quality solutions</p>
              </div>
              <div className={`${getThemeClasses.card} p-6 text-center`}>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className={`text-xl font-semibold mb-2 ${getThemeClasses.text.primary}`}>Environmental Responsibility</h3>
                <p className={getThemeClasses.text.secondary}>Sustainable practices and eco-friendly solutions</p>
              </div>
              <div className={`${getThemeClasses.card} p-6 text-center`}>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className={`text-xl font-semibold mb-2 ${getThemeClasses.text.primary}`}>Safety First</h3>
                <p className={getThemeClasses.text.secondary}>Protecting our people and communities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${getThemeClasses.text.primary}`}>
              Our Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div key={cert.id} className={`${getThemeClasses.card} overflow-hidden`}>
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${getThemeClasses.text.primary}`}>
                      {cert.name}
                    </h3>
                    <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
                      {cert.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className={getThemeClasses.text.tertiary}>Issued by:</span>
                        <span className={getThemeClasses.text.secondary}>{cert.issuedBy}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className={getThemeClasses.text.tertiary}>Valid until:</span>
                        <span className={getThemeClasses.text.secondary}>
                          {new Date(cert.validUntil).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Ready to Work with a Certified Partner?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              Our certifications demonstrate our commitment to excellence. 
              Let's discuss how we can help you achieve your water treatment goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Get a Quote
              </button>
              <button className={getThemeClasses.button.secondary}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Certificates;
