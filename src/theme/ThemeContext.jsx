import { createContext, useState, useEffect } from 'react';
import { colors, generateDarkModeColors } from './colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [currentColors, setCurrentColors] = useState(generateDarkModeColors()); // Start with dark colors

  useEffect(() => {
    // Force dark mode on component mount
    const applyDarkMode = () => {
      setIsDark(true);
      setCurrentColors(generateDarkModeColors());
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    };

    // Check if there's a saved preference, otherwise force dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      setCurrentColors(colors);
      document.documentElement.classList.remove('dark');
    } else {
      applyDarkMode();
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      setCurrentColors(generateDarkModeColors());
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setCurrentColors(colors);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const setTheme = (theme) => {
    if (theme === 'dark') {
      setIsDark(true);
      setCurrentColors(generateDarkModeColors());
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setIsDark(false);
      setCurrentColors(colors);
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const value = {
    isDark,
    currentColors,
    colors,
    toggleTheme,
    setTheme,
    getColor: (path) => {
      const pathArray = path.split('.');
      let current = currentColors;
      
      for (const key of pathArray) {
        if (current[key]) {
          current = current[key];
        } else {
          console.warn(`Color path not found: ${path}`);
          return '#000000';
        }
      }
      
      return current;
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeContext for use in useTheme hook
export { ThemeContext };
