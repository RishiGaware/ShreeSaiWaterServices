import PageTemplate from '../../components/PageTemplate';

const Vendor = () => {
  const vendorCategories = [
    {
      name: 'Raw Materials',
      description: 'High-quality materials for water treatment systems',
      requirements: ['ISO 9001 certified', 'Sustainable sourcing', 'Quality documentation', 'On-time delivery'],
      icon: '🏭'
    },
    {
      name: 'Electronic Components',
      description: 'Reliable electronic parts for automation systems',
      requirements: ['RoHS compliant', 'Long-term availability', 'Technical support', 'Warranty coverage'],
      icon: '⚡'
    },
    {
      name: 'Mechanical Parts',
      description: 'Durable mechanical components for equipment',
      requirements: ['Corrosion resistant', 'High durability', 'Precision engineering', 'Cost competitive'],
      icon: '🔧'
    },
    {
      name: 'Packaging Materials',
      description: 'Eco-friendly packaging solutions',
      requirements: ['Recyclable materials', 'Minimal waste', 'Protective design', 'Sustainable options'],
      icon: '📦'
    }
  ];

  const partnershipBenefits = [
    'Long-term business relationships',
    'Priority order processing',
    'Joint development opportunities',
    'Volume pricing discounts',
    'Technical collaboration',
    'Market expansion support'
  ];

  return (
    <PageTemplate
      title="Vendor Information"
      description="Information for vendors and suppliers working with SSWS."
    >
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Partner With SSWS</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We value strong partnerships with suppliers who share our commitment to quality, 
            sustainability, and innovation. Join our network of trusted vendors and help us 
            deliver exceptional water treatment solutions worldwide.
          </p>
        </div>

        {/* Vendor Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">What We're Looking For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorCategories.map((category, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Requirements:</h5>
                  <ul className="space-y-2">
                    {category.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-4 h-4 text-corporate-blue dark:text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-2xl mb-3">✅</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">General Vendor Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quality Standards</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• ISO 9001:2015 certification</li>
                <li>• Consistent product quality</li>
                <li>• Quality control procedures</li>
                <li>• Regular quality audits</li>
                <li>• Corrective action processes</li>
              </ul>
            </div>
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Business Requirements</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Financial stability</li>
                <li>• Insurance coverage</li>
                <li>• Compliance with regulations</li>
                <li>• Environmental responsibility</li>
                <li>• Ethical business practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">How to Become a Vendor</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Initial Contact</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Reach out to our procurement team</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Submit required documents</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Evaluation</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">We review your capabilities</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-corporate-blue dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Partnership</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Begin our collaboration</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="gradient-blue rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you meet our requirements and are interested in becoming a vendor, 
            please contact our procurement team to start the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-corporate-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Procurement
            </a>
            <a 
              href="mailto:procurement@ssws.com" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-corporate-blue transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Vendor;
