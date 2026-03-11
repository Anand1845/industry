import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react'; // Optional: npm i lucide-react

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/land.jpeg" // Add your image to public folder
          alt="Packaging Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay to match the screenshot */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* --- Navigation Bar --- */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-16">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="bg-[#C81E1E] p-2">
            <div className="h-8 w-12 bg-white/20 flex items-center justify-center text-white italic font-bold">
              LOGO
            </div>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex space-x-8 text-white font-medium uppercase text-sm tracking-wide">
            <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">
              About Us <span className="text-[10px]">▼</span>
            </li>
            <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">
              Products <span className="text-[10px]">▼</span>
            </li>
            <li className="cursor-pointer hover:text-red-500">Brosher</li>
            <li className="cursor-pointer hover:text-red-500 flex items-center gap-1">
              Contact Us <span className="text-[10px]">▼</span>
            </li>
          </ul>
        </div>

        {/* CTA & Search */}
        <div className="flex items-center gap-6">
          <button className="bg-[#E31E24] hover:bg-red-700 text-white px-6 py-3 font-bold uppercase text-xs tracking-widest transition-colors">
            Request Quote
          </button>
          <Search className="text-white w-5 h-5 cursor-pointer" />
        </div>
      </nav>

      {/* --- Main Hero Content --- */}
      <main className="relative z-10 flex flex-col justify-center h-[calc(100vh-100px)] px-8 lg:px-32">
        <h4 className="text-white text-xl md:text-2xl font-light mb-2 tracking-tight">
          THE STANDARD FOR
        </h4>
        <h1 className="text-white text-5xl md:text-7xl font-bold max-w-3xl leading-[1.1]">
          Manufacturer Of <br />
          Pouch Packing Machines
        </h1>
        
        <button className="mt-10 w-fit bg-[#C81E1E] hover:bg-red-700 text-white px-10 py-4 text-lg font-medium transition-all">
          Learn More
        </button>
      </main>
    </div>
  );
}