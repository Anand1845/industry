import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

export default function IndustrialServices() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 font-sans">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='font-semibold text-5xl mb-4'
      >
        WE HAVE
      </motion.h1>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
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

              <p className="text-gray-200 text-sm max-w-70 leading-relaxed">
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

      {/* Bottom Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-orange-600 block uppercase">
            We'll handle any
          </span>
          <span className="text-orange-600/80 uppercase">
            Intricate custom design
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-sm leading-7">
          <div className="space-y-4">
            <p>
              Steel and Fabrication Industry takes great pride in our
              industry-leading custom metal fabrication services. This is the
              core of our business and it's a process we take seriously. We
              work on small, large, and heavy components.
            </p>

            <p>
              Our team of experts provides over a dozen metal fabrication
              services. We work with a large variety of metals and raw
              material forms. Our loyal customers come to us from a diverse
              array of industries.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              Steel and Fabrication Industry offers the most cost-effective,
              high-quality engineering and design services around. With our
              consulting, designing, prototyping, and other expert services,
              we consistently save customers time and money.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-slate-800 text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-slate-700 transition-colors"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* another section */}
      <div className="flex flex-col md:flex-row min-h-125 w-full font-sans mt-4">

        {/* Posters */}
        <motion.section
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#E87B1E] w-full md:w-[35%] p-8 md:p-12 text-white"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold border-l-4 border-white pl-4 uppercase tracking-wider">
              Posters
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-4 py-1 flex items-center gap-2 text-sm font-semibold rounded-sm hover:bg-gray-100 transition"
            >
              MORE <ChevronRight size={16} />
            </motion.button>
          </div>

          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative aspect-square w-full overflow-hidden rounded-sm"
            >
              <img
                src="/lp4.jpeg"
                alt="Biomass Plant"
                className="object-cover w-full h-96"
              />
            </motion.div>

            <div className="space-y-3">
              <h3 className="font-bold text-lg leading-tight uppercase">
                Clean Affordable Energy for Rural Households
              </h3>

              <p className="text-sm leading-relaxed opacity-90">
                Husk Power System uses novel biomass gratification technology
                to convert abundant rice husk into combustible gases.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Campaigns */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-[#0A1D56] w-full md:w-[65%] p-8 md:p-12 text-white"
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold border-l-4 border-[#E87B1E] pl-4 uppercase tracking-wider">
              XYZ Campaigns
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-4 py-1 flex items-center gap-2 text-sm font-semibold rounded-sm hover:bg-gray-100 transition"
            >
              MORE <ChevronRight size={16} />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <motion.article
              whileHover={{ y: -6 }}
              className="space-y-4"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-white">
                <img
                  src="/dis.jpeg"
                  alt="Discover India"
                  className="object-contain w-full h-full p-2"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-[#E87B1E] font-bold text-lg">
                  Discover India
                </h4>

                <p className="text-sm opacity-80 line-clamp-2">
                  A campaign designed to showcase the country's rich heritage,
                  vibrant ...
                </p>
              </div>
            </motion.article>

            <motion.article
              whileHover={{ y: -6 }}
              className="space-y-4"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <img
                  src="/cer.jpeg"
                  alt="Aatmanirbhar Bharat Utsav"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <h4 className="text-[#E87B1E] font-bold text-lg">
                  Aatmanirbhar Bharat Utsav 2024
                </h4>

                <p className="text-sm opacity-80 line-clamp-2">
                  Union Minister of External Affairs, Dr. S. Jaishankar and
                  Union Commerce an...
                </p>
              </div>
            </motion.article>

          </div>
        </motion.section>

      </div>

    </section>
  );
}