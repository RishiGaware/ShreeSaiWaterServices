import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat pt-0" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60 backdrop-blur-sm"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>

        {/* Content Container */}
        <div className="container-custom relative z-10 text-center">
          {/* Logo Section */}
          <div className="mb-6 sm:mb-8 animate-fade-in-down">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <div className="text-center">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                SSWS
              </span>
            </div>
          </div>

          {/* Main Heading with Enhanced Typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-tight animate-fade-in-up delay-200 drop-shadow-2xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Shree Sai Water Services
          </h1>

          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 animate-fade-in-up delay-400">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed font-medium drop-shadow-lg bg-black/20 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
              Leading provider in water filtration industry with <span className="text-blue-300 font-semibold">20+ years of expertise</span> in delivering <span className="text-purple-300 font-semibold">high-quality solutions</span> for clean and safe industrial water
            </p>
          </div>

          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up delay-600">
            <Link to="/contact" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl border-2 border-blue-400/30 hover:border-blue-300/50">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Free Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link to="/products/water-treatment" className="group relative overflow-hidden bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Our Solutions
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 animate-fade-in-up delay-800">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">20+ Years Experience</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">24/7 Support</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
                Your Trusted Water Treatment Partner
            </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed font-normal">
                With 20 years of expertise, Shree Sai Water Services has established itself as a trusted name known for innovation and reliability in water purification technologies.
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed font-normal">
                We are supported by excellent dedicated service persons, well qualified, trained, and experienced in this field. Our commitment to excellence and customer satisfaction drives us to continuously innovate and provide effective water treatment solutions tailored to the unique requirements of each client.
              </p>
              <Link to="/company/about-us" className="btn-primary text-sm px-4 sm:px-6 py-2 sm:py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-xl inline-block font-semibold tracking-wide">
                Learn More About Us
                </Link>
              </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-4 sm:p-6 rounded-xl animate-fade-in-right hover:shadow-xl transition-shadow duration-300 border border-blue-200/50 dark:border-gray-600/50">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight tracking-tight">Why Choose Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  20+ Years of Industry Experience
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Qualified & Trained Service Personnel
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Never Compromise on Quality
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  Sustainable & Environmentally Responsible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
              Our Comprehensive Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              We deal in complete water treatment systems designed to meet the diverse needs of residential, commercial, and industrial clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-100 border border-blue-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">Sand Filtration Plant</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                High-efficiency sand filtration systems for removing suspended solids and impurities from water.
              </p>
              <Link to="/products/water-treatment" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-200 border border-purple-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">Softener Plant</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                Advanced water softening systems to remove hardness and improve water quality for industrial applications.
              </p>
              <Link to="/products/water-treatment" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-300 border border-green-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">Reverse Osmosis (RO)</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                State-of-the-art RO systems for producing high-purity water through advanced membrane technology.
              </p>
              <Link to="/products/water-treatment" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-400 border border-red-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">DM Water Plant</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                De-mineralization plants for producing ultra-pure water by removing all dissolved minerals and salts.
              </p>
              <Link to="/products/water-treatment" className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-500 border border-yellow-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">Ultra Filtration Plant</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                Advanced ultra-filtration systems for removing bacteria, viruses, and other microorganisms from water.
              </p>
              <Link to="/products/water-treatment" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
                </div>

            <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up delay-600 border border-indigo-100 dark:border-gray-700">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">Chemical Spares</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed font-normal">
                Complete range of chemical spares and consumables for water treatment plant maintenance and operation.
              </p>
              <Link to="/products/services" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold text-xs sm:text-sm transition-colors duration-200 inline-flex items-center group">
                Learn More 
                <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight">
            Ready to Get Started?
          </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
              Contact us today for a free consultation and discover how our water treatment solutions can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
              <Link to="/contact" className="btn-secondary text-xs px-3 sm:px-4 py-1.5 sm:py-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg inline-block font-medium tracking-wide">
                Get Free Consultation
            </Link>
              <Link to="/products/water-treatment" className="btn-outline text-xs px-3 sm:px-4 py-1.5 sm:py-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg inline-block font-medium tracking-wide">
                Our Solutions
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Test Section */}
      <section className="section-padding bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="container-custom">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900 dark:text-white animate-fade-in-up leading-tight tracking-tight">
            Dark Mode Test Section
          </h2>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-100 border border-blue-100 dark:border-blue-800">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white leading-tight tracking-tight">Light Card</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">This card should change appearance in dark mode.</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-200 border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-blue-900 dark:text-blue-100 leading-tight tracking-tight">Blue Card</h3>
              <p className="text-sm sm:text-base md:text-lg text-blue-700 dark:text-blue-200 leading-relaxed font-normal">This card should also adapt to dark mode.</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up delay-300 border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-purple-900 dark:text-purple-100 leading-tight tracking-tight">Purple Card</h3>
              <p className="text-sm sm:text-base md:text-lg text-purple-700 dark:text-purple-200 leading-relaxed font-normal">This card should also adapt to dark mode.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
