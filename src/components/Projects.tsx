import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Electrical Security",
    description: "With Years Of Experience And advanced electrical security solutions. From surge protection and backup systems to smart monitoring and access control, our expert team ensures your property stays safe, secure, and powered—day and night.",
    image: "/images/professional-electrical-services.jpg",
    reverse: false
  },
  {
    title: "Electrical Diagnostic",
    description: "Our electrical diagnostic services identify issues quickly and accurately to keep your systems running safely and efficiently. Using advanced tools and expert insight, we troubleshoot problems and provide clear, effective solutions you can trust.",
    image: "/images/electrician-fixing-switchboard.jpg",
    reverse: true
  },
  {
    title: "Electrical Installation",
    description: "We provide safe, efficient electrical installation services for homes, offices, and commercial spaces. From lighting and wiring to full system setups, our certified electricians ensure every installation meets the highest standards for quality and safety.",
    image: "/images/electrical-switchboard-installation.jpg",
    reverse: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Projects</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore The Variety Of Projects We've Successfully Delivered Each Showcasing Our Commitment To Quality, Precision, & Expert Service.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2">
                <div className="rounded-3xl overflow-hidden h-[400px]">
                  <img 
                    src={project.image} 
                    alt={`Ideal Power Project: ${project.title}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 motion-reduce:transform-none"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 bg-gray-50 p-12 rounded-3xl h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-red-600 transition-colors">
                  View Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
