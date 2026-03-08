import React from 'react';
import { Lightbulb } from 'lucide-react';

const servicesListLeft = [
  "Electricity Repair & Installation",
  "Power to Machinery",
  "Appliance Wiring",
  "Kitchen Electrical Renovation",
  "Lighting Retrofits & Audits",
  "Lighting Upgrade",
  "CCTV"
];

const servicesListRight = [
  "Distribution Upgrade",
  "Outlet Wiring",
  "New Circuit Installation",
  "Uninterrupted Power Supplies (UPS)",
  "Smoke Alarm Testing & Replacement",
  "Maintenance",
  "Renovation"
];

function ServiceItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100">
      <div className="text-orange-400">
        <Lightbulb className="w-6 h-6" />
      </div>
      <span className="text-gray-700 font-medium text-lg">{title}</span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-red-500 mb-16 tracking-tight">Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          <div className="flex flex-col">
            {servicesListLeft.map((service, idx) => (
              <ServiceItem key={`left-${idx}`} title={service} />
            ))}
          </div>
          <div className="flex flex-col">
            {servicesListRight.map((service, idx) => (
              <ServiceItem key={`right-${idx}`} title={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
