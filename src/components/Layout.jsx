import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getThemeClasses } from '../theme/themeUtils';

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen ${getThemeClasses.background.primary} transition-colors duration-200`}>
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
