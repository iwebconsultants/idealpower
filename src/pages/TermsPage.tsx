import React from 'react';

export default function TermsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-red-500 mb-12 tracking-tight">Terms of Service</h1>
        <div className="prose prose-lg text-gray-700">
          <p>Welcome to Ideal Power. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Services</h2>
          <p>Ideal Power provides electrical installation, repair, and maintenance services. All services are subject to availability and scheduling.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Quotes and Invoicing</h2>
          <p>All quotes provided are estimates. Final invoicing will reflect the actual materials and labor required for the job. Payment is due upon completion unless otherwise specified.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Warranties</h2>
          <p>We guarantee our workmanship. Specific warranties for materials depend on the manufacturer's policies.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Liability</h2>
          <p>Ideal Power is not liable for indirect or consequential damages arising from the use of our services.</p>
        </div>
      </div>
    </div>
  );
}
