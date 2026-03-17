import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Phero from '../components/Phero';

const ProductPage = () => {
  return (
    <>
    <Phero/>
    <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-12 bg-gray-50 min-h-screen">
      
      {/* Sidebar - Left Side */}
      <aside className="w-full md:w-1/4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Products</h2>
        <div className="bg-white shadow-lg border border-gray-100">
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Polestar Mechanical
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Pnuematic Cup Filter
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
           Weight Filter 
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Auger Filter
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Pepsi Machine
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Milk
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Flow Wrap
          </div>
          <div className="p-4 border-b border-gray-100 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Oil
          </div>
          <div className="p-4 font-semibold text-gray-700 hover:bg-[#db0f0fd0] hover:text-white cursor-pointer">
            Paste Filter
          </div>
        </div>
      </aside>

      {/* Main Content - Right Side */}
      <main className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Product 1: Bearings */}
        <div className="flex flex-col">
          <div className="h-48 flex items-center justify-center mb-6">
            <img 
              src="/lp.jpeg" 
              alt="Bearings" 
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Polestar 5</h3>
           <Link href='/pro' className="flex items-center text-blue-700 font-semibold  hover:underline">
            Explore products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Product 2: Seals */}
        <div className="flex flex-col">
          <div className="h-48 flex items-center justify-center mb-6">
            <img 
              src="/lp1.jpeg" 
              alt="Seals" 
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Polestar 50</h3>
           <Link href='/pole' className="flex items-center text-blue-700 font-semibold  hover:underline">
            Explore products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        {/* Product 3: Lubrication */}
        <div className="flex flex-col">
          <div className="h-48 flex items-center justify-center mb-6">
            <img 
              src="/lp2.jpeg" 
              alt="Lubrication" 
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">Polestar 100</h3>
           <Link href='/pol' className="flex items-center text-blue-700 font-semibold  hover:underline">
            Explore products <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

      </main>
    </div>
    </>
  );
};

export default ProductPage;