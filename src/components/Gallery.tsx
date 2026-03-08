import React from 'react';
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2153&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565608444338-3959098d936c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-black mb-4">Our Work</h2>
          <p className="text-gray-600">A glimpse into our recent projects and high-quality workmanship.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold px-6 py-3 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
