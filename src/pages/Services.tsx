import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Settings, PenTool as Tool, Factory, CheckCircle2 } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactStrip from '@/components/sections/ContactStrip';
import heroBg from '@/assets/images/cta-bg.jpg';

const servicesList = [
  {
    title: "Reheating Furnace Maintenance",
    icon: <Flame className="w-8 h-8 text-[#e63946]" />,
    description: "We specialize in reheating furnace maintenance and shutdowns, including walking beam, walking hearth, and pusher-type furnaces, ensuring precise execution during planned and emergency shutdowns. Our experienced teams handle refractory inspection, relining, mechanical repairs, and performance restoration, minimizing downtime and production losses.",
  },
  {
    title: "Boiler Furnace Maintenance",
    icon: <Settings className="w-8 h-8 text-[#e63946]" />,
    description: "In addition, we offer boiler furnace maintenance and shutdown services, covering refractory repairs, insulation replacement, mechanical component servicing, and safety compliance checks to support reliable and energy-efficient boiler operations.",
  },
  {
    title: "Kiln Maintenance",
    icon: <Tool className="w-8 h-8 text-[#e63946]" />,
    description: "Our expertise also extends to kiln maintenance and shutdown services, where we manage refractory lining repairs, structural maintenance, and alignment work for continuous and batch kilns operating under extreme thermal conditions.",
  },
  {
    title: "All Industrial Furnaces",
    icon: <Factory className="w-8 h-8 text-[#e63946]" />,
    description: "Beyond specific furnace types, we provide all kinds of industrial furnace maintenance services, including heat treatment furnaces, melting furnaces, and process furnaces across steel, power, cement, foundry, and process industries. From routine preventive maintenance to complete shutdown management, our services are executed with a strong focus on safety, quality, schedule adherence, and long-term performance.",
  }
];

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation Area */}
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0f172a]">
          <div className="absolute inset-0 opacity-20">
            <img src={heroBg} alt="Services Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-sm font-bold uppercase tracking-widest mb-4"
            >
              What We Do
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our <span className="text-[#e63946]">Services</span>
            </motion.h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium"
            >
              <strong className="text-gray-900">Paragon Refractories and Minerals</strong> provides comprehensive industrial furnace maintenance and shutdown services designed to ensure safe operation, maximum efficiency, and extended equipment life across all types of furnaces.
            </motion.p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {servicesList.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative bg-white hover:bg-[#1e293b] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(230,57,70,0.15)] transition-all duration-700 ease-in-out border border-gray-100 hover:border-[#e63946]/30 overflow-hidden cursor-default"
                >
                  {/* Top Animated Accent Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e63946] to-red-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out" />
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-xl bg-gray-50 group-hover:bg-white/5 flex items-center justify-center mb-6 transition-colors duration-700 ease-in-out border border-transparent group-hover:border-white/10">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-700 ease-in-out">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-700 ease-in-out">
                    {service.description}
                  </p>
                  
                  {/* Checklist Elements */}
                  <ul className="mt-8 space-y-3 pt-6 border-t border-gray-100 group-hover:border-white/10 transition-colors duration-700 ease-in-out">
                    <li className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-gray-300 transition-colors duration-700 ease-in-out">
                      <CheckCircle2 className="w-5 h-5 text-[#e63946] mr-3 shrink-0" /> 
                      Performance Restoration
                    </li>
                    <li className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-gray-300 transition-colors duration-700 ease-in-out">
                      <CheckCircle2 className="w-5 h-5 text-[#e63946] mr-3 shrink-0" /> 
                      Minimized Downtime
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Strip */}
        <ContactStrip />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;