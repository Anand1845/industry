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
{/* 
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
          </motion.div> */}
        </motion.section>

        {/* CONTACT SECTION */}
       <motion.section
  className="py-10 px-6 md:px-20 bg-white text-black "
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Get In Touch
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      We'd love to hear from you. Send us a message and our team will get back
      to you as soon as possible.
    </p>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-12">

    {/* CONTACT INFO */}
    <motion.div
      variants={fadeUp}
      className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
    >
      <h3 className="text-3xl font-semibold mb-10">Contact Information</h3>

      <div className="space-y-8">

        <div className="flex items-center gap-5 group">
          <div className="bg-blue-500/20 p-4 rounded-xl group-hover:bg-blue-500 transition">
            <Phone className="text-blue-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-black text-sm">Phone</p>
            <p className="text-lg font-medium">+1 (800) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-5 group">
          <div className="bg-yellow-500/20 p-4 rounded-xl group-hover:bg-yellow-500 transition">
            <Mail className="text-yellow-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-black text-sm">Email</p>
            <p className="text-lg font-medium">info@youroilcompany.com</p>
          </div>
        </div>

        <div className="flex items-center gap-5 group">
          <div className="bg-green-500/20 p-4 rounded-xl group-hover:bg-green-500 transition">
            <MapPin className="text-green-400 group-hover:text-white" />
          </div>
          <div>
            <p className="text-black text-sm">Location</p>
            <p className="text-lg font-medium">Houston, Texas, USA</p>
          </div>
        </div>

      </div>
    </motion.div>


    {/* FORM */}
    <motion.div
      variants={fadeUp}
      className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
    >
      <h3 className="text-3xl font-semibold mb-8">Send a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-4 text-black rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl text-black bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
          className="w-full p-4 rounded-xl text-black bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:scale-[1.02] transition transform py-4 rounded-xl font-semibold shadow-lg"
        >
          Submit Inquiry
        </button>

      </form>
    </motion.div>

  </div>


  {/* MAP BELOW */}
  <motion.div
    variants={fadeUp}
    className="mt-20 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
  >
    <iframe
      src="https://www.google.com/maps?q=Houston&output=embed"
      width="100%"
      height="400"
      loading="lazy"
      className="w-full"
    ></iframe>
  </motion.div>

</motion.section>
      </div>
    </>
  );
}