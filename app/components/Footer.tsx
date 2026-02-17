import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 px-6 md:px-16 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Company Bio */}
        <div className="space-y-5">
          <h2 className="text-white text-2xl font-bold tracking-tight">XYZ INDUSTRY</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            Delivering industrial-grade flooring, waterproofing & coating solutions with excellence, durability, and nationwide reach.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="p-2 bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-md hover:scale-105 transition-transform">
              <Instagram size={18} strokeWidth={2.5} />
            </a>
            <a href="#" className="p-2 bg-[#1877F2] text-white rounded-md hover:scale-105 transition-transform">
              <Facebook size={18} strokeWidth={2.5} fill="currentColor" />
            </a>
            <a href="#" className="p-2 bg-[#0077B5] text-white rounded-md hover:scale-105 transition-transform">
              <Linkedin size={18} strokeWidth={2.5} fill="currentColor" />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3 text-sm">
            {[
              'Flooring Services', 'Epoxy Services', 'Screeding Service', 
              'Waterproofing', 'Industrial Coating', 'Epoxy Flooring', 'Densification'
            ].map((item) => (
              <li key={item} className="flex items-center hover:text-white cursor-pointer transition-colors group">
                <span className="mr-2 text-gray-600 group-hover:text-[#00abeb]">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
              <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all">
                Home
              </li>             
              <Link href="/about" className="hover:text-white hover:translate-x-1 cursor-pointer transition-all">
                About Us
              </Link>
              <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all mt-3">
                Services
              </li>
              <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all">
                Projects Gallery
              </li>
              <li className="hover:text-white hover:translate-x-1 cursor-pointer transition-all">
                Contact
              </li>
            </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Contact</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#ec4899] shrink-0" />
              <span className="leading-snug">
                Flat No.308, C3 Building, Purvarang Society, Gat No.571, Kesnand, Pune-412207, Maharashtra, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#ec4899] shrink-0" />
              <span>+91 73835 70508</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#ec4899] shrink-0" />
              <span>+91 97660 69372</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-[#1d4ed8] p-1.5 rounded-sm">
                <Mail size={14} className="text-white" strokeWidth={3} />
              </div>
              <span className="hover:text-white transition-colors cursor-pointer">info@xyzcompany.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-[11px] tracking-wider text-gray-500 uppercase">
        <p>© 2025 XYZ COMPANY. All rights reserved.</p>
        <p className="mt-2">
          Developed By <span className="text-[#00abeb] font-bold">DW INNOVATION PVT. LTD.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;