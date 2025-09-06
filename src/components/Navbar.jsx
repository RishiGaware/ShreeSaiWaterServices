import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import logo from '../../public/logo.png';
import { companyPages, productPages, policyPages } from '../constants/companyInfo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMobileNavigation = () => {
    // Close mobile menu
    setIsOpen(false);
    setActiveDropdown(null);
    
    // Scroll to top of page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm border-b border-white/10 dark:border-gray-700/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group" onClick={handleMobileNavigation}>
              {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <span className="text-white font-bold text-lg sm:text-xl">S</span>
              </div> */}
              <img
                src={logo}
                alt="SSWS"
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 transform group-hover:scale-105 transition-all duration-300 drop-shadow-lg"
              />
              {/* <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">                SSWS
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                isActive('/') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              Home
            </Link>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('company')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center space-x-1 ${
                  activeDropdown === 'company' || companyPages.some(item => isActive(item.path))
                    ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span>Company</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 animate-fade-in-down">
                  {companyPages.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                        isActive(item.path)
                          ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('products')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center space-x-1 ${
                  activeDropdown === 'products' || productPages.some(item => isActive(item.path))
                    ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform duration-100 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 animate-fade-in-down">
                  {productPages.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                        isActive(item.path)
                          ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/gallery"
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                isActive('/gallery') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/blog"
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                isActive('/blog') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              Contact Us
            </Link>

            {/* Policies Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('policies')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center space-x-1 ${
                  activeDropdown === 'policies' || policyPages.some(item => isActive(item.path))
                    ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                <span>Policies</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'policies' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'policies' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 py-2 animate-fade-in-down">
                  {policyPages.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 ${
                        isActive(item.path)
                          ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 animate-fade-in-down mobile-nav-scrollable mobile-nav-container">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              onClick={handleMobileNavigation}
            >
              Home
            </Link>

            {/* Mobile Company Dropdown */}
            <div className="space-y-1">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                Company
              </div>
              {companyPages.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-8 py-2 text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-700 dark:text-blue-400'
                      : 'text-White-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Products Dropdown */}
            <div className="space-y-1">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                Products
              </div>
              {productPages.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-8 py-2 text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-700 dark:text-blue-400'
                      : 'text-White-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/gallery"
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                isActive('/gallery') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              onClick={handleMobileNavigation}
            >
              Gallery
            </Link>

            <Link
              to="/blog"
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              onClick={handleMobileNavigation}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`block px-4 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
              onClick={handleMobileNavigation}
            >
              Contact Us
            </Link>

            {/* Mobile Policies Dropdown */}
            <div className="space-y-1">
              <div className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                Policies
              </div>
              {policyPages.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-8 py-2 text-sm transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-700 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
