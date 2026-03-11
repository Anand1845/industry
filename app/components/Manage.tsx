import React from "react";
import { ArrowUpRight, Leaf, BarChart3, Settings2 } from "lucide-react";
import { motion } from "framer-motion";

const SustainabilitySection: React.FC = () => {
  return (
    <section className="bg-[#e8f5e9] py-16 px-4 md:px-12 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 border-4 border-[#4CAF50] rounded-full flex items-center justify-center p-8">

            {/* Rotating Machine */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="text-[#4CAF50] flex flex-col items-center"
            >
              <Settings2 size={120} strokeWidth={1} />
              <div className="mt-2 h-20 w-16 border-2 border-[#4CAF50] rounded-sm relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#4CAF50]"></div>
              </div>
            </motion.div>

            {/* Floating Leaf 1 */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 left-10"
            >
              <Leaf className="text-[#4CAF50] fill-[#4CAF50] rotate-[-15deg]" size={32} />
            </motion.div>

            {/* Floating Leaf 2 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-10 -left-2"
            >
              <Leaf className="text-[#4CAF50] fill-[#4CAF50] -rotate-45" size={24} />
            </motion.div>

            {/* Decorative Ring */}
            <div className="absolute -inset-3.5 border-r-4 border-b-4 border-transparent border-r-[#2e7d32] border-b-[#2e7d32] rounded-full opacity-40"></div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#2d4a3e] leading-tight">
            Manufacturing Sustainable Pouch Solutions
          </h2>

          <p className="text-[#4f6a5f] text-lg leading-relaxed max-w-xl">
            At CG Packaging Systems, we're redefining efficiency. Our pouch packing
            machines are designed with material-saving features, energy-efficient
            components, and support for sustainable packaging materials.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">

            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-[#f1f8f3] border border-[#c8e6c9] rounded-3xl p-8 flex-1 flex flex-col items-center text-center cursor-pointer shadow-sm"
            >
              <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                <Leaf className="text-[#2e7d32]" size={28} />
              </div>

              <h3 className="font-bold text-[#2d4a3e] mb-4">
                Sustainable Material Innovations
              </h3>

              <button className="mt-auto flex items-center text-sm font-semibold text-[#2e7d32] hover:underline">
                Know more <ArrowUpRight size={16} className="ml-1" />
              </button>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-[#f1f8f3] border border-[#c8e6c9] rounded-3xl p-8 flex-1 flex flex-col items-center text-center cursor-pointer shadow-sm"
            >
              <div className="bg-white p-3 rounded-full mb-4 shadow-sm">
                <BarChart3 className="text-[#2e7d32]" size={28} />
              </div>

              <h3 className="font-bold text-[#2d4a3e] mb-4">
                Performance & Efficiency Metrics
              </h3>

              <button className="mt-auto flex items-center text-sm font-semibold text-[#2e7d32] hover:underline">
                Know more <ArrowUpRight size={16} className="ml-1" />
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SustainabilitySection;