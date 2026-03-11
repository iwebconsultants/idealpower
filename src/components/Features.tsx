import React from 'react';
import { Clock, Wallet, ShieldCheck, Wrench } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "Swift Response",
    description: "When Electrical Issues Strike, Time Matters. Our Team Is Ready To Respond Quickly And Efficiently, Minimizing Downtime And Restoring Power With Speed, Safety, And Precision You Can Rely On.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Wallet,
    title: "Affordable Solutions",
    description: "We Provide High-Quality Electrical Services At Prices That Fit Your Budget. No Hidden Fees Just Honest, Efficient Work You Can Count On.",
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "We Prioritize Your Safety In Every Job. Our Electricians Follow Strict Safety Protocols To Ensure Your Home Or Business Is Secure And Your Electrical Systems Are Functioning Properly.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Wrench,
    title: "Solar Specialists",
    description: "Our fully certified technicians specialize in tailored Solar and Battery installations. From consultation to setup and maintenance, we ensure your home runs safely and efficiently on renewable energy.",
    color: "bg-gray-100 text-gray-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Us?</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dependable, Efficient Solar & Electrical Services Delivered By Trusted Professionals On Time, On Budget, And Done Right The First Time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-shadow">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-6">
                {feature.description}
              </p>
              <button className="text-sm font-bold text-gray-900 underline decoration-gray-300 hover:decoration-red-600 transition-all">
                Learn More &rarr;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
