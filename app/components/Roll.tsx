"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const cards = [
  {
    title: "Polestar Mechanical",
    description:
      "Industrial mechanical systems used for automated processing and material handling in production lines.",
    image: "/lp1.jpeg",
    
  },
  {
    title: "Pnuematic Cup Filler",
    description: "A filtration system that removes particles based on weight or density differences.",
    image: "/lp2.jpeg",
    
  },
  {
    title: "Weight Filler",
    description:
      "A screw-based filtration system that moves and separates solid materials from liquids.",
    image: "/lp3.jpeg",
    
  },
  {
    title: "Auger Filler",
    description:
      "A screw-based filtration system that moves and separates solid materials from liquids.",
    image: "/lp4.jpeg",
  },
   {
    title: "Pepsi Machine",
    description:
      "A beverage dispensing machine that mixes syrup, carbonated water, and ice to serve soft drinks.",
    image: "/lp4.jpeg",
  },
   {
    title: "Milk",
    description:
      "A nutrient-rich dairy liquid used as a base ingredient in food processing and beverage production",
    image: "/lp4.jpeg",
  },
   {
    title: "Oil",
    description:
      "A lubricating or edible liquid used in food processing, machinery operation, or industrial applications.",
    image: "/lp4.jpeg",
  },
];

export default function SolutionsSection() {
  const loopCards = [...cards, ...cards];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="relative w-full bg-white py-24 overflow-hidden"
    >
      {/* MAIN CONTAINER WITH LEFT & RIGHT PADDING */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16  md:px-12 lg:px-5">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          className="w-full md:w-1/3 z-10"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-3xl font-bold text-gray-800 leading-tight mb-6 mt-8"
          >
            Innovative Industrial Machinery &  <br />Packaging Solutions
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-xl mb-8 mt-3"
          >
            A strong commitment to innovation, quality, and customer satisfaction, the company helps industries improve productivity and streamline their production processes.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 border rounded-full hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 border rounded-full hover:bg-gray-100 transition"
            >
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT SLIDER */}
        <motion.div
          variants={fadeUp}
          className="relative w-full md:w-2/3 h-115"
        >
          {/* Blue background */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute right-[-10%] top-0 w-[115%] h-full bg-white rounded-tl-[120px]"
          />

          {/* Slider */}
          <div className="relative z-10 overflow-hidden h-full flex items-center">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="min-w-[320px] bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={card.image}
                      alt={card.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">

                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                      {card.description}
                    </p>

                    <motion.a
                      whileHover={{ x: 5 }}
                      href="#"
                      className="flex items-center gap-2 text-blue-700 font-semibold"
                    >
                      Know More
                      <motion.span whileHover={{ x: 4 }}>
                        <ExternalLink size={16} />
                      </motion.span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

    </motion.section>
  );
}