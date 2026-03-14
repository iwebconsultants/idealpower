import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Solar Panel Installation",
    image: "/images/SolarSystem.jpg",
    dark: true
  },
  {
    title: "Battery Storage Solutions",
    description: "Store your own energy with Premium Fox ESS Home Battery Systems. Maximize savings and gain energy independence.",
    image: "/images/Fox-ESS-EQ4800.webp",
    dark: true
  },
  {
    title: "Solar & Battery Packages",
    image: "/images/SolarandBatteries.webp",
    dark: true
  },
  {
    title: "Electrical Panel Upgrades",
    image: "/images/electrical-switchboard-installation.jpg",
    dark: true
  },
  {
    title: "Emergency Electrical Services",
    image: "/images/electrician-working-switchboard-cables.jpg",
    dark: true
  },
  {
    title: "Lighting & Wiring",
    image: "/images/residential-electrician-services.webp",
    dark: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in Tier-1 Solar Data and Battery Installation, alongside complete Electrical Services for homes and businesses. Safe, Reliable, & Government Rebate Compliant.
            </p>
          </div>
          <Link to="/services">
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shrink-0 whitespace-nowrap">
              View All Services
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <Link to="/services" key={index} className="block group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer bg-gray-900">
                    {service.image && (
                        <img 
                            src={service.image} 
                            alt={`Ideal Power Service: ${service.title}`} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40 motion-reduce:transform-none"
                        />
                    )}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                                {service.description && (
                                    <p className="text-white/90 text-xs mb-4 leading-relaxed">{service.description}</p>
                                )}
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 group-hover:bg-yellow-500 transition-colors ml-4">
                                <ArrowUpRight className="w-5 h-5 text-black" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
