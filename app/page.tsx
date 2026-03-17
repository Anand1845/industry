"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Land from "./components/Land";
import Roll from "./components/Roll";
import New from "./components/New";
import Landsec from "./components/Landsec";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
      
      {/* Background Image with Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 30%, transparent 70%), url('https://thumbs.dreamstime.com/b/automatic-packaging-machine-working-pile-cardboard-boxes-interior-spacious-warehouse-background-work-116610728.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl ml-10 md:ml-20">
        
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold text-blue-950 leading-tight"
        >
          Premium Packaging Solutions & high quality Industry Machines
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-[#b8312e] hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-md transition-all shadow-lg uppercase tracking-wide"
        >
          Customize Yours Today
        </motion.button>

      </div>
    </section>

      {/* LANDING SECTION */}
      <Landsec />

      {/* SUB BUSINESSES */}
      <div className="w-full bg-white py-12">
        <div className="max-w-8xl mx-auto px-20">
          <div className="flex items-start justify-between w-full group cursor-pointer">
            {/* Text */}
            <div className="flex flex-col space-y-2">
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-[#4b5563]">
                <span className="text-[#4b5563] py-2 rounded-r-2xl rounded-l-md mr-3">
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
                className="w-20 h-20 text-[#b8312e] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* COMPONENTS */}
      <Roll />
      <New />
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
            Partner with VoltRide and be part of India’s clean packaging
            revolution.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-[#b8312e] px-8 py-4 rounded-lg text-white font-semibold"
          >
            Talk to Our Team
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}