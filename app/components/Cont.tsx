import React from 'react';
import { Menu, Monitor, BookOpen } from 'lucide-react';

const BusinessHero = () => {
  const features = [
    {
      title: "Responsive Layout",
      icon: <Menu size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.."
    },
    {
      title: "Creative Design",
      icon: <Monitor size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.."
    },
    {
      title: "Easy to Setup",
      icon: <BookOpen size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.."
    }
  ];

  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <section 
        className="relative h-125 flex items-center justify-center bg-cover bg-center text-white text-center px-4"
        style={{ backgroundImage: `url('/lp4.jpeg')` }} 
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            XYZ OIL INDUSTRY
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle Icon */}
                <div className="w-24 h-24 bg-[#333] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {feature.title}
                </h3>
                {/* Blue Accent Line */}
                <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
                
                <p className="text-gray-500 text-sm leading-6">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessHero;