import React from 'react';
import { Play } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Ideal Power, We're Committed To Quality Workmanship And Dependable Service. Our Certified Team Delivers Expert Electrical Solutions For Homes And Businesses Alike.
            </p>
          </div>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shrink-0">
            More About Us
          </button>
        </div>

        {/* Video/Image Section */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/images/Video_Generation_With_New_Settings.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Stats Bar */}
        <div className="bg-black text-white rounded-b-3xl lg:rounded-3xl -mt-4 lg:-mt-24 relative z-10 mx-0 lg:mx-12 p-8 lg:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l border-gray-700 pl-6">
                <div className="text-4xl font-bold mb-1">425+</div>
                <div className="text-gray-400 text-sm">Effective Enterprise</div>
            </div>
            <div className="border-l border-gray-700 pl-6">
                <div className="text-4xl font-bold mb-1">250+</div>
                <div className="text-gray-400 text-sm">Task Team</div>
            </div>
            <div className="border-l border-gray-700 pl-6">
                <div className="text-4xl font-bold mb-1">350+</div>
                <div className="text-gray-400 text-sm">Earning Honors</div>
            </div>
            <div className="border-l border-gray-700 pl-6">
                <div className="text-4xl font-bold mb-1">240+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
        </div>
      </div>
    </section>
  );
}
