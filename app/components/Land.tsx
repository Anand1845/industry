import React from 'react';
import { ArrowRight } from 'lucide-react'; 

const services = [
  {
    title: "DUCTING",
    description: "Our custom fabricated stainless steel ducting products are highly reliable and distributed across the world.",
    image: "/od.jpeg", 
  },
  {
    title: "STACKS",
    description: "Our stacks are designed to maintain air quality emissions in compliance with modern requirements for your facility.",
    image: "/os.jpeg",
  },
  {
    title: "TANKS",
    description: "We specialize in the fabrication of custom industrial tanks of all kinds including stainless steel tanks.",
    image: "/ot.jpeg",
  },
  {
    title: "STRUCTURAL",
    description: "Our primary business is providing design, fabrication, and erection of structural steel for commercial or industrial buildings and bridges.",
    image: "/oss.jpeg",
  },
];

export default function IndustrialServices() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">
        <h1 className='font-semibold text-5xl mb-4'>WE HAVE</h1>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="relative h-64 group overflow-hidden cursor-pointer"
          >
            {/* Background Image with Dark Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            {/* Content */}
            <div className="relative h-full p-8 flex flex-col justify-center">
              <h2 className="text-white text-4xl font-black mb-2 tracking-tighter">
                {service.title}
              </h2>
              <p className="text-gray-200 text-sm max-w-70 leading-relaxed">
                {service.description}
              </p>
              
              {/* Orange Action Button */}
              <div className="absolute bottom-6 right-6 bg-orange-600 p-3 hover:bg-orange-500 transition-colors">
                <ArrowRight className="text-white w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text Content */}
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-orange-600 block uppercase">We'll handle any</span>
          <span className="text-orange-600/80 uppercase">Intricate custom design</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-sm leading-7">
          <div className="space-y-4">
            <p>
              Steel and Fabrication Industry takes great pride in our industry-leading custom 
              metal fabrication services. This is the core of our business and it's a process we 
              take seriously. We work on small, large, and heavy components.
            </p>
            <p>
              Our team of experts provides over a dozen metal fabrication services. We work with 
              a large variety of metals and raw material forms. Our loyal customers come to us 
              from a diverse array of industries.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Steel and Fabrication Industry offers the most cost-effective, high-quality 
              engineering and design services around. With our consulting, designing, 
              prototyping, and other expert services, we consistently save customers time and money.
            </p>
            <button className="mt-4 bg-slate-800 text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-slate-700 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}