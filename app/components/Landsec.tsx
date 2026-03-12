import React from 'react';
import Image from 'next/image';

const PackagingLanding = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-gray-800">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a202c] leading-tight max-w-4xl">
          Our Mission
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
              At Conch Industrial Solution Pvt. Ltd., our mission is to provide high-quality and reliable industrial machinery that helps businesses improve efficiency and productivity. We aim to deliver advanced filling and packaging solutions that meet the growing needs of modern industries.
              We are committed to maintaining the highest standards of quality, innovation, and customer satisfaction. By continuously improving our technology and services, we strive to support our clients with durable, efficient, and cost-effective machinery that simplifies their production processes and helps them achieve long-term success.
            </p>
          </div>
        </div>

        {/* Center Image Column with Orange Accent */}
        <div className="lg:col-span-4 flex justify-center relative">
            <div className="absolute -bottom-6 -left-6 w-40 h-48 bg-[#ff6b35] z-0 hidden md:block" />

            <div className="relative z-10 w-full aspect-square overflow-hidden shadow-xl mt-8">
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
            description="Maintained through strict quality control measures to ensure the product meets high standards of performance, safety, and reliability."
          />
          <FeatureItem 
            title="Reliability"
            description="Ensures consistent production standards and dependable product performance through controlled and precise manufacturing processes."
          />
          <FeatureItem 
            title="Durability"
            description="Built with strong materials and robust design to withstand regular use and maintain performance over time."
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