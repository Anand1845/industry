"use client";
import { useRef } from "react";
import { ArrowRight, FileText, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Land from "./components/Land";
import { motion } from "framer-motion";

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

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
          style={{ backgroundImage: "url('/ind.jpeg')" }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-0" />

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

            <h1 className="text-white text-5xl md:text-7xl font-medium leading-tight mb-12">
              High Temperature <br />
              Humidity Measurement
            </h1>

            <div className="flex flex-wrap gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#1D84D1] hover:bg-blue-600 text-white px-10 py-5 text-lg font-medium transition min-w-50"
              >
                Learn More
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-between border-2 border-[#1D84D1] bg-[#1D84D1]/10 hover:bg-[#1D84D1]/30 text-white px-8 py-5 text-lg font-medium transition min-w-60"
              >
                Moisture Handbook
                <FileText className="ml-4" size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INDUSTRY OVERVIEW */}
      <section className="p-8">
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
      </section>

      {/* XYZ INDUSTRY */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 bg-rose-50 text-gray-700 text-sm font-medium rounded-full">
              Know More
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              XYZ INDUSTRY
            </h1>

            <p className="text-gray-600">
              Established in the year 2013 at Pune, Maharashtra, we
              <span className="font-bold text-gray-800"> XYZ INDUSTRY </span>
              are a Sole Proprietorship based firm engaged as a Wholesale Supplier.
            </p>

            <div className="flex items-center gap-2 pt-4">
              <Star className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-xl italic font-bold text-emerald-800">
                Best industry since 2001
              </span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-[#003d5b] text-white px-8 py-3 rounded-full"
            >
              <ArrowRight className="w-4 h-4" />
              Explore more
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/oil.jpeg" alt="" className="w-full h-100 object-cover" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SUB BUSINESSES */}
      <section className="max-w-7xl mx-auto px-4 py-12 font-sans relative">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
          Sub Businesses
        </h2>

        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {businesses.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-62.5 shrink-0 flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-700">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

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
            Ready to Go for Oil ?
          </h2>

          <p className="text-slate-500 mb-8">
            Partner with VoltRide and be part of India’s clean mobility revolution.
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