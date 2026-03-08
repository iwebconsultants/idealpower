import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mark Jackson",
    role: "CEO, Elevate PR Group",
    text: "The level of professionalism and attention to detail is unmatched. They truly understand our needs and deliver beyond expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Clarissa Johnson",
    role: "CEO, Elevate PR Group",
    text: "The level of professionalism and attention to detail is unmatched. They truly understand our needs and deliver beyond expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <span className="font-bold text-gray-900">Our clients say</span>
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We're proud to cultivate strong client relationships. See what our clients have to say.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-900 font-medium text-lg mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors">
                &larr;
            </button>
            <button className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                &rarr;
            </button>
        </div>
      </div>
    </section>
  );
}
