import React from 'react';

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-red-500 mb-12 tracking-tight">About Us</h1>
        
        <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong className="text-gray-900 font-bold">Ideal Power</strong> is an Australian-owned electrical services. We cater to the electrical supply, technical support, and panel products throughout greater Sydney.
          </p>
          
          <p>
            We have a dedicated team of professionals ready to help maintain your building's electrical systems and equipment. Our preventive maintenance solutions aim to ensure that each client's specific requirements are met.
          </p>

          <p>
            We've got you covered whether you are looking for indoors or outdoor lighting, emergency lighting, or lighting controls.
          </p>
          
          <p>
            We offer 24/7 emergency dispatch services to help you deal with unexpected and time-sensitive electrical emergencies. We are here to minimize the sudden and significant disruption to your operations and facility.
          </p>
        </div>
      </div>
    </div>
  );
}
