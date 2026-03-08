import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Ideal Power</title>
        <meta name="description" content="Contact Ideal Power for all your electrical needs. Available 24/7 for emergencies, repairs, and installations in Sydney." />
      </Helmet>
      <div className="pt-32 md:pt-40 min-h-screen bg-gray-50 flex flex-col justify-center">
        <Contact />
      </div>
    </>
  );
}
