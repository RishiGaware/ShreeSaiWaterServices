import React from 'react';
import PageTemplate from '../../components/PageTemplate';

const AboutUs = () => {
  return (
    <PageTemplate
      title="About Shree Sai Water Services"
      description="Leading provider in water filtration industry with 20+ years of expertise in delivering high-quality solutions for clean and safe industrial water."
    >
      <div className="max-w-4xl mx-auto">
        {/* Company Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Introduction</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are Shree Sai Water Services, a leading provider in the water filtration industry dedicated to delivering high-quality solutions for clean and safe industrial water. We deal with supplies and servicing of water treatment plants like all types of filters, softener plants, De-mineralization (DM) plants, and Reverse Osmosis (RO) systems.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are supported by excellent dedicated service persons, well qualified, trained, and experienced in this field. Our commitment to excellence and customer satisfaction drives us to continuously innovate and provide effective water treatment solutions tailored to the unique requirements of each client.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>We have never compromised on the quality and the services provided to the customer.</strong>
            </p>
          </div>
        </section>

        {/* Experience & Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">20+ Years of Excellence</h3>
              <p className="text-gray-700 mb-4">
                With 20 years of expertise, Shree Sai Water Services has established itself as a trusted name known for innovation and reliability in water purification technologies.
              </p>
              <div className="text-4xl font-bold text-blue-600">20+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Team</h3>
              <p className="text-gray-700 mb-4">
                Our team consists of well-qualified, trained, and experienced professionals who are dedicated to providing the best water treatment solutions.
              </p>
              <div className="text-4xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Qualified Personnel</div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Deal In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sand Filtration Plant</h3>
              <p className="text-gray-600">High-efficiency sand filtration systems for removing suspended solids and impurities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Softener Plant</h3>
              <p className="text-gray-600">Advanced water softening systems to remove hardness and improve water quality.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ultra Filtration Plant</h3>
              <p className="text-gray-600">Advanced ultra-filtration systems for removing bacteria and microorganisms.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reverse Osmosis (RO)</h3>
              <p className="text-gray-600">State-of-the-art RO systems for producing high-purity water through membrane technology.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">DM Water Plant</h3>
              <p className="text-gray-600">De-mineralization plants for producing ultra-pure water by removing dissolved minerals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical Spares</h3>
              <p className="text-gray-600">Complete range of chemical spares and consumables for plant maintenance.</p>
            </div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology & Innovation</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our comprehensive range of products includes state-of-the-art filtration systems designed to meet the diverse needs of residential, commercial, and industrial clients. We offer a wide range of products and services, and we are confident in our ability to solve any challenges.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Water purification is a step-by-step process often requiring a combination of technologies. We, Shree Sai Water Services, provide you with the best water treatment systems by blending these technologies to suit your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Shree Sai Water Services, we prioritize sustainability and environmental responsibility, ensuring our systems not only meet regulatory standards but also contribute to a healthier planet.
            </p>
          </div>
        </section>

        {/* Commitment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-600">Never compromise on the quality of our products and services.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Continuously innovate and provide effective water treatment solutions.</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">Tailored solutions for the unique requirements of each client.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-6">
            We would welcome the opportunity to discuss how Shree Sai Water Services can contribute to your company's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us Today
            </a>
            <a href="tel:+919850813593" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call: +91 9850813593
            </a>
        </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default AboutUs;
