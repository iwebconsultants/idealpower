import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Projects from '../components/Projects';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
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
  );
}
