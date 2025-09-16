import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook for scroll restoration
export const useScrollRestoration = (enabled = true) => {
  const location = useLocation();

  useEffect(() => {
    if (enabled) {
      // Scroll to top when navigating to a new page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, enabled]);
};

// Alternative: Scroll to top immediately (no smooth animation)
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useScrollRestoration;
