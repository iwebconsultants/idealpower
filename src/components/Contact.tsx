import React from 'react';
import contentData from '../content.json';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
          {/* Left Column: Contact Details */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">Contact Us</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                Reach out to us for any electrical needs. Whether it's a quick repair or a major installation, our team is ready to help you with expert solutions.
            </p>
            
            <div className="space-y-4 mb-12">
                <a href={`mailto:${contentData.contactEmail}`} className="block text-gray-900 text-lg hover:text-red-600 transition-colors">
                    {contentData.contactEmail}
                </a>
                <a href={`tel:${contentData.contactPhone.replace(/\s+/g, '')}`} className="block text-gray-900 text-lg hover:text-red-600 transition-colors">
                    Mob: {contentData.contactPhone}
                </a>
                <div className="text-gray-900 text-lg">
                    13 Seaeagle Cres, Green Valley<br/>NSW 2168
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Customer Support</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Our team is available to address any concerns or queries regarding your electrical systems.</p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Emergency Service</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Fast, reliable emergency electrical repairs when you need them most, minimizing your downtime.</p>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Consultations</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Book a consultation for comprehensive planning and transparent quoting for new projects.</p>
                </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50">
                <div className="mb-8">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                    <p className="text-gray-500">You can reach us anytime</p>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input type="text" placeholder="First name" className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                        <div>
                            <input type="text" placeholder="Last name" className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                        </div>
                    </div>
                    
                    <div>
                        <input type="email" placeholder="Your email" className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                    </div>
                    
                    <div>
                        <input type="tel" placeholder="Phone number" className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all" />
                    </div>

                    <div>
                        <textarea rows={4} placeholder="How can we help?" className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"></textarea>
                    </div>
                    
                    <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                        Submit
                    </button>
                    
                    <p className="text-center text-xs text-gray-500 mt-4">
                        By contacting us, you agree to our <a href="#" className="font-bold text-gray-900 hover:text-red-600 transition-colors">Terms of service</a> and <a href="#" className="font-bold text-gray-900 hover:text-red-600 transition-colors">Privacy Policy</a>
                    </p>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
