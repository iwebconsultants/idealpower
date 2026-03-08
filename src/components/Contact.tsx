import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <span className="font-bold text-gray-900">Contact US</span>
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Feel free to reach out today
            </h2>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">First Name*</label>
                        <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Last Name*</label>
                        <input type="text" placeholder="Your name" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Phone Number*</label>
                        <input type="tel" placeholder="Number" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Email*</label>
                        <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase">Message*</label>
                    <textarea rows={4} placeholder="Enter your message" className="w-full bg-transparent border-b border-gray-200 py-3 focus:border-black outline-none transition-colors resize-none"></textarea>
                </div>
                
                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                        Get In Touch With Us
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}
