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

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button className="flex items-center gap-2 bg-[#0a1d37] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all group">
    {text}
    <MoveRight
      size={18}
      className="group-hover:translate-x-1 transition-transform"
    />
  </button>
);

const FeatureList = () => (
  <ul className="space-y-3 mb-8">
    {[
      "Pellen tesque libero ut justo",
      "Lorem ipsum dolor sit amet elit",
      "Pellen tesque libero ut justo",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-2 text-gray-600">
        <Check size={16} className="text-yellow-500 font-bold" />
        {item}
      </li>
    ))}
  </ul>
);

export default function ConstructionPage() {
  const services = [
    {
      title: "PRE-CONSTRUCTION SERVICES",
      description:
        "We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand.",
      icon: <Ruler className="w-6 h-6 text-white" />,
      bgColor: "bg-zinc-800",
    },
    {
      title: "GENERAL CONTRACTING",
      description:
        "We have a long list of professional contractors, whom our engineers and architects enjoy working with on most of our projects!",
      icon: <Users className="w-6 h-6 text-white" />,
      bgColor: "bg-amber-500",
    },
    {
      title: "CONSTRUCTION SERVICES",
      description:
        "Our customers love the pace and quality tempo that we show during each of the principal construction processes!",
      icon: <BrickWall className="w-6 h-6 text-white" />,
      bgColor: "bg-amber-500",
    },
    {
      title: "CONSTRUCTION MANAGEMENT",
      description:
        "Construction project management is essential. We use the most time-efficient life cycle methods for that.",
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      bgColor: "bg-amber-500",
    },
    {
      title: "BUILDING INFORMATION MODELING (BIM)",
      description:
        "Oftentimes physical and functional essence of any construction project needs to be represented digitally in a 3D model format.",
      icon: <Home className="w-6 h-6 text-white" />,
      bgColor: "bg-amber-500",
    },
    {
      title: "DESIGN-BUILD",
      description:
        "If a project is not too complex, we may hire a design-build contractor to make the construction timeline shorter.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      bgColor: "bg-amber-500",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white px-4">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/lp.jpeg')",
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest mb-4">
            INDUSTRIAL
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide mb-8 uppercase">
            See how a 10-stories tower's being built,
            <br /> in a time-lapse!
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 transition-colors text-black font-bold py-3 px-8 text-xs uppercase tracking-widest">
            See our recent projects
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-amber-500 mx-auto mb-4"></div>
          <h2 className="text-3xl font-bold text-zinc-800 uppercase tracking-tighter">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div
                className={`shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${service.bgColor} shadow-lg`}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-700 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-20 px-4 md:px-20 space-y-32">
        {/* Section 1 */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1d37] leading-tight mb-6">
              We Provide Full Range Of Premium Industrial Services
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Lorem ipsum dolor sit amet elit.
            </p>
            <Button text="Read More" />
          </div>
          <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/c2.jpg"
              alt="Industrial machinery"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="/c5.jpeg"
              alt="Engineers looking at blueprints"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold text-[#0a1d37] leading-tight mb-6">
              Planning And Design. Modern Equipment.
            </h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo.
            </p>
            <FeatureList />
            <Button text="Read More" />
          </div>
        </section>
          {/* Section 3 */}
          <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-yellow-500"></span>
            <span className="text-yellow-500 font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <span className="w-8 h-0.5 bg-yellow-500"></span>
          </div>
          <h2 className="text-4xl font-bold text-[#0a1d37] leading-tight mb-6">
            Dream Big With Get More Inspiring Solutions From Here.
          </h2>
          <p className="text-gray-500 mb-6">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Learn more about our work!
          </p>
          <FeatureList />
          <Button text="Read More" />
        </div>
        <div className="relative h-100 w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="/c6.jpeg" 
            alt="Industrial worker" 
            fill 
            className="object-cover"
          />
        </div>
      </section>
      </div>
    </main>
  );
}
