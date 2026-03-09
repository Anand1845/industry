"use client";
import React from "react";
import {
  Ruler,
  Users,
  BrickWall,
  ClipboardList,
  Home,
  PenTool,
  Check,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Manage from "../components/Manage";
import { motion } from "framer-motion";
import Ourj from "../components/Ourj";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <motion.button
    whileHover={{ x: 5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex items-center gap-2 bg-[#0a1d37] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all group"
  >
    {text}
    <MoveRight
      size={18}
      className="group-hover:translate-x-1 transition-transform"
    />
  </motion.button>
);

const FeatureList = () => (
  <ul className="space-y-3 mb-8">
    {[
      "Pellen tesque libero ut justo",
      "Lorem ipsum dolor sit amet elit",
      "Pellen tesque libero ut justo",
    ].map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="flex items-center gap-2 text-gray-600"
      >
        <Check size={16} className="text-yellow-500 font-bold" />
        {item}
      </motion.li>
    ))}
  </ul>
);

export default function ConstructionPage() {
  const services = [
    { title: "Exploration Services", description: "We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand.", icon: <Ruler className="w-6 h-6 text-white" />, bgColor: "bg-zinc-800" },
    { title: "Drilling Services", description: "We have a long list of professional contractors, whom our engineers and architects enjoy working with on most of our projects!", icon: <Users className="w-6 h-6 text-white" />, bgColor: "bg-amber-500" },
    { title: "Production Services", description: "Our customers love the pace and quality tempo that we show during each of the principal construction processes!", icon: <BrickWall className="w-6 h-6 text-white" />, bgColor: "bg-amber-500" },
    { title: "Refining Services", description: "Construction project management is essential. We use the most time-efficient life cycle methods for that.", icon: <ClipboardList className="w-6 h-6 text-white" />, bgColor: "bg-amber-500" },
    { title: "Transportation & Storage", description: "Oftentimes physical and functional essence of any construction project needs to be represented digitally in a 3D model format.", icon: <Home className="w-6 h-6 text-white" />, bgColor: "bg-amber-500" },
    { title: "Distribution & Marketing", description: "If a project is not too complex, we may hire a design-build contractor to make the construction timeline shorter.", icon: <PenTool className="w-6 h-6 text-white" />, bgColor: "bg-amber-500" },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lp.jpeg')" }} />
        <motion.div className="relative z-10 max-w-4xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-4">INDUSTRIAL</h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-8 uppercase">See how a 10-stories tower's being built,<br />in a time-lapse!</p>
          <motion.button whileHover={{ scale: 1.05 }} className="bg-amber-500 hover:bg-amber-600 transition-colors text-black font-bold py-3 px-8 text-xs uppercase tracking-widest">See our recent projects</motion.button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto p-8 text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <header className="mb-8">
              <h2 className="text-3xl font-bold">About <span className="text-orange-500 underline underline-offset-8 decoration-2">Industry</span></h2>
            </header>
            <div className="flex gap-6 mb-6">
              <span className="text-7xl font-bold text-orange-500 leading-none">28</span>
              <div className="pt-2">
                <h3 className="font-bold text-lg tracking-tight">YEARS IN CLOSED DIE HOT FORGINGS</h3>
              </div>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>Founded on the tradition and philosophy of steadfast commitment to achieving <strong>"Total Customer Satisfaction"</strong> through excellent quality, on time deliveries and competitive pricing.</p>
              <p>The Company has grown steadily in strength and stature to attain its present recognition of being one of the largest exporters of forgings in India in its product range and has created a niche in the global market.</p>
              <p>With its presence pan India and near to the customers, MMF is placing itself as a one stop shop for the closed die forgings needs of both domestic and international customers.</p>
              <p className="italic">"Forging Excellence" – in terms of quality of products and relationship with stakeholders is the theme of the company.</p>
            </div>
            <hr className="my-10 border-gray-200" />
          </motion.div>

          <motion.div className="relative group" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <div className="relative w-full h-130 overflow-hidden shadow-2xl">
              <Image src="/c4.jpeg" alt="Vidyashanka" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-amber-500 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold text-zinc-800 uppercase tracking-tighter">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="flex items-start space-x-4 hover:scale-105 transition-transform">
              <div className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${service.bgColor} shadow-lg`}>{service.icon}</div>
              <div>
                <h3 className="text-sm font-bold text-zinc-700 mb-3 tracking-tight">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-20 px-4 md:px-20 space-y-32">
        {/* Section 1 */}
        <motion.section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight mb-6">We Provide Full Range Of Premium Industrial Services</h2>
            <p className="text-gray-500 leading-relaxed mb-8">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Lorem ipsum dolor sit amet elit.</p>
            <Button text="Read More" />
          </div>
          <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl">
            <Image src="/c2.jpg" alt="Industrial machinery" fill className="object-cover" />
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image src="/c5.jpeg" alt="Engineers looking at blueprints" fill className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-[#0a1d37] leading-tight mb-6">Planning And Design. Modern Equipment.</h2>
            <p className="text-gray-500 mb-6">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.</p>
            <FeatureList />
            <Button text="Read More" />
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-yellow-500"></span>
              <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
              <span className="w-8 h-0.5 bg-yellow-500"></span>
            </div>
            <h2 className="text-4xl font-bold text-[#0a1d37] leading-tight mb-6">Dream Big With Get More Inspiring Solutions From Here.</h2>
            <p className="text-gray-500 mb-6">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Learn more about our work!</p>
            <FeatureList />
            <Button text="Read More" />
          </div>
          <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl">
            <Image src="/c6.jpeg" alt="Industrial worker" fill className="object-cover" />
          </div>
        </motion.section>

        <Manage />
        <h1 className="text-4xl font-medium">OUR JOURNEY</h1>
         <Ourj/>
        {/* SUSTAINABILITY SECTION */}
        <motion.section className="relative min-h-125 w-full flex items-center justify-center py-10 px-4 sm:px-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/lp4.jpeg')" }}>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
          </div>
          <div className="relative z-10 max-w-6xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 shadow-sm border border-white/20">
            <h1 className="text-2xl md:text-3xl font-normal text-slate-800 mb-8 border-b border-slate-200 pb-4">Sustainability and Corporate Social Responsibility - <span className="italic">The Journey of Hope</span></h1>
            <div className="space-y-6 text-slate-700 leading-relaxed text-base md:text-lg">
              <p>The experience of joy of sharing is beyond description. Beyond work, many ABI Associates are actively associated with various formal and informal initiatives wherein they participate in community reach out.</p>
              <p>As a company, we embrace our responsibility to leave a trail of happiness and sustainability in the communities in which we work and live. More than 50% of our campus is maintained green. One of the recent efforts is growing up <strong>Miyawaki forest</strong> adjacent to our plants. At a formal level, we run a Grammer school, <strong>Vidya Peetam</strong> to impart primary and secondary education to children.</p>
              <p>Our Technical school, <strong>Matrix</strong>, is open to all youth in the neighbourhood. Here we impart the basics and nuances of modern manufacturing methods. In addition, we run a 32-bed hospital near our plants. As a matter of abundant care, we adhere to several non-mandatory policies.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}