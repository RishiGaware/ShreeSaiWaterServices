import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants/companyInfo';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/5 to-purple-400/5"></div>
        </div>

        <div className="container-custom relative z-10 py-16 sm:py-20 md:py-24">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              Terms of <span className="text-gradient-primary">Use</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Use Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    By accessing and using the {COMPANY_INFO.name} website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Use License
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      Permission is granted to temporarily download one copy of the materials (information or software) on {COMPANY_INFO.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                      <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    3. Disclaimer
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    The materials on {COMPANY_INFO.name}'s website are provided on an 'as is' basis. {COMPANY_INFO.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Limitations
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    In no event shall {COMPANY_INFO.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {COMPANY_INFO.name}'s website, even if {COMPANY_INFO.name} or a {COMPANY_INFO.name} authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Accuracy of Materials
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    The materials appearing on {COMPANY_INFO.name}'s website could include technical, typographical, or photographic errors. {COMPANY_INFO.name} does not warrant that any of the materials on its website are accurate, complete, or current. {COMPANY_INFO.name} may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Links
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {COMPANY_INFO.name} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by {COMPANY_INFO.name} of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Modifications
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {COMPANY_INFO.name} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    9. User Conduct
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    When using our website and services, you agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of our website</li>
                    <li>Use our services for any illegal or unauthorized purpose</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    10. Intellectual Property
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    The content, design, graphics, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication of any such content is strictly prohibited without the express written permission of {COMPANY_INFO.name}.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    11. Service Availability
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We strive to maintain the availability of our website and services, but we do not guarantee that they will be available at all times. We may suspend or discontinue any part of our services at any time without notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    12. Contact Information
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    If you have any questions about these Terms of Use, please contact us at:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                      <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{COMPANY_INFO.contact.email}</a><br />
                      <strong>Phone:</strong> <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">{COMPANY_INFO.contact.phone}</a><br />
                      <strong>Address:</strong> {COMPANY_INFO.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Questions About Terms?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            If you need clarification on any of our terms or have questions about our policies, please don't hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/policies/privacy-policy" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
