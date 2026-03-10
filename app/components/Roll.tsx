"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const cards = [
  {
    title: "Drives & Automation",
    description:
      "Empowering intelligent motion with advanced automation solutions.",
    image: "/lp1.jpeg",
    icon: "⚙️",
  },
  {
    title: "Railways",
    description: "Advanced railway solutions powering India's rail network.",
    image: "/lp2.jpeg",
    icon: "🚆",
  },
  {
    title: "Consumer Products",
    description:
      "Durable fans, pumps and appliances engineered for everyday comfort.",
    image: "/lp3.jpeg",
    icon: "🏠",
  },
  {
    title: "Industrial Systems",
    description:
      "High performance motors and alternators for industrial applications.",
    image: "/lp4.jpeg",
    icon: "🏭",
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
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6"
          >
            Solutions for <br /> Your Packing
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg mb-8"
          >
            Precision Packing. Powerful Performance.
            Engineered for speed, accuracy, and reliability in every pouch.<br/>
            Pack Faster. Pack Better.
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
            className="absolute right-[-10%] top-0 w-[115%] h-full bg-blue-700 rounded-tl-[120px]"
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
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="absolute -top-6 right-6 w-12 h-12 bg-white rounded-full shadow flex items-center justify-center text-green-600"
                    >
                      {card.icon}
                    </motion.div>

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