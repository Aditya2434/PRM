// src/pages/products/IndustrialEquipments.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { ArrowRight, Settings } from 'lucide-react';
import { equipmentsData } from '@/data/industrialEquipments';

const categories = ['All', 'Furnaces', 'Burners', 'Handling', 'Systems', 'Valves', 'Accessories'];

const IndustrialEquipments = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEquipments = activeFilter === 'All' 
    ? equipmentsData 
    : equipmentsData.filter(item => item.category === activeFilter.toUpperCase());

  return (
    <div className="min-h-screen flex flex-col bg-[#080d14]">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Cinematic Hero Section --- */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#e63946] rounded-full blur-[150px] pointer-events-none" 
          />
          <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-[#1e3a5f] rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#e63946]"></span>
                <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase flex items-center gap-2">
                  <Settings className="w-4 h-4" /> Heavy Machinery
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#e63946]"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Industrial <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] via-[#ff6b6b] to-[#ffb3c6]">
                  Equipments.
                </span>
              </h1>
              
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                Precision-engineered manufacturing hardware. From state-of-the-art reheating furnaces to high-efficiency combustion systems, built for maximum reliability and output.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Premium Introduction Section (Above Filter) --- */}
        <section className="container mx-auto px-6 lg:px-24 pb-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#0d1520]/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 lg:p-12 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#e63946] via-[#ff6b6b] to-transparent opacity-80" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#e63946]/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-serif text-white mb-5 tracking-wide">
                Engineering Excellence for Demanding Environments
              </h2>
              <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">
                Industrial equipment is essential for ensuring efficient, reliable, and high-performance operations in demanding industrial environments such as steel plants, rolling mills, cement plants, power plants, foundries, and reheating furnaces. <span className="text-white font-medium">At Paragon Refractories and Minerals</span>, we are a leading manufacturer and supplier of industrial equipment in India, offering a comprehensive range of solutions including reheating furnaces, industrial burners, recuperators, blowers, fuel heating & pumping units, and material handling systems. With strong expertise in both refractory materials and furnace engineering, we deliver integrated, energy-efficient, and performance-driven solutions tailored to specific industrial requirements. Our equipment is manufactured using high-grade materials and advanced engineering techniques to ensure durability, precision, and long service life under continuous and high-temperature operating conditions.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Sleek Minimalist Filter Bar --- */}
        <section className="sticky top-0 z-40 bg-[#080d14]/90 backdrop-blur-xl border-b border-white/5 py-5 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    activeFilter === category
                      ? 'bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/40 shadow-[0_0_20px_rgba(230,57,70,0.15)]'
                      : 'bg-transparent text-gray-500 border border-transparent hover:border-white/10 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Grid --- */}
        <section className="container mx-auto px-6 lg:px-24 pb-24">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            <AnimatePresence>
              {filteredEquipments.map((equipment) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={equipment.id}
                  className="group relative bg-[#0a111a] border border-white/10 rounded-2xl overflow-hidden hover:border-[#e63946]/40 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(230,57,70,0.15)]"
                >
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0a111a]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a111a] via-transparent to-transparent z-10 opacity-80" />
                    <img 
                      src={equipment.image} 
                      alt={equipment.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100 group-hover:scale-110"
                    />
                    <div className="absolute top-5 right-5 z-20">
                      <span className="bg-[#e63946] text-white text-[9px] font-bold px-3 py-1.5 rounded-md uppercase tracking-[0.2em] shadow-lg">
                        {equipment.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 border-t border-white/5 group-hover:border-[#e63946]/30 transition-colors duration-500">
                    <h3 className="text-xl font-serif text-white mb-3 leading-tight group-hover:text-[#e63946] transition-colors duration-500">
                      {equipment.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-2 mb-6">
                      {equipment.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
                      {Object.entries(equipment.specs).slice(0, 4).map(([key, value], idx) => (
                        <div key={idx} className="bg-white/[0.02] rounded-xl p-3 border border-white/5 flex flex-col gap-1 transition-colors duration-300 group-hover:border-white/10">
                          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest truncate">{key}</span>
                          <span className="text-white text-xs font-mono truncate">{value as string}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to={`/products/industrial-equipments/${equipment.id}`} 
                      className="flex items-center justify-between w-full px-5 py-4 bg-white/[0.02] border border-white/10 hover:border-[#e63946] hover:bg-[#e63946] group/btn transition-all duration-300 rounded-xl"
                    >
                      <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em] transition-colors duration-300">
                        View Full Details
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/20">
                        <ArrowRight className="w-3.5 h-3.5 text-white transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Custom Engineering CTA --- */}
        <section className="relative py-24 overflow-hidden bg-[#080d14]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0d1520] to-[#0a111a] border border-white/10 rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#e63946]/10 blur-[100px] pointer-events-none rounded-full" />

              <div className="md:w-2/3 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] uppercase">
                    Turnkey Projects
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Require custom industrial equipment?
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Our design bureau can customize dimensions, configurations, and automation systems tailored entirely to your specific manufacturing plant requirements.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-6 md:mt-0 relative z-10">
                <Link to="/contact" className="relative group block w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e63946] to-[#ffb3c6] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                  <CustomButton className="relative w-full md:w-auto bg-[#e63946] hover:bg-[#d62828] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl text-center shadow-2xl">
                    Consult Our Engineers
                  </CustomButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default IndustrialEquipments;