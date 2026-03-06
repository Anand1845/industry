"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Cont from "../components/Cont";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: "DUCTING",
      description:
        "Our custom fabricated stainless steel ducting products are highly reliable and distributed across the world.",
      image: "/od.jpeg",
    },
    {
      title: "STACKS",
      description:
        "Our stacks are designed to maintain air quality emissions in compliance with modern requirements for your facility.",
      image: "/os.jpeg",
    },
    {
      title: "TANKS",
      description:
        "We specialize in the fabrication of custom industrial tanks of all kinds including stainless steel tanks.",
      image: "/ot.jpeg",
    },
    {
      title: "STRUCTURAL",
      description:
        "Our primary business is providing design, fabrication, and erection of structural steel for commercial or industrial buildings and bridges.",
      image: "/oss.jpeg",
    },
  ];

  return (
    <>
      <Cont />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-semibold text-5xl mb-4 text-center"
      >
        WE HAVE
      </motion.h1>

      {/* SERVICES GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="relative h-64 group overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            <div className="relative h-full p-8 flex flex-col justify-center">
              <h2 className="text-white text-4xl font-black mb-2 tracking-tighter">
                {service.title}
              </h2>

              <p className="text-gray-200 text-sm max-w-xs leading-relaxed">
                {service.description}
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="absolute bottom-6 right-6 bg-orange-600 p-3 hover:bg-orange-500 transition-colors"
              >
                <ArrowRight className="text-white w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="min-h-screen bg-black text-white">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 text-center bg-[url('/oil-bg.jpg')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl mx-auto px-6"
          >
            <h1 className="text-5xl font-bold mb-6">
              Contact Our Energy Experts
            </h1>

            <p className="text-lg text-gray-300">
              Reliable Oil & Gas Solutions. Get in touch for partnerships,
              inquiries, or technical consultation.
            </p>
          </motion.div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          className="py-20 px-6 md:px-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              variants={fadeUp}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700"
            >
              <h2 className="text-3xl font-semibold mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            {/* CONTACT INFO */}
            <motion.div variants={fadeUp} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl">
                <h2 className="text-3xl font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 text-gray-300">
                  <div className="flex items-center gap-4">
                    <Phone className="text-white" />
                    <span>+1 (800) 123-4567</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-white" />
                    <span>info@youroilcompany.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-white" />
                    <span>Houston, Texas, USA</span>
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
                <iframe
                  src="https://www.google.com/maps?q=Houston&output=embed"
                  width="100%"
                  height="300"
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
}