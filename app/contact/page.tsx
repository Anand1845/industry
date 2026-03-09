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

  return (
    <>
      <Cont />


      <div className="min-h-screen bg-white text-black">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 text-center bg-[url('/oil-bg.jpg')] bg-cover bg-center relative"
        >
          <div className="absolute inset-0 bg-white"></div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-3xl mx-auto px-6"
          >
            <h1 className="text-5xl font-bold mb-6">
              Contact Our Energy Experts
            </h1>

            <p className="text-lg text-black">
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
                  className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
              <div className="bg-white backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl">
                <h2 className="text-3xl font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6 text-black">
                  <div className="flex items-center gap-4">
                    <Phone className="text-black" />
                    <span>+1 (800) 123-4567</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-black" />
                    <span>info@youroilcompany.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="text-black" />
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