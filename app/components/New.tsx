"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface SectionData {
  id: number;
  prefix: string;
  title: string;
  stepTitle: string;
  items: string[];
  image: string;
}

const sections: SectionData[] = [
  {
    id: 0,
    prefix: "OUR SERVICES APPROACH",
    title: "Industrial Filling Machine Solutions",
    stepTitle: "1. Filling",
    items: ["High-Precision Filling", "Multi-Product Compatibility", "Efficient Production Output"],
    image:
      "/lp4.jpeg",
  },
  {
    id: 1,
    prefix: "OUR SERVICES APPROACH",
    title: "Packaging Automation Systems",
    stepTitle: "2. Packaging",
    items: ["Smart Packaging Automation", "Labor Cost Reduction", "Faster Turnaround Time"],
    image:
      "/lp2.jpeg",
  },
  {
    id: 2,
    prefix: "OUR SERVICES APPROACH",
    title: "Customized Machinery Development",
    stepTitle: "3. Machinery",
    items: ["Tailor-Made Equipment", "Process Optimization", "Seamless Integration"],
    image:
      "/lp1.jpeg",
  },
  {
    id: 3,
    prefix: "OUR SERVICES APPROACH",
    title: "Installation & After-Sales Support",
    stepTitle: "4. Deployment",
    items: ["On-Site Installation", "Routine Maintenance", "Rapid Technical Support"],
    image:
      "/lp.jpeg",
  },
];

const ScrollSection: React.FC = () => {
  const [activeId, setActiveId] = useState(0);
  const scrollRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute("data-id"));
          if (!isNaN(id)) {
            setActiveId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const currentRefs = scrollRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, []);

  const activeSection = sections[activeId];

  return (
    <div className="relative w-full bg-white">
      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 h-fit md:h-screen md:sticky md:top-0 flex flex-col justify-center px-8 md:px-20 py-20 bg-white z-10">
          <div className="max-w-md transition-all duration-500 ease-in-out">
            <span className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4 block">
              {activeSection.prefix}
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight whitespace-pre-line mb-8">
              {activeSection.title}
            </h2>

            <h3 className="text-xl font-medium text-gray-500">
              {activeSection.stepTitle}
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 relative">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => {
                scrollRefs.current[index] = el;
              }}
              data-id={section.id}
              className="min-h-screen flex flex-col justify-center items-start p-8 md:p-20"
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-2xl mb-12">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className={`object-cover transition-opacity duration-700 ease-in-out ${
                    activeId === section.id ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-2xl font-semibold text-slate-800"
                  >
                    <span className="w-2 h-2 bg-slate-800 rounded-full mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;