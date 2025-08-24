import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { getThemeClasses } from '../theme/themeUtils';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number) when you contact us or request a quote',
        'Company information for business inquiries and project proposals',
        'Website usage data through cookies and analytics tools',
        'Technical information about your device and browser',
        'Communication records when you interact with our team'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide water treatment solutions and services',
        'To communicate with you about projects and inquiries',
        'To improve our website and user experience',
        'To send relevant industry updates and newsletters (with consent)',
        'To comply with legal and regulatory requirements'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with trusted partners for project execution',
        'We may disclose information if required by law or to protect our rights',
        'Aggregated, non-personal data may be used for business analytics'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates are conducted',
        'Data is encrypted during transmission and storage'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request corrections to inaccurate data',
        'Request deletion of your personal information',
        'Opt-out of marketing communications',
        'Withdraw consent for data processing'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve website functionality and user experience',
        'Analytics cookies help us understand how visitors use our site',
        'You can control cookie settings through your browser preferences',
        'Third-party services may use cookies for analytics and advertising'
      ]
    }
  ];

  const contactInfo = {
    email: 'privacy@ssws.com',
    phone: '+1 (555) 123-4567',
    address: '123 Water Treatment Way, Mumbai, Maharashtra 400001, India'
  };

  return (
    <PageTemplate
      title="Privacy Policy"
      description="Learn how we collect, use, and protect your personal information in accordance with privacy laws and best practices."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect your information.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="text-center">
            <p className={`text-lg ${getThemeClasses.text.secondary}`}>
              <strong>Last Updated:</strong> January 15, 2024
            </p>
            <p className={`text-sm ${getThemeClasses.text.tertiary} mt-2`}>
              This policy is effective as of the date above and applies to all users of our website and services.
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Introduction
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              At SSWS (Sustainable Water Solutions), we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              By using our website and services, you consent to the collection and use of information in 
              accordance with this policy. If you do not agree with our policies and practices, please do 
              not use our services.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div key={index} className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light}`}>
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className={getThemeClasses.text.secondary}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Data Retention */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Data Retention
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              When we no longer need your personal information, we will securely delete or anonymize it. 
              If you request deletion of your information, we will process your request within 30 days.
            </p>
          </div>
        </div>

        {/* International Transfers */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              International Data Transfers
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and that your 
              information receives adequate protection.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              By using our services, you consent to the transfer of your information to countries 
              where we operate, including India and other international locations.
            </p>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Children's Privacy
            </h2>
            <p className={`${getThemeClasses.text.secondary}`}>
              Our services are not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us 
              immediately.
            </p>
          </div>
        </div>

        {/* Changes to Policy */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Changes to This Privacy Policy
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              We will notify you of any material changes by posting the new Privacy Policy on this page 
              and updating the "Last Updated" date. We encourage you to review this policy periodically 
              to stay informed about how we protect your information.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Contact Us
            </h2>
            <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={`${getThemeClasses.card} p-6`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <h3 className={`font-semibold mb-2 ${getThemeClasses.text.primary}`}>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className={`${getThemeClasses.text.brand} hover:underline`}>
                    {contactInfo.email}
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <h3 className={`font-semibold mb-2 ${getThemeClasses.text.primary}`}>Phone</h3>
                  <a href={`tel:${contactInfo.phone}`} className={`${getThemeClasses.text.brand} hover:underline`}>
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <h3 className={`font-semibold mb-2 ${getThemeClasses.text.primary}`}>Address</h3>
                  <p className={`text-sm ${getThemeClasses.text.secondary}`}>
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Basis */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Legal Basis for Processing
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              We process your personal information based on the following legal grounds:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className={getThemeClasses.text.secondary}>
                  <strong>Consent:</strong> When you explicitly agree to the processing of your data
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className={getThemeClasses.text.secondary}>
                  <strong>Contract:</strong> To fulfill our contractual obligations to you
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className={getThemeClasses.text.secondary}>
                  <strong>Legitimate Interest:</strong> To provide and improve our services
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className={getThemeClasses.text.secondary}>
                  <strong>Legal Obligation:</strong> To comply with applicable laws and regulations
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Questions About Your Privacy?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              We're committed to transparency and protecting your rights. If you have any concerns 
              about your privacy or need to exercise your data rights, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Contact Privacy Team
              </button>
              <button className={getThemeClasses.button.secondary}>
                Request Data Report
              </button>
              <button className={getThemeClasses.button.success}>
                Update Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicy;
