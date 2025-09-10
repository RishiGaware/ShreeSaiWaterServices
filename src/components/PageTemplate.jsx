import React from 'react';
import { getThemeClasses } from '../theme/themeUtils';

const PageTemplate = ({ title, description, children }) => {
  const themeClasses = getThemeClasses;

  return (
    <div className={`${getThemeClasses.background.primary} transition-colors duration-200`}>

      {/* Page Header */}
      <div className={`${themeClasses.background.gradient} py-16 sm:py-20 lg:py-24`}>
          <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${getThemeClasses.text.primary}`}>
            {title}
          </h1>
          <p className={`text-xl ${getThemeClasses.text.secondary} max-w-3xl mx-auto`}>
            {description}
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className={`${getThemeClasses.background.primary} transition-colors duration-200 mt-16`}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
