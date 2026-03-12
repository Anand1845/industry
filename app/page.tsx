"use client";

import { ArrowRight, FileText, Star, ChevronLeft, ChevronRight, Scroll, ArrowUpRight } from "lucide-react";
import Land from "./components/Land";
import { motion } from "framer-motion";
import Roll from "./components/Roll";
import New from "./components/New";
import Landsec from "./components/Landsec";

export default function Home() {
  const industryData = [
    { title: "Technology", value: "1.2M", growth: "+12%", description: "AI, SaaS, Cloud services", image: "/c1.jpeg" },
    { title: "Healthcare", value: "860K", growth: "+8%", description: "Hospitals, Pharma, Biotech", image: "/c2.jpg" },
    { title: "Finance", value: "2.1M", growth: "+5%", description: "Banking, FinTech, Insurance", image: "/c3.jpeg" },
    { title: "Manufacturing", value: "740K", growth: "+6%", description: "Automobile, Electronics", image: "/c4.jpeg" },
    { title: "Retail", value: "1.5M", growth: "+9%", description: "E-commerce, FMCG", image: "/c5.jpeg" },
    { title: "Energy", value: "520K", growth: "+4%", description: "Renewables, Oil & Gas", image: "/c6.jpeg" },
  ];

  const businesses = [
    { title: "Residential PNG", image: "/lp.jpeg" },
    { title: "Commercial PNG", image: "/lp1.jpeg" },
    { title: "Industrial PNG", image: "/lp2.jpeg" },
    { title: "CNG", image: "/lp3.jpeg" },
    { title: "Residential PNG", image: "/lp.jpeg" },
    { title: "Commercial PNG", image: "/lp1.jpeg" },
    { title: "Industrial PNG", image: "/lp2.jpeg" },
    { title: "CNG", image: "/lp3.jpeg" },
    { title: "Residential PNG", image: "/lp.jpeg" },
    { title: "Commercial PNG", image: "/lp1.jpeg" },
    { title: "Industrial PNG", image: "/lp2.jpeg" },
    { title: "CNG", image: "/lp3.jpeg" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/land.jpeg')" }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-white z-0"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 container mx-auto px-12 lg:px-24"
        >
          <div className="max-w-3xl">
            <h2 className="text-white text-2xl md:text-3xl font-light mb-2 tracking-wide uppercase">
              The Standard For
            </h2>

            <h1 className="text-white text-5xl md:text-6xl font-medium leading-tight mb-12">
              Manufacturer Of  <br />
              Pouch Packing Machines
            </h1>

            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#db0f0fd0] hover:bg-blue-600 text-white px-10 py-5 text-lg font-medium transition min-w-50"
              >
                Learn More
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-between border-2 border-[#1D84D1] bg-[#1D84D1]/10 hover:bg-[#1D84D1]/30 text-white px-8 py-5 text-lg font-medium transition min-w-60"
              >
                Moisture Handbook
                <FileText className="ml-4" size={24} />
              </motion.button> */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* INDUSTRY OVERVIEW */}
      {/* <section className="p-8">
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 text-5xl font-bold"
        >
          Industry Overview
        </motion.h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <div className="mt-1 flex justify-between items-center">
                  <span className="text-lg font-bold">{item.value}</span>
                  <span className="text-green-400 text-sm">{item.growth}</span>
                </div>

                <p className="mt-2 text-sm text-gray-200">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
       <Landsec/>
      {/* SUB BUSINESSES */}
       <div className="w-full bg-white py-12">
  <div className="max-w-7xl mx-auto ">
    
    <div className="flex items-start justify-between w-full group cursor-pointer">
      
      {/* Text */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#4b5563]">
          <span className="text-[#4b5563]  py-2 rounded-r-2xl rounded-l-md mr-3">
            Industrial Package
          </span>
          Pouch Filling,
        </h2>

        <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#4b5563]">
           Sealing & Packing Machine
        </h2>
      </div>

      {/* Arrow */}
      <div className="flex items-start">
        <ArrowUpRight
          className="w-20 h-20 text-[#db0f0fd0] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
          strokeWidth={3}
        />
      </div>

    </div>

  </div>
</div>
          <Roll />
       <New/>
      <Land />

      {/* CTA */}
      <section id="contact" className="bg-white text-black py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center" 
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go for Packaging ?
          </h2>

          <p className="text-slate-500 mb-8">
            Partner with VoltRide and be part of India’s clean packaging revolution.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-green-600 px-8 py-4 rounded-lg text-white font-semibold"
          >
            Talk to Our Team
          </motion.button>
        </motion.div>
      </section>

    </main>
  );
}