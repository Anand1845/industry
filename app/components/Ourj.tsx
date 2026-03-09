"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types & Data ---
interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
  theme: 'blue' | 'green';
}

const milestones: Milestone[] = [
  {
    id: 0,
    year: "1878",
    title: "The Founding Era",
    description: "Our journey began with a focus on early industrial motors and electrical components, laying the groundwork for a century of innovation.",
    image: "/lp.jpeg",
    theme: 'blue'
  },
  {
    id: 1,
    year: "1937",
    title: "Industrial Expansion",
    description: "Expanded our manufacturing capabilities to support national infrastructure projects during a critical period of industrial growth.",
    image: "/lp1.jpeg",
    theme: 'green'
  },
  {
    id: 2,
    year: "1960",
    title: "Diversification & Global Collaboration",
    description: "Expanded portfolio from motors to transformers and switchgear. We entered a technology partnership with Westinghouse (USA) to power growth.",
    image: "/lp2.jpeg",
    theme: 'blue'
  },
  {
    id: 3,
    year: "1982",
    title: "Digital Integration",
    description: "Introduced automated control systems and digital monitoring for high-voltage power grids across the continent.",
    image: "/lp.jpeg",
    theme: 'green'
  },
  {
    id: 4,
    year: "1996",
    title: "Global Reach",
    description: "Established our first international offices in Europe and Asia, becoming a truly global player in the energy sector.",
    image: "/lp3.jpeg",
    theme: 'blue'
  },
  {
    id: 5,
    year: "2005-10",
    title: "Sustainable Power",
    description: "Pivoted towards renewable energy solutions, developing specialized transformers for wind farms and solar arrays.",
    image: "/lp3.jpeg",
    theme: 'green'
  },
  {
    id: 6,
    year: "2011",
    title: "The Smart Grid",
    description: "Launched our Smart Infrastructure division to integrate AI-driven efficiency into existing power distribution networks.",
    image: "/lp4.jpeg",
    theme: 'blue'
  }
];

// --- Main Component ---
export default function CompanyHistory() {
  const [currentIndex, setCurrentIndex] = useState(2); // Starts at 1960

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % milestones.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const current = milestones[currentIndex];

  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* 1. Background Year Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.h1 
          key={current.year}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[25vw] font-bold text-gray-900 leading-none"
        >
          {current.year.split('-')[0]}
        </motion.h1>
      </div>

      {/* 2. Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* Navigation Arrows (Desktop) */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 z-20 p-2 text-gray-400 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft size={64} strokeWidth={1} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-0 z-20 p-2 text-gray-400 hover:text-blue-600 transition-colors"
        >
          <ChevronRight size={64} strokeWidth={1} />
        </button>

        {/* Image Display */}
        <div className="w-full md:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full aspect-square max-w-[450px]"
            >
              <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white">
                <img 
                  src={current.image} 
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Display */}
        <div className="w-full md:w-1/2 border-l-[3px] border-blue-500 pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                {current.title}
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Bottom Timeline Section */}
      <div className="relative w-full mt-24 h-48 flex flex-col justify-center">
        
        {/* Decorative Waves (SVG) */}
        <div className="absolute inset-0 w-full pointer-events-none">
          <svg viewBox="0 0 1440 200" className="w-full h-full">
            <path 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="1.5" 
              opacity="0.3"
              d="M0,100 C200,180 400,20 720,100 C1040,180 1240,20 1440,100" 
            />
            <path 
              fill="none" 
              stroke="#84cc16" 
              strokeWidth="1.5" 
              opacity="0.3"
              d="M0,130 C200,210 400,50 720,130 C1040,210 1240,50 1440,130" 
            />
          </svg>
        </div>

        {/* Year Nodes */}
        <div className="relative z-20 flex justify-between items-center max-w-5xl mx-auto w-full px-4">
          {milestones.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div key={item.id} className="relative flex flex-col items-center">
                {/* Vertical Connector for active state */}
                {isActive && (
                  <motion.div 
                    layoutId="vertical-line"
                    className="absolute bottom-full mb-4 w-[2px] h-20 bg-blue-500"
                  />
                )}
                
                <button
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 
                    ${isActive 
                      ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-125 z-30' 
                      : 'bg-white border-2 border-dashed border-gray-300 hover:border-blue-400 z-10'
                    }
                    ${!isActive && item.theme === 'green' ? 'bg-green-50 border-green-200' : ''}
                  `}
                >
                  <span className={`text-[10px] font-bold ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {item.year}
                  </span>
                  
                  {/* Subtle outer pulse for active node */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border border-blue-600 animate-ping opacity-20" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}