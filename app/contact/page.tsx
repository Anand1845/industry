"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Cont from "../components/Cont";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <>
    <Cont/>
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* HERO SECTION */}
      <section className="py-20 text-center bg-[url('/oil-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-yellow-500">
            Contact Our Energy Experts
          </h1>
          <p className="text-lg text-gray-300">
            Reliable Oil & Gas Solutions. Get in touch for partnerships,
            inquiries, or technical consultation.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700">
            <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
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
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl">
              <h2 className="text-3xl font-semibold mb-6 text-yellow-500">
                Contact Information
              </h2>

              <div className="space-y-6 text-gray-300">
                <div className="flex items-center gap-4">
                  <Phone className="text-yellow-500" />
                  <span>+1 (800) 123-4567</span>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-yellow-500" />
                  <span>info@youroilcompany.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-yellow-500" />
                  <span>Houston, Texas, USA</span>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="300"
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
