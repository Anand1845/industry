import React from "react";
import { Leaf, BarChart3, Globe, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const floatLeaf: Variants = {
  animate: {
    y: [0, -12, 0],
    rotate: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const SustainabilityBanner: React.FC = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-[#e8f5e9] py-8 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#2e7d32 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Left Illustration */}
      <motion.div
        variants={item}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-8 border-[#2e7d32] rounded-full border-t-transparent"
          />

          {/* Pulse Ring */}
          <div className="absolute inset-0 border-12 border-[#4caf50] rounded-full opacity-20 animate-pulse" />

          {/* Globe */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Globe
              size={240}
              className="text-[#4caf50] opacity-90"
              strokeWidth={1}
            />
          </motion.div>

          {/* Floating Leaf 1 */}
          <motion.div
            variants={floatLeaf}
            animate="animate"
            className="absolute -top-4 left-10"
          >
            <Leaf size={48} className="text-[#2e7d32]" fill="#2e7d32" />
          </motion.div>

          {/* Floating Leaf 2 */}
          <motion.div
            variants={floatLeaf}
            animate="animate"
            className="absolute top-12 -left-6"
          >
            <Leaf size={64} className="text-[#81c784]" fill="#81c784" />
          </motion.div>
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div variants={item} className="w-full md:w-1/2 relative z-10">
        <motion.h1
          variants={item}
          className="text-4xl md:text-5xl font-bold text-[#455a64] mb-6"
        >
          Engineering a Greener Future
        </motion.h1>

        <motion.p
          variants={item}
          className="text-[#546e7a] text-lg leading-relaxed mb-10 max-w-xl"
        >
          At CG, sustainability drives every step, from design to delivery. We
          focus on efficient, safe, and circular solutions that reduce
          environmental impact and support a greener future.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group border-2 border-[#a5d6a7] rounded-3xl p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all cursor-pointer"
          >
            <div className="mb-4 p-3 rounded-full border-2 border-[#4caf50]">
              <Leaf className="text-[#2e7d32]" size={32} />
            </div>

            <h3 className="text-[#2e7d32] font-bold mb-4">
              CG's Approach to Sustainability
            </h3>

            <div className="flex items-center text-[#2e7d32] font-semibold text-sm">
              Know more <ArrowUpRight size={16} className="ml-1" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group border-2 border-[#a5d6a7] rounded-3xl p-8 flex flex-col items-center text-center bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all cursor-pointer"
          >
            <div className="mb-4">
              <BarChart3
                className="text-[#2e7d32]"
                size={48}
                strokeWidth={1.5}
              />
            </div>

            <h3 className="text-[#2e7d32] font-bold mb-4">
              Reports and Certifications
            </h3>

            <div className="flex items-center text-[#2e7d32] font-semibold text-sm">
              Know more <ArrowUpRight size={16} className="ml-1" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SustainabilityBanner;