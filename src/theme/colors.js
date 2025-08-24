// 🎨 Centralized Color Theme System
// Define colors ONCE and they automatically work for both light and dark modes
// Change any color here and it updates everywhere!

export const colors = {
  // 🎯 Brand Colors (used everywhere)
  brand: {
    primary: '#8B5CF6',      // Changed to purple
    secondary: '#A855F7',    // Secondary purple
    accent: '#C084FC',       // Light purple accent
  },

  // 🌈 Background Colors
  background: {
    primary: '#F8FAFC',      // Changed to light blue-gray
    secondary: '#F1F5F9',    // Lighter blue-gray
    tertiary: '#E2E8F0',     // Medium blue-gray
    navbar: '#FFFFFF',        // White navbar
    footer: '#1E293B',       // Dark blue-gray footer
  },

  // 📝 Text Colors
  text: {
    primary: '#1E293B',      // Dark blue-gray text
    secondary: '#475569',    // Medium blue-gray
    tertiary: '#64748B',     // Lighter blue-gray
    muted: '#94A3B8',        // Very light blue-gray
    inverse: '#FFFFFF',      // White text on dark backgrounds
  },

  // 🔗 Interactive Colors
  interactive: {
    primary: '#8B5CF6',      // Purple links and buttons
    secondary: '#FFFFFF',    // White secondary actions
    hover: '#7C3AED',        // Darker purple on hover
    focus: '#A855F7',        // Purple focus states
  },

  // ✅ Status Colors
  status: {
    success: '#10B981',      // Green success
    warning: '#F59E0B',      // Yellow warning
    error: '#EF4444',        // Red error
    info: '#3B82F6',         // Blue info
  },

  // 🎨 Border Colors
  border: {
    primary: '#E2E8F0',      // Light blue-gray borders
    secondary: '#CBD5E1',    // Medium blue-gray borders
    accent: '#8B5CF6',       // Purple accent borders
  },

  // 🌊 Gradient Colors
  gradient: {
    blue: {
      from: '#3B82F6',
      to: '#1D4ED8',
    },
    green: {
      from: '#10B981',
      to: '#059669',
    },
    purple: {
      from: '#8B5CF6',
      to: '#7C3AED',
    },
  },
};

// 🚀 Auto-generate dark mode variants
export const generateDarkModeColors = () => {
  const darkColors = {};
  
  // Convert light colors to dark mode automatically
  Object.entries(colors).forEach(([category, categoryColors]) => {
    darkColors[category] = {};
    
    Object.entries(categoryColors).forEach(([name, value]) => {
      if (category === 'background') {
        // Dark backgrounds
        if (name === 'primary') darkColors[category][name] = '#0F172A';
        else if (name === 'secondary') darkColors[category][name] = '#1E293B';
        else if (name === 'tertiary') darkColors[category][name] = '#334155';
        else if (name === 'navbar') darkColors[category][name] = '#1E293B';
        else if (name === 'footer') darkColors[category][name] = '#020617';
        else darkColors[category][name] = value;
      } else if (category === 'text') {
        // Dark text
        if (name === 'primary') darkColors[category][name] = '#F8FAFC';
        else if (name === 'secondary') darkColors[category][name] = '#E2E8F0';
        else if (name === 'tertiary') darkColors[category][name] = '#CBD5E1';
        else if (name === 'muted') darkColors[category][name] = '#94A3B8';
        else if (name === 'inverse') darkColors[category][name] = '#0F172A';
        else darkColors[category][name] = value;
      } else if (category === 'interactive') {
        // Dark interactive
        if (name === 'primary') darkColors[category][name] = '#A855F7';
        else if (name === 'secondary') darkColors[category][name] = '#334155';
        else if (name === 'hover') darkColors[category][name] = '#C084FC';
        else if (name === 'focus') darkColors[category][name] = '#C084FC';
        else darkColors[category][name] = value;
      } else if (category === 'border') {
        // Dark borders
        if (name === 'primary') darkColors[category][name] = '#334155';
        else if (name === 'secondary') darkColors[category][name] = '#475569';
        else if (name === 'accent') darkColors[category][name] = '#A855F7';
        else darkColors[category][name] = value;
      } else {
        // Keep other colors the same
        darkColors[category][name] = value;
      }
    });
  });
  
  return darkColors;
};

// 🎯 Get color for current theme
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

// 🎨 Get TailwindCSS classes for common patterns
export const getThemeClasses = {
  // Background classes
  background: {
    primary: 'bg-slate-50 dark:bg-slate-900',
    secondary: 'bg-slate-100 dark:bg-slate-800',
    tertiary: 'bg-slate-200 dark:bg-slate-700',
    card: 'bg-white dark:bg-slate-800',
    navbar: 'bg-white dark:bg-slate-800',
    footer: 'bg-slate-800 dark:bg-slate-950',
  },
  
  // Text classes
  text: {
    primary: 'text-slate-900 dark:text-slate-100',
    secondary: 'text-slate-600 dark:text-slate-300',
    tertiary: 'text-slate-500 dark:text-slate-400',
    muted: 'text-slate-400 dark:text-slate-500',
    inverse: 'text-white dark:text-slate-900',
    brand: 'text-purple-600 dark:text-purple-400',
  },
  
  // Border classes
  border: {
    primary: 'border-slate-200 dark:border-slate-700',
    secondary: 'border-slate-300 dark:border-slate-600',
    accent: 'border-purple-500 dark:border-purple-400',
  },
  
  // Interactive classes
  interactive: {
    primary: 'text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300',
    secondary: 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300',
    button: 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white',
    buttonSecondary: 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-slate-700',
  },
  
  // Status classes
  status: {
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
    info: 'text-blue-600 dark:text-blue-400',
  },
  
  // Component classes
  card: 'bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700',
  
  button: {
    primary: 'bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    secondary: 'bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-slate-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    success: 'bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
    warning: 'bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl',
  },
  
  // Form classes
  form: {
    input: 'w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 transition-all duration-200',
    label: 'block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2',
  },
  
  // Navigation classes
  nav: {
    link: 'font-medium transition-colors duration-200',
    active: 'text-purple-600 dark:text-purple-400',
    inactive: 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400',
  },
  
  // Section classes
  section: {
    padding: 'py-16 px-4',
    background: {
      light: 'bg-white dark:bg-slate-900',
      gray: 'bg-slate-50 dark:bg-slate-800',
    },
  },
  
  // Hero section classes
  hero: 'bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 dark:from-purple-900 dark:via-purple-800 dark:to-purple-900 text-white py-20 px-4 relative overflow-hidden',
  
  // Gradient classes
  gradient: {
    blue: 'bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-700',
    green: 'bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700',
    purple: 'bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-600 dark:to-indigo-700',
  },
};

export default colors;
