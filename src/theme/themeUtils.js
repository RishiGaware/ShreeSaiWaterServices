import { colors, generateDarkModeColors } from './colors';

// Utility functions for theme management

// Get color with theme awareness
export const getColor = (colorPath, isDark = false) => {
  const path = colorPath.split('.');
  let current = isDark ? generateDarkModeColors() : colors;
  
  for (const key of path) {
    if (current[key]) {
      current = current[key];
    } else {
      console.warn(`Color path not found: ${colorPath}`);
      return '#000000';
    }
  }
  
  return current;
};

// Get TailwindCSS classes for common patterns
export const getThemeClasses = {
  // Background classes
  background: {
    primary: 'bg-white dark:bg-gray-900',
    secondary: 'bg-gray-50 dark:bg-gray-800',
    tertiary: 'bg-gray-100 dark:bg-gray-700',
    card: 'bg-white dark:bg-gray-800',
    navbar: 'bg-white dark:bg-gray-900',
    footer: 'bg-gray-900 dark:bg-black',
  },
  
  // Text classes
  text: {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    tertiary: 'text-gray-500 dark:text-gray-400',
    muted: 'text-gray-400 dark:text-gray-500',
    inverse: 'text-white dark:text-gray-900',
    brand: 'text-blue-600 dark:text-blue-400',
  },
  
  // Border classes
  border: {
    primary: 'border-gray-200 dark:border-gray-700',
    secondary: 'border-gray-300 dark:border-gray-600',
    accent: 'border-blue-500 dark:border-blue-400',
  },
  
  // Interactive classes
  interactive: {
    primary: 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
    secondary: 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300',
    button: 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white',
    buttonSecondary: 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700',
  },
  
  // Status classes
  status: {
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
    info: 'text-blue-600 dark:text-blue-400',
  },
  
  // Component classes
  card: 'bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700',
  
  button: {
    primary: 'bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    success: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    warning: 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
  },
  
  // Form classes
  form: {
    input: 'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200',
    label: 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2',
  },
  
  // Navigation classes
  nav: {
    link: 'font-medium transition-colors duration-200',
    active: 'text-blue-600 dark:text-blue-400',
    inactive: 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400',
  },
  
  // Section classes
  section: {
    padding: 'py-16 px-4',
    background: {
      light: 'bg-white dark:bg-gray-900',
      gray: 'bg-gray-50 dark:bg-gray-800',
    },
  },
  
  // Hero section classes
  hero: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 text-white py-20 px-4 relative overflow-hidden',
  
  // Gradient classes
  gradient: {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700',
    green: 'bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700',
    purple: 'bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700',
  },
};

// Get CSS custom properties for CSS-in-JS
export const getCSSVariables = (theme = 'light') => {
  const themeColors = theme === 'dark' ? generateDarkModeColors() : colors;
  const cssVars = {};
  
  Object.entries(themeColors).forEach(([category, categoryColors]) => {
    Object.entries(categoryColors).forEach(([name, value]) => {
      cssVars[`--color-${category}-${name}`] = value;
    });
  });
  
  return cssVars;
};

// Apply theme to document element
export const applyThemeToDocument = (theme) => {
  const cssVars = getCSSVariables(theme);
  Object.entries(cssVars).forEach(([property, value]) => {
    document.documentElement.style.setProperty(property, value);
  });
};

// Get theme-aware color value
export const getThemeColor = (colorPath, theme = 'light') => {
  return getColor(colorPath, theme === 'dark');
};

// Export the main colors object for direct access
export { colors };
