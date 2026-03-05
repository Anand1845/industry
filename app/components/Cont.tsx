import React, { JSX } from "react";
import { Menu, Monitor, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface Feature {
  title: string;
  icon: JSX.Element;
  desc: string;
}

const BusinessHero: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Responsive Layout",
      icon: <Menu size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Creative Design",
      icon: <Monitor size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Easy to Setup",
      icon: <BookOpen size={32} className="text-white" />,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  // Animation Variants
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const featureContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* Top Hero Section */}
      <motion.section
        className="relative h-125 flex items-center justify-center bg-cover bg-center text-white text-center px-4"
        style={{ backgroundImage: "url('/lp4.jpeg')" }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-white"
        variants={featureContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-24 h-24 bg-[#333] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {feature.title}
                </h3>

                <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>

                <p className="text-gray-500 text-sm leading-6">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BusinessHero;