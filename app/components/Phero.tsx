export default function ProductHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/lp4.jpeg"
          alt="Industrial Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Powerful Industrial Solutions for the Future
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Engineered for performance, reliability, and scalability — 
          built to transform modern manufacturing workflows.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition">
            Request Demo
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}