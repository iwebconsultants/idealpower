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
    title: "Trusted Experts",
    description: "With Years Of Experience And A Commitment To Excellence, Our Team Of Trusted Experts Delivers Reliable Electrical Solutions. Whether It's Routine Maintenance Or Emergency Repairs, You Can Count On Us For Safe, Efficient, And Top-Quality Service.",
    color: "bg-gray-100 text-gray-600"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-sm"></span>
              <span className="font-bold text-gray-900">Why us?</span>
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Dependable, Efficient Electrical Services Delivered By Trusted Professionals On Time, On Budget, And Done Right The First Time.
            </h2>
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
