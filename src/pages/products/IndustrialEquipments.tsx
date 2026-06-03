// src/pages/products/IndustrialEquipments.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredEquipments = activeFilter === 'All' 
    ? equipmentsData 
    : equipmentsData.filter(item => item.category === activeFilter.toUpperCase());

  // Combined Collection & Breadcrumb Schema
  const equipmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/industrial-equipment/#collection",
        "url": "https://www.paragonrefractoriesandminerals.com/products/industrial-equipment",
        "name": "Industrial Reheating Furnaces & Equipment Catalog | PRM",
        "description": "Discover heavy-duty industrial reheating furnaces, recuperators, combustion burners, and billet handling systems engineered by PRM.",
        "publisher": {
          "@type": "Organization",
          "name": "Paragon Refractories & Minerals"
        },
        "about": {
          "@type": "Thing",
          "name": "Industrial Equipment"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/industrial-equipment/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.paragonrefractoriesandminerals.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Industrial Equipment",
            "item": "https://www.paragonrefractoriesandminerals.com/products/industrial-equipment"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4f0]">
      <SEO 
        title="Reheating Furnace & Industrial Equipment Manufacturer | Paragon Refractories and Minerals"
        description="Discover heavy-duty reheating furnaces, metallic recuperators, industrial blowers, combustion burners, and billet handling systems engineered by PRM for steel plants."
        keywords="reheating furnace manufacturer, industrial furnace equipment India, metallic recuperator suppliers, coal pulverizer price, billet ejector supplier, combustion systems West Bengal"
        url="/products/industrial-equipment"
        schema={equipmentSchema}
      />
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Hero Section — Industrial Light Theme --- */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#0f172a]">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/industrial_equipment_hero.jpg"
              alt="Industrial Equipment Manufacturing Floor"
              className="w-full h-full object-cover animate-ken-burns"
            />
          </div>
          {/* Multi-layer overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/92 via-[#0f172a]/65 to-[#0f172a]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-[#0f172a]/30" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_30px,rgba(230,57,70,0.03)_30px,rgba(230,57,70,0.03)_31px)] pointer-events-none" />
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 border-t-2 border-l-2 border-[#e63946]/60" />
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 border-b-2 border-r-2 border-[#e63946]/60" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10 pt-36 pb-20 text-center">
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
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
                Industrial <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] via-[#ff6b6b] to-[#ffb3c6]">
                  Equipments.
                </span>
              </h1>
              
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#e63946] to-transparent mx-auto mb-5" />
              
              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                Precision-engineered manufacturing hardware. From state-of-the-art reheating furnaces to high-efficiency combustion systems, built for maximum reliability and output.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Introduction Section --- */}
        <section className="container mx-auto px-6 lg:px-24 py-16 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white border border-[#e8e3d8] rounded-2xl p-8 lg:p-12 overflow-hidden shadow-[0_8px_30px_rgba(30,58,95,0.08)] group hover:shadow-[0_12px_40px_rgba(30,58,95,0.12)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#e63946] via-[#e63946]/50 to-transparent opacity-80" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#1e3a5f]/5 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-serif text-[#1e3a5f] mb-5 tracking-wide font-bold">
                Engineering Excellence for Demanding Environments
              </h2>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                Industrial equipment is essential for ensuring efficient, reliable, and high-performance operations in demanding industrial environments such as steel plants, rolling mills, cement plants, power plants, foundries, and reheating furnaces. <span className="text-[#1e3a5f] font-semibold">At Paragon Refractories and Minerals</span>, we are a leading manufacturer and supplier of industrial equipment in India, offering a comprehensive range of solutions including reheating furnaces, industrial burners, recuperators, blowers, fuel heating & pumping units, and material handling systems. With strong expertise in both refractory materials and furnace engineering, we deliver integrated, energy-efficient, and performance-driven solutions tailored to specific industrial requirements.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Filter Bar — Light Industrial --- */}
        <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b-2 border-[#e8e3d8] py-5 mb-12 shadow-[0_4px_20px_rgba(30,58,95,0.08)]">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-[#1e3a5f] text-white border border-[#1e3a5f] shadow-[0_4px_15px_rgba(30,58,95,0.3)]'
                      : 'bg-transparent text-gray-500 border border-[#e8e3d8] hover:border-[#1e3a5f] hover:text-[#1e3a5f] hover:bg-[#1e3a5f]/5'
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
                  className="group relative bg-white border border-[#e8e3d8] rounded-2xl overflow-hidden hover:border-[#1e3a5f]/30 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(30,58,95,0.15)]"
                >
                  {/* ENTIRE CARD WRAPPED IN LINK */}
                  <Link 
                    to={`/products/industrial-equipment/${equipment.id}`} 
                    className="flex flex-col flex-grow h-full w-full"
                  >
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                      <img 
                        src={equipment.image} 
                        alt={equipment.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                      <div className="absolute top-5 right-5 z-20">
                        <span className="bg-[#e63946] text-white text-[9px] font-bold px-3 py-1.5 rounded-md uppercase tracking-[0.2em] shadow-lg">
                          {equipment.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 border-t border-[#e8e3d8] group-hover:border-[#1e3a5f]/20 transition-colors duration-500">
                      <h3 className="text-xl font-serif text-[#0f172a] mb-3 leading-tight group-hover:text-[#1e3a5f] transition-colors duration-500">
                        {equipment.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-light line-clamp-2 mb-6">
                        {equipment.desc}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-8 mt-auto">
                        {Object.entries(equipment.specs).slice(0, 4).map(([key, value], idx) => (
                          <div key={idx} className="bg-[#f5f4f0] rounded-xl p-3 border border-[#e8e3d8] flex flex-col gap-1 transition-colors duration-300 group-hover:border-[#1e3a5f]/20">
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest truncate">{key}</span>
                            <span className="text-[#0f172a] text-xs font-mono truncate">{value as string}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between w-full px-5 py-4 bg-[#f5f4f0] border border-[#e8e3d8] group-hover:border-[#1e3a5f] group-hover:bg-[#1e3a5f] transition-all duration-300 rounded-xl mt-auto">
                        <span className="text-[10px] font-bold text-[#0f172a] group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300">
                          View Full Details
                        </span>
                        <div className="w-6 h-6 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">
                          <ArrowRight className="w-3.5 h-3.5 text-[#1e3a5f] group-hover:text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- CTA — Light Industrial --- */}
        <section className="relative py-24 overflow-hidden bg-white border-t border-[#e8e3d8]">
          <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1e3a5f] border border-[#1e3a5f] rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_60px_rgba(30,58,95,0.25)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[80px] pointer-events-none rounded-full" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_40px)]" />

              <div className="md:w-2/3 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] uppercase">
                    Turnkey Projects
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Require custom Industrial Heating & Furnace solutions?
                </h2>
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Our design bureau can customize dimensions, configurations, and automation systems tailored entirely to your specific manufacturing plant requirements.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-6 md:mt-0 relative z-10">
                <Link to="/contact" className="relative group block w-full md:w-auto">
                  <CustomButton className="relative w-full md:w-auto bg-[#e63946] hover:bg-white hover:text-[#e63946] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl text-center shadow-2xl">
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