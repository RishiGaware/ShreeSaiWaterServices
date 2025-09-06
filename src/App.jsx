import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './components/Layout';

// Import all pages
import Home from './pages/Home';
import AboutUs from './pages/company/AboutUs';
import Infrastructure from './pages/company/Infrastructure';
import Leadership from './pages/company/Leadership';
import OurTeam from './pages/company/OurTeam';
import Careers from './pages/company/Careers';
import Vendor from './pages/company/Vendor';
import Certificates from './pages/company/Certificates';
import CorporateSocialResponsibility from './pages/company/CorporateSocialResponsibility';
import VisionMission from './pages/company/VisionMission';
import WaterTreatment from './pages/products/WaterTreatment';
import WasteWaterTreatment from './pages/products/WasteWaterTreatment';
import Manufacturing from './pages/products/Manufacturing';
import Services from './pages/products/Services';
import FiltrationPlant from './pages/products/FiltrationPlant';
import SoftenerPlant from './pages/products/SoftenerPlant';
import UltraFiltrationPlant from './pages/products/UltraFiltrationPlant';
import DMPlant from './pages/products/DMPlant';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfUse from './pages/policies/TermsOfUse';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Company Section */}
            <Route path="/company/about-us" element={<AboutUs />} />
            <Route path="/company/infrastructure" element={<Infrastructure />} />
            <Route path="/company/leadership" element={<Leadership />} />
            <Route path="/company/our-team" element={<OurTeam />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/vendor" element={<Vendor />} />
            <Route path="/company/certificates" element={<Certificates />} />
            <Route path="/company/corporate-social-responsibility" element={<CorporateSocialResponsibility />} />
            <Route path="/company/vision-mission" element={<VisionMission />} />

            {/* Product Section */}
            <Route path="/products/water-treatment" element={<WaterTreatment />} />
            <Route path="/products/waste-water-treatment" element={<WasteWaterTreatment />} />
            <Route path="/products/manufacturing" element={<Manufacturing />} />
            <Route path="/products/services" element={<Services />} />
            <Route path="/products/filtration-plant" element={<FiltrationPlant />} />
            <Route path="/products/softener-plant" element={<SoftenerPlant />} />
            <Route path="/products/ultra-filtration-plant" element={<UltraFiltrationPlant />} />
            <Route path="/products/dm-plant" element={<DMPlant />} />

            {/* Other Pages */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Policy Pages */}
            <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/policies/terms-of-use" element={<TermsOfUse />} />

            {/* 404 Route */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
                  <p className="text-xl text-gray-600 mb-8">Page not found</p>
                  <a href="/" className="text-blue-600 hover:text-blue-800 underline">
                    Go back home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
