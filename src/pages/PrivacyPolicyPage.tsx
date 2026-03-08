import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-red-500 mb-12 tracking-tight">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-700">
          <p>We respect your privacy and are committed to protecting it through our compliance with this policy.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p>We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p>We use information that we collect about you or that you provide to us to present our Website and its contents to you, to provide you with information, products, or services that you request from us, and to fulfill any other purpose for which you provide it.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclosure of Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice.</p>
        </div>
      </div>
    </div>
  );
}
