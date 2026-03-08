import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Electrical Panel Upgrades",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    dark: true
  },
  {
    title: "Surge Protection Installation",
    description: "Protect Your Property From Power Surges With Professionally Installed Surge Protection. Keep Your Electronics And Electrical Systems Safe And Secure.",
    orange: true
  },
  {
    title: "Emergency Electrical Services",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2069&auto=format&fit=crop",
    dark: true
  },
  {
    title: "Electrical Repairs",
    image: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2069&auto=format&fit=crop",
    dark: true
  },
  {
    title: "Lighting Installation & Upgrades",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2070&auto=format&fit=crop",
    dark: true
  },
  {
    title: "Wiring & Rewiring Services",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    dark: true
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <span className="font-bold text-gray-900">Our Services</span>
            </div>
          </div>
          <div className="lg:w-3/4 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              We Provide Complete Electrical Services For Homes And Businesses From Repairs And Upgrades To Full Installations. Safe, Reliable, & Always Done Right.
            </h2>
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
              View All Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <div key={index} className={`group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer ${service.orange ? 'bg-orange-500' : 'bg-gray-900'}`}>
                    {service.image && (
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-40"
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
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
