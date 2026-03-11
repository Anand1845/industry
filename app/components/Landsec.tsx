import React from 'react';
import Image from 'next/image';

const PackagingLanding = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-gray-800">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] leading-tight max-w-4xl">
          One of the Leading Corrugated Box Manufacturers & Suppliers in Mumbai, India
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Content Column */}
        <div className="lg:col-span-4 space-y-8">
          <p className="font-bold text-lg leading-relaxed">
            We are proud to be one of the best and leading stand-alone Corrugated Box 
            Manufacturers in Mumbai, India. Providing the widest range of Corrugated 
            Boxes for several Industries.
          </p>
          
          <div className="text-gray-500 leading-relaxed space-y-4">
            <p>
              We are Established in 2018, One Stop Solution for Corrugated Packaging 
              Boxes and now proudly became one of the Best Corrugated Box Manufacturers 
              and Suppliers in Mumbai, India. Based in Bhiwandi, Maharashtra, India.
            </p>
            <p>
              Primarily serving Mumbai, Navi Mumbai, Thane Areas. We specialized in 
              manufacturing <span className="font-semibold text-gray-700">3 Ply, 5 Ply, 7 Ply & 9 Ply Corrugated Boxes</span> 
              with premium export quality at an affordable price.
            </p>
          </div>
        </div>

        {/* Center Image Column with Orange Accent */}
        <div className="lg:col-span-4 flex justify-center relative">
            <div className="absolute -bottom-6 -left-6 w-40 h-48 bg-[#ff6b35] z-0 hidden md:block" />

            <div className="relative z-10 w-full aspect-square overflow-hidden shadow-xl">
                <img 
                src="/box.jpeg"
                alt="Stacked Corrugated Boxes"
                className="w-full h-full object-cover"
                />
            </div>

            </div>

        {/* Right Feature Column */}
        <div className="lg:col-span-4 space-y-12">
          <FeatureItem 
            title="Quality"
            description="We maintain our quality at peak, no compromise in quality at all."
          />
          <FeatureItem 
            title="Reliability"
            description="KANI Packaging is the other name of reliability. You can completely rely on us."
          />
          <FeatureItem 
            title="Durability"
            description="Our Products are highly durable, one of the USP which makes us different from others."
          />
        </div>

      </div>
    </div>
  );
};

// Reusable Feature Component
const FeatureItem = ({ title, description }: { title: string; description: string }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <span className="w-2.5 h-2.5 bg-[#ff6b35] rounded-full" />
      <h3 className="text-xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-gray-400 font-medium leading-relaxed pl-6">
      {description}
    </p>
  </div>
);

export default PackagingLanding;