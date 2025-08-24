import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { getThemeClasses } from '../theme/themeUtils';

const TermsOfUse = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this website, you accept and agree to be bound by these Terms of Use',
        'If you do not agree to these terms, please do not use our website or services',
        'We reserve the right to modify these terms at any time without prior notice',
        'Continued use of the website after changes constitutes acceptance of the new terms'
      ]
    },
    {
      title: 'Use of Website',
      content: [
        'You may use our website for lawful purposes only and in accordance with these Terms',
        'You agree not to use the website in any way that violates applicable laws or regulations',
        'You must not attempt to gain unauthorized access to any part of the website',
        'You are responsible for maintaining the confidentiality of your account information'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content on this website is owned by SSWS and protected by copyright laws',
        'You may not reproduce, distribute, or create derivative works without permission',
        'Trademarks and logos are the property of their respective owners',
        'Unauthorized use may result in legal action'
      ]
    },
    {
      title: 'User Content',
      content: [
        'You retain ownership of any content you submit to our website',
        'By submitting content, you grant us a license to use and display it',
        'You are responsible for ensuring your content does not infringe on others\' rights',
        'We reserve the right to remove content that violates our policies'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      content: [
        'Your privacy is important to us. Please review our Privacy Policy',
        'We collect and process personal data in accordance with applicable laws',
        'You have rights regarding your personal data as outlined in our Privacy Policy',
        'We implement appropriate security measures to protect your information'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'SSWS is not liable for any indirect, incidental, or consequential damages',
        'Our liability is limited to the amount you paid for our services',
        'We do not guarantee the website will be error-free or uninterrupted',
        'You use the website at your own risk'
      ]
    }
  ];

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems',
    'Transmitting viruses, malware, or other harmful code',
    'Interfering with the website\'s functionality or performance',
    'Collecting personal information from other users without consent',
    'Engaging in any form of harassment or abusive behavior',
    'Violating any applicable laws or regulations'
  ];

  const contactInfo = {
    email: 'legal@ssws.com',
    phone: '+1 (555) 123-4567',
    address: '123 Water Treatment Way, Mumbai, Maharashtra 400001, India'
  };

  return (
    <PageTemplate
      title="Terms of Use"
      description="Please read these terms carefully before using our website and services. By using our site, you agree to these terms and conditions."
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`${getThemeClasses.hero} rounded-2xl mb-16`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Use
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Important information about using our website and services
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
              These terms are effective as of the date above and apply to all users of our website and services.
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
              Welcome to SSWS (Sustainable Water Solutions). These Terms of Use govern your use of our 
              website and services. By accessing or using our website, you agree to be bound by these terms.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              These terms apply to all visitors, users, and others who access or use our website. 
              If you disagree with any part of these terms, you may not access our website or services.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
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

        {/* Prohibited Activities */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Prohibited Activities
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              When using our website, you agree not to engage in any of the following activities:
            </p>
            <div className={`${getThemeClasses.card} p-6`}>
              <ul className="space-y-2">
                {prohibitedActivities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span className={getThemeClasses.text.secondary}>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className={`mt-4 text-sm ${getThemeClasses.text.tertiary}`}>
              Violation of these terms may result in termination of your access to our website and services.
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Disclaimers
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.primary}`}>
                  Information Accuracy
                </h3>
                <p className={getThemeClasses.text.secondary}>
                  While we strive to provide accurate and up-to-date information, we make no warranties 
                  about the completeness, reliability, or accuracy of the content on our website.
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.primary}`}>
                  Service Availability
                </h3>
                <p className={getThemeClasses.text.secondary}>
                  We do not guarantee that our website or services will be available at all times. 
                  We may suspend or discontinue the website temporarily or permanently.
                </p>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-2 ${getThemeClasses.text.primary}`}>
                  Third-Party Links
                </h3>
                <p className={getThemeClasses.text.secondary}>
                  Our website may contain links to third-party websites. We are not responsible for 
                  the content or privacy practices of these external sites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Termination
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              We may terminate or suspend your access to our website immediately, without prior notice 
              or liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              Upon termination, your right to use the website will cease immediately. If you wish to 
              terminate your account, you may simply discontinue using the website.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Governing Law
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              These Terms shall be interpreted and governed by the laws of India, without regard to 
              its conflict of law provisions.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              Any disputes arising from these Terms or your use of our website will be subject to 
              the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Changes to Terms
            </h2>
            <p className={`mb-4 ${getThemeClasses.text.secondary}`}>
              We reserve the right to modify or replace these Terms at any time. If a revision is 
              material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className={`${getThemeClasses.text.secondary}`}>
              What constitutes a material change will be determined at our sole discretion. By continuing 
              to access or use our website after any revisions become effective, you agree to be bound 
              by the revised terms.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Contact Information
            </h2>
            <p className={`mb-6 ${getThemeClasses.text.secondary}`}>
              If you have any questions about these Terms of Use, please contact us:
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

        {/* Severability */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.gray} mb-8`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-2xl font-bold mb-4 ${getThemeClasses.text.primary}`}>
              Severability
            </h2>
            <p className={`${getThemeClasses.text.secondary}`}>
              If any provision of these Terms is held to be unenforceable or invalid, such provision 
              will be changed and interpreted to accomplish the objectives of such provision to the 
              greatest extent possible under applicable law, and the remaining provisions will continue 
              in full force and effect.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${getThemeClasses.section.padding} ${getThemeClasses.section.background.light} text-center`}>
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-2xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
              Questions About These Terms?
            </h2>
            <p className={`text-lg mb-8 ${getThemeClasses.text.secondary}`}>
              We're here to help clarify any questions you may have about our Terms of Use. 
              Don't hesitate to reach out to our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={getThemeClasses.button.primary}>
                Contact Legal Team
              </button>
              <button className={getThemeClasses.button.secondary}>
                Download Terms PDF
              </button>
              <button className={getThemeClasses.button.success}>
                Request Clarification
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default TermsOfUse;
