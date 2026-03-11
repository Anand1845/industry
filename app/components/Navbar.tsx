import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent text-black">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col border-white">
          <Link href="/">
            <Image
              src="/logo.jpeg"
              alt="MAC Instruments Logo"
              width={70}
              height={20}
              className="object-contain ml-16"
            />
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
  
  <a
    href="/about"
    className="relative overflow-hidden px-3 py-2 group flex items-center gap-1"
  >
    <span className="relative z-10 flex items-center gap-1">
      About US <ChevronDown size={14} />
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#db0f0fd0] transition-all duration-300 group-hover:h-full"></span>
  </a>

  <a
    href="#"
    className="relative overflow-hidden px-3 py-2 group flex items-center gap-1"
  >
    <span className="relative z-10 flex items-center gap-1">
      Products <ChevronDown size={14} />
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#db0f0fd0] transition-all duration-300 group-hover:h-full"></span>
  </a>

  <a
    href="#"
    className="relative overflow-hidden px-3 py-2 group"
  >
    <span className="relative z-10">Brosher</span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#db0f0fd0] transition-all duration-300 group-hover:h-full"></span>
  </a>
  
  <a
    href="/contact"
    className="relative overflow-hidden px-3 py-2 group flex items-center gap-1"
  >
    <span className="relative z-10 flex items-center gap-1">
      Contact Us <ChevronDown size={14} />
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-[#db0f0fd0] transition-all duration-300 group-hover:h-full"></span>
  </a>


</div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6">
        <button className="bg-[#db0f0fd0] hover:bg-blue-600 text-white px-6 py-3 text-sm font-bold uppercase transition">
          Request Quote
        </button>
        <Search className="cursor-pointer hover:text-blue-400" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;