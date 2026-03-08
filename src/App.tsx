import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="font-sans text-slate-900 bg-white">
          <Helmet>
            <title>Ideal Power - Expert Electrical Solutions in Sydney</title>
            <meta name="description" content="Ideal Power provides top-quality electrical services for homes and businesses in Sydney. Certified electricians, 24/7 emergency service, and affordable solutions." />
            <meta name="keywords" content="electrician, sydney, electrical services, emergency electrician, wiring, lighting, switchboard upgrades" />
          </Helmet>
          
          <Header />
          <ScrollToTop />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
