import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <div className="flex flex-col border-white">
          <span className="text-2xl font-bold tracking-tighter leading-none italic">
            <span className="border-2 border-white rounded-full px-2 py-0.5 mr-1 not-italic">MAC</span>
            INSTRUMENTS
          </span>
          <span className="text-[8px] uppercase tracking-widest text-gray-400 mt-2">
            A Division of Machine Applications Corporation
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
        <a href="#" className="flex items-center gap-1 hover:text-blue-400 transition">
          Resources <ChevronDown size={14} />
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-400 transition">
          Products <ChevronDown size={14} />
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-blue-400 transition">
          Applications <ChevronDown size={14} />
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Case Studies
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6">
        <button className="bg-[#1D84D1] hover:bg-blue-600 text-white px-6 py-3 text-sm font-bold uppercase transition">
          Request Quote
        </button>
        <Search className="cursor-pointer hover:text-blue-400" size={20} />
      </div>
    </nav>
  );
};

export default Navbar;