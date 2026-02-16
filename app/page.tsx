"use client";
import { useRef } from "react";
import { ArrowRight, FileText, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Land from "./components/Land";

export default function Home() {
  const industryData = [
    {
      title: "Technology",
      value: "1.2M",
      growth: "+12%",
      description: "AI, SaaS, Cloud services",
      image: "/c1.jpeg",
    },
    {
      title: "Healthcare",
      value: "860K",
      growth: "+8%",
      description: "Hospitals, Pharma, Biotech",
      image: "/c2.jpg",
    },
    {
      title: "Finance",
      value: "2.1M",
      growth: "+5%",
      description: "Banking, FinTech, Insurance",
      image: "/c3.jpeg",
    },
    {
      title: "Manufacturing",
      value: "740K",
      growth: "+6%",
      description: "Automobile, Electronics",
      image: "/c4.jpeg",
    },
    {
      title: "Retail",
      value: "1.5M",
      growth: "+9%",
      description: "E-commerce, FMCG",
      image: "/c5.jpeg",
    },
    {
      title: "Energy",
      value: "520K",
      growth: "+4%",
      description: "Renewables, Oil & Gas",
      image: "/c6.jpeg",
    },
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

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/ind.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-0" />

        <div className="relative z-10 container mx-auto px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="text-white text-2xl md:text-3xl font-light mb-2 tracking-wide uppercase">
              The Standard For
            </h2>
            <h1 className="text-white text-5xl md:text-7xl font-medium leading-tight mb-12">
              High Temperature <br />
              Humidity Measurement
            </h1>

            <div className="flex flex-wrap gap-6">
              <button className="bg-[#1D84D1] hover:bg-blue-600 text-white px-10 py-5 text-lg font-medium transition min-w-50">
                Learn More
              </button>

              <button className="flex items-center justify-between border-2 border-[#1D84D1] bg-[#1D84D1]/10 hover:bg-[#1D84D1]/30 text-white px-8 py-5 text-lg font-medium transition min-w-60">
                Moisture Handbook
                <FileText className="ml-4" size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY OVERVIEW */}
      <section className="p-8">
        <h1 className="mb-6 text-5xl font-bold">Industry Overview</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryData.map((item, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </section>

      {/* XYZ INDUSTRY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 bg-rose-50 text-gray-700 text-sm font-medium rounded-full">
              Know More
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
              XYZ INDUSTRY
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established in the year 2013 at Pune, Maharashtra, we
                <span className="font-bold text-gray-800">
                  {" "}
                  XYZ INDUSTRY{" "}
                </span>
                are a Sole Proprietorship based firm, engaged as a Wholesale
                Supplier of Oil Heater, Solar Street Light, Solar Rooftop
                Systems and more.
              </p>

              <p>
                Our products are high in demand due to their premium quality,
                seamless finish, advanced technology, eco-friendliness and
                affordable prices.
              </p>

              <p>
                Furthermore, we ensure timely delivery, transparent dealings and
                dedicated after-sales support.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <Star className="w-5 h-5 text-red-500 fill-red-500" />
              <span className="text-xl italic font-bold text-emerald-800">
                Best industry since 2001
              </span>
            </div>

            <button className="flex items-center gap-2 bg-[#003d5b] text-white px-8 py-3 rounded-full hover:bg-[#002d44] transition-colors">
              <ArrowRight className="w-4 h-4" />
              Explore more
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/oil.jpeg"
                alt=""
                className="w-full h-100 object-cover"
              />
            </div>

            <div className="absolute -top-10 -right-4 md:-right-8 bg-rose-50 p-6 rounded-2xl shadow-lg max-w-50 border border-white">
              <h3 className="text-3xl font-bold text-[#003d5b] mb-2">100%</h3>
              <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                Use Latest Technlogy
              </p>
              <p className="text-[10px] leading-tight text-gray-500">
                We deliver quality Oil products and services.
              </p>
            </div>

            <div className="absolute -bottom-10 -left-4 md:-left-8 bg-rose-50 p-6 rounded-2xl shadow-lg max-w-50 border border-white">
              <h3 className="text-3xl font-bold text-[#003d5b] mb-2">25+</h3>
              <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                States Include
              </p>
              <p className="text-[10px] leading-tight text-gray-500">
                Serving since 1999 across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUB BUSINESSES */}
      <section className="max-w-7xl mx-auto px-4 py-12 font-sans relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
        Sub Businesses
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {businesses.map((item, index) => (
          <div
            key={index}
            className="min-w-62.5 shrink-0 flex flex-col gap-4 group cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-700">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
     
     <Land />
     <div className="flex flex-col md:flex-row min-h-125 w-full font-sans">
      
      {/* --- Left Section: Posters --- */}
      <section className="bg-[#E87B1E] w-full md:w-[35%] p-8 md:p-12 text-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold border-l-4 border-white pl-4 uppercase tracking-wider">
            Posters
          </h2>
          <button className="bg-white text-black px-4 py-1 flex items-center gap-2 text-sm font-semibold rounded-sm hover:bg-gray-100 transition">
            MORE <ChevronRight size={16} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            {/* Replace with your actual image path */}
            <img 
              src="/lp4.jpeg" 
              alt="Biomass Plant"
              className="object-cover w-full h-96"
            />
          </div>
          <div className="space-y-3">
            <h3 className="font-bold text-lg leading-tight uppercase">
              Clean Affordable Energy for Rural Households
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              Husk Power System uses novel biomass gratification technology to convert abundant rice husk into combustible gases.
            </p>
          </div>
        </div>
      </section>

      {/* --- Right Section: Campaigns --- */}
      <section className="bg-[#0A1D56] w-full md:w-[65%] p-8 md:p-12 text-white">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold border-l-4 border-[#E87B1E] pl-4 uppercase tracking-wider">
            XYZ Campaigns
          </h2>
          <button className="bg-white text-black px-4 py-1 flex items-center gap-2 text-sm font-semibold rounded-sm hover:bg-gray-100 transition">
            MORE <ChevronRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Campaign 1 */}
          <article className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-white">
              <img 
                src="/dis.jpeg" 
                alt="Discover India"
                className="object-contain w-full h-full p-2"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-[#E87B1E] font-bold text-lg">Discover India</h4>
              <p className="text-sm opacity-80 line-clamp-2">
                A campaign designed to showcase the country's rich heritage, vibrant ...
              </p>
            </div>
          </article>

          {/* Campaign 2 */}
          <article className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm">
              <img 
                src="/cer.jpeg" 
                alt="Aatmanirbhar Bharat Utsav"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-[#E87B1E] font-bold text-lg">Aatmanirbhar Bharat Utsav 2024</h4>
              <p className="text-sm opacity-80 line-clamp-2">
                Union Minister of External Affairs, Dr. S. Jaishankar and Union Commerce an...
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
    
      {/* CTA */}
      <section id="contact" className="bg-white text-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go for Oil ?
          </h2>
          <p className="text-slate-500 mb-8">
            Partner with VoltRide and be part of India’s clean mobility revolution.
          </p>
          <button className="bg-green-600 px-8 py-4 rounded-lg text-white font-semibold hover:bg-green-700">
            Talk to Our Team
          </button>
        </div>
      </section>
    </main>
  );
}
