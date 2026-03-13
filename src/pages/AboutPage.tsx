import React from 'react';
import { Target, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            About <span className="text-red-500">Ideal Power</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are an Australian-owned electrical services company dedicated to providing top-tier solar, battery, and general electrical solutions across Greater Sydney.
          </p>
        </div>

        {/* Two Column Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
             <img 
               src="/images/commercial-electrician-melbourne.jpeg" 
               alt="Ideal Power Electricians at Work" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Empowering Sydney with Reliable Energy</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                With years of combined experience, our dedicated team of professionals is ready to help maintain your building's electrical systems and equipment. We understand that every client has specific requirements, and our bespoke solutions aim to meet them perfectly.
              </p>
              <p>
                From indoor and outdoor lighting to complex commercial retrofits, we handle it all. We also offer <strong className="text-gray-900 font-bold">24/7 emergency dispatch services</strong> to help you deal with unexpected, time-sensitive electrical emergencies, minimizing disruption to your operations.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-gray-50 p-10 rounded-3xl text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver safe, innovative, and sustainable electrical solutions that exceed client expectations and contribute to a greener future.
            </p>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-3xl text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-yellow-600">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality & Safety</h3>
            <p className="text-gray-600 leading-relaxed">
              We never compromise on safety. Fully licensed and compliant with Australian standards, ensuring every job is done right the first time.
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl text-center hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
            <p className="text-gray-600 leading-relaxed">
              Our Tier-1 certified electricians stay ahead of the curve with continuous training on the latest solar and storage technologies.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white rounded-3xl p-12 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your energy infrastructure?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our experts are ready to design a custom solution for your home or business.
          </p>
          <Link to="/contact">
            <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
              Get in Touch
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
