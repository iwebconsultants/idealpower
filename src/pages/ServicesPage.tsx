import React from 'react';
import { Lightbulb, Battery, Sun, Wrench, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    title: "Solar Panel Installation",
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    description: "Harness the power of the sun with our Tier-1 solar panel installations. We design and install custom systems tailored to your energy needs, reducing your reliance on the grid and lowering your electricity bills. Fully compliant and eligible for government rebates.",
    services: ["Residential Solar", "Commercial Solar", "Inverter Replacement", "System Diagnostics"]
  },
  {
    title: "Battery Storage Solutions",
    icon: <Battery className="w-8 h-8 text-green-500" />,
    description: "Take control of your energy with premium battery storage systems like Fox ESS. Store excess solar energy during the day to use at night or during power outages, ensuring continuous power and maximum energy independence.",
    services: ["Battery Retrofitting", "Hybrid Systems", "Off-Grid Solutions", "Performance Monitoring"]
  },
  {
    title: "General Electrical Services",
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    description: "From simple repairs to complex installations, our certified electricians handle all your domestic and commercial electrical needs. We prioritize safety and quality workmanship in every project.",
    services: ["Lighting & Wiring", "Switchboard Upgrades", "Fault Diagnosis", "CCTV & Security"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical, solar, and battery solutions designed for reliability, efficiency, and safety.
          </p>
        </div>
        
        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0">
                {category.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {category.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-red-600" />
                      <span className="text-gray-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-48 shrink-0 self-center md:self-start mt-6 md:mt-0">
                <Link to="/contact">
                  <button className="w-full bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

