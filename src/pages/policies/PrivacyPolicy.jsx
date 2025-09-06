import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants/companyInfo';

const PrivacyPolicy = () => {
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
              Privacy <span className="text-gradient-primary">Policy</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                    1. Introduction
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {COMPANY_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    2. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        2.1 Personal Information
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                        <li>Fill out contact forms on our website</li>
                        <li>Request quotes or consultations</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us for customer support</li>
                        <li>Apply for employment opportunities</li>
                      </ul>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-2">
                        This information may include your name, email address, phone number, company name, and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        2.2 Automatically Collected Information
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        When you visit our website, we automatically collect certain information about your device, including:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                        <li>IP address and location data</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on each page</li>
                        <li>Referring website</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    3. How We Use Your Information
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and abuse</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    <li>With service providers who assist us in operating our website and providing services</li>
                    <li>To comply with legal requirements or protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    5. Data Security
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    6. Your Rights and Choices
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    7. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    8. Third-Party Links
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    9. Children's Privacy
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    10. Changes to This Privacy Policy
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    11. Contact Us
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
            Questions About Privacy?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            If you have any concerns about your privacy or need clarification on our policies, don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link to="/policies/terms-of-use" className="btn-outline border-white text-white hover:bg-white hover:text-blue-600">
              View Terms of Use
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
