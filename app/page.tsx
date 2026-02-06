import { FileText } from "lucide-react";
import Image from "next/image";

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

  return (
    <main>
      {/* HERO */}
       <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex items-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/ind.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-0" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-12 lg:px-24">
          <div className="max-w-3xl">
            <h2 className="text-white text-2xl md:text-3xl font-light mb-2 tracking-wide uppercase">
              The Standard For
            </h2>
            <h1 className="text-white text-5xl md:text-7xl font-medium leading-tight mb-12">
              High Temperature <br />
              Humidity Measurement
            </h1>

            {/* CTA Buttons */}
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
    </main>

       <main className="p-8">
      <h1 className="mb-6 text-5xl font-bold items-center">Industry Overview</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industryData.map((item, index) => (
          <div
            key={index}
            className="group relative h-64 overflow-hidden rounded-xl shadow-lg"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Slide-up content */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white
              translate-y-full group-hover:translate-y-0
              transition-transform duration-500 ease-out"
            >
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
    </main>

      {/* INDUSTRY */}
      <section id="industry" className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why EVs Are Booming in India 🇮🇳
          </h2>
          <p className="text-slate-600 mb-10">
            India is one of the fastest-growing EV markets, driven by policy
            support, fuel costs, and sustainability goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-green-600">₹10L+ Cr</p>
              <p className="text-slate-600">EV investments</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-green-600">40%</p>
              <p className="text-slate-600">Lower running cost</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <p className="text-3xl font-bold text-green-600">Net Zero</p>
              <p className="text-slate-600">Carbon vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Go Electric?
          </h2>
          <p className="text-slate-300 mb-8">
            Partner with VoltRide and be part of India’s clean mobility revolution.
          </p>
          <button className="bg-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-700">
            Talk to Our Team
          </button>
        </div>
      </section>

    </main>
  );
}
