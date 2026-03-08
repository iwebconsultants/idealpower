import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <div className="font-sans text-slate-900 bg-white">
        <Helmet>
          <title>Ideal Power - Expert Electrical Solutions in Sydney</title>
          <meta name="description" content="Ideal Power provides top-quality electrical services for homes and businesses in Sydney. Certified electricians, 24/7 emergency service, and affordable solutions." />
          <meta name="keywords" content="electrician, sydney, electrical services, emergency electrician, wiring, lighting, switchboard upgrades" />
        </Helmet>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Features />
          <Projects />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}
