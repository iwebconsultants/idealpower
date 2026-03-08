import React from 'react';

const steps = [
  {
    id: "01",
    title: "Grade-A Resources",
    description: "We use only top-quality materials and trusted equipment to ensure every project meets the highest standards. From wiring to fixtures, our Grade-A resources guarantee safety, durability, and long-lasting performance."
  },
  {
    id: "02",
    title: "24/7 Services",
    description: "Electrical issues don't follow a schedule—and neither do we. Our team is available 24/7 to handle emergencies, urgent repairs, and critical service needs whenever they arise, day or night."
  },
  {
    id: "03",
    title: "Innovative Devices",
    description: "We stay ahead of the curve with the latest electrical technologies. From smart home integrations to energy-efficient systems, we install innovative devices that modernize your space and save you money."
  },
  {
    id: "04",
    title: "Free Evaluations",
    description: "Get a no-cost, no-pressure evaluation from our experts clear, honest advice before any work begins."
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Enjoy Fast, Reliable Service, Expert Solutions, And Long-Term Value All The Benefits You Need, Right At Your Fingertips.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden h-full min-h-[500px]">
              <img 
                src="/images/commercial-electrician-melbourne.jpeg" 
                alt="Commercial electrician in Melbourne" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="text-xs font-bold text-gray-400 mb-2">{step.id}</div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    {index !== steps.length - 1 && <div className="w-px h-full bg-gray-200 my-2"></div>}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
