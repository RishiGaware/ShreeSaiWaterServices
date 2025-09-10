import PageTemplate from '../../components/PageTemplate';

const Infrastructure = () => {
  const manufacturingFacilities = [
    {
      name: 'Main Manufacturing Facility',
      description: 'Spanning over 20,000 sq. ft., our state-of-the-art manufacturing facility is designed to support the production of a wide range of water treatment solutions, including RO, UF, Sand Filters, Water Softeners, DM Plants, and related components.',
      features: [
        '20,000+ sq ft production area',
        'Modern machinery and precision fabrication units',
        'Advanced testing laboratories',
        'Dedicated design and development areas',
        'Assembly and quality control zones',
        'Efficient storage and logistics'
      ]
    },
    {
      name: 'Chemical Manufacturing Unit',
      description: 'In addition to our water treatment equipment, we manufacture a range of high-quality consumable chemicals for the water treatment industry.',
      features: [
        'Coagulants production',
        'Disinfectants manufacturing',
        'Antiscalants formulation',
        'pH adjusters production',
        'Specialty chemicals development',
        'Strict quality control measures'
      ]
    },
    {
      name: 'Research & Development Center',
      description: 'Cutting-edge R&D facility dedicated to innovation in water treatment technology and chemical formulation.',
      features: [
        'Modern laboratories',
        'Chemical testing facilities',
        'Innovation hub',
        'Collaboration spaces',
        'Product development labs',
        'Quality assurance testing'
      ]
    }
  ];

  const productRange = [
    'Reverse Osmosis (RO) Systems',
    'Ultra Filtration (UF) Plants',
    'Sand Filter Systems',
    'Water Softeners',
    'Demineralization (DM) Plants',
    'Water Treatment Chemicals'
  ];

  const chemicalProducts = [
    'Cooling Water Biocides',
    'Cooling Water Antiscalants',
    'Mould Tube Chemicals',
    'RO Antiscalants',
    'Scale Prevention Chemicals',
    'Corrosion Inhibitors'
  ];

  const detailedChemicals = [
    {
      category: 'Cooling Water Biocides',
      products: [
        {
          name: 'SSWS-602',
          description: 'Specially manufactured for ionizing scale depositing substances like Calcium, Magnesium. Works as prevention from scale & corrosion. Dosing on daily basis on quantity of water present in tank & make up water.'
        },
        {
          name: 'SSWS-605',
          description: 'Special design chemical for algae & slime. Reduces growth of micro organism present in water which responsible for aerobic & anaerobic oxidation which causes chock-ups & formation of algae. Dosing once in a week as shock treatment.'
        }
      ]
    },
    {
      category: 'Cooling Water Antiscalant',
      products: [
        {
          name: 'SSWS-202',
          description: 'Cooling tower normally put in open atmosphere which contains dust particles. It can stick on cooling towers easily & causes scaling. This chemical works as settle down these dust particles as well as it works as a corrosion inhibitor. It does not allow corrode metal parts. Dosing maintaining pH on daily basis.'
        }
      ]
    },
    {
      category: 'Mould Tube',
      products: [
        {
          name: 'SSWS-23862',
          description: 'Utilizing SSWS 23862 helps prevent black coating formation on mould tubes, thereby enhancing heat transfer efficiency and extending equipment lifespan.'
        }
      ]
    },
    {
      category: 'RO Antiscalant',
      products: [
        {
          name: 'RO ANTISCLANT 111',
          description: 'Antiscalant 111 prevents scale formation heavy metals such as Calcium Magnesium Silica Sulphate etc. Extends membrane life, reduces maintenance costs, ensures compatibility with a wide range of feed waters and minimizes system downtime delivering reliable and efficient performance.'
        }
      ]
    }
  ];

  return (
    <PageTemplate
      title="Infrastructure"
      description="Explore our world-class facilities and cutting-edge infrastructure."
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 mb-12 sm:mb-16 lg:mb-20">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-36 translate-x-36 sm:-translate-y-48 sm:translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-32 -translate-x-32 sm:translate-y-40 sm:-translate-x-40"></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          <div className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16">
            <div className="text-center max-w-5xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 animate-pulse">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Our Manufacturing Infrastructure
              </h2>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 px-4">
                State-of-the-art facilities designed to support innovation, quality, and sustainable production
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    20,000+ Sq Ft Facility
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ISO Certified
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-white font-semibold text-sm sm:text-base hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Quality Assured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Manufacturing Facilities
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our infrastructure is designed to support comprehensive manufacturing capabilities
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {manufacturingFacilities.map((facility, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 opacity-50"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {facility.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Range Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Product Range
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our manufacturing facility is equipped to produce a comprehensive range of water treatment solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productRange.map((product, index) => (
                <div key={index} className="group flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/50">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {product}
                  </span>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Chemical Manufacturing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Chemical Manufacturing
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
              Our portfolio includes key water treatment chemicals to meet industry standards and enhance the efficiency of water treatment systems.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              In addition to our water treatment equipment, we manufacture a range of high-quality consumable chemicals 
              for the water treatment industry. Produced under strict quality control measures, our chemicals meet industry 
              standards and are formulated to optimize the performance of water treatment systems.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* Chemical Categories Overview */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chemicalProducts.map((chemical, index) => (
                <div key={index} className="group flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 border border-purple-200 dark:border-gray-600">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {chemical}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Chemical Products */}
          <div className="space-y-8">
            {detailedChemicals.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-600"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {category.category}
                    </h4>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="group/product relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 hover:from-purple-50 hover:to-pink-50 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-10 translate-x-10"></div>
                        <div className="relative">
                          <h5 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3 group-hover/product:text-purple-700 dark:group-hover/product:text-purple-300 transition-colors duration-300">
                            {product.name}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Excellence Section */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 mb-12 sm:mb-16 lg:mb-20">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-black/30"></div>
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32 sm:-translate-y-40 sm:translate-x-40 lg:-translate-y-48 lg:translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-28 -translate-x-28 sm:translate-y-36 sm:-translate-x-36 lg:translate-y-40 lg:-translate-x-40"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          
          <div className="relative px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16">
            <div className="text-center max-w-5xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 animate-pulse">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              {/* Main Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                Manufacturing Excellence
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto px-4">
                With a focus on efficiency, safety, and sustainability, our infrastructure enables us to handle 
                large-scale production while maintaining strict adherence to industry standards. This commitment 
                to excellence ensures that we consistently deliver reliable, durable, and high-performance water 
                treatment solutions to our clients.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div className="group text-center p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      20,000+
                    </div>
                    <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                  <div className="text-blue-100 font-semibold text-sm sm:text-base">Sq Ft Facility</div>
                </div>
                
                <div className="group text-center p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      100%
                    </div>
                    <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                  <div className="text-blue-100 font-semibold text-sm sm:text-base">Quality Control</div>
                </div>
                
                <div className="group text-center p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      ISO
                    </div>
                    <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                  <div className="text-blue-100 font-semibold text-sm sm:text-base">Certified</div>
                </div>
                
                <div className="group text-center p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-all duration-300">
                  <div className="relative mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <div className="w-12 sm:w-16 h-1 bg-white/30 mx-auto rounded-full"></div>
                  </div>
                  <div className="text-blue-100 font-semibold text-sm sm:text-base">Production</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Infrastructure;
