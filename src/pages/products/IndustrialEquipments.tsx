// src/pages/products/IndustrialEquipments.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Cpu, ShieldCheck, Flame } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import CustomButton from '@/components/ui/CustomButton';
import { industrialEquipments } from '@/data/industrialEquipments';

const categories = ['All', 'Furnaces', 'Energy Recovery', 'Combustion', 'Material Handling'];

const IndustrialEquipments = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEquipments = activeFilter === 'All'
    ? industrialEquipments
    : industrialEquipments.filter(e => e.category.toLowerCase() === activeFilter.toLowerCase());

  const equipmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Industrial Furnace Equipment & Machinery",
        "description": "Heavy-duty reheating furnaces, metallic recuperators, industrial blowers, combustion burners, and billet handling systems engineered by PRM.",
        "brand": {
          "@type": "Brand",
          "name": "Paragon Refractories and Minerals"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Paragon Refractories and Minerals",
          "url": "https://www.paragonrefractoriesandminerals.com"
        }
      },
      {
        "@type": "BreadcrumbList",
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
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Industrial Equipment Manufacturer | Reheating Furnaces & Recuperators | PRM"
        description="Discover heavy-duty reheating furnaces, metallic recuperators, industrial blowers, combustion burners, and billet handling systems engineered by PRM for steel plants."
        keywords="reheating furnace manufacturer, industrial furnace equipment India, metallic recuperator suppliers, coal pulverizer price, billet ejector supplier, combustion systems West Bengal"
        url="/products/industrial-equipment"
        schema={equipmentSchema}
      />
      <Navbar />

      <main className="flex-grow">
        
        {/* ══════════════════════════════════════════════════════════════
            1. BRIGHT ARCHITECTURAL HERO SECTION (CENTER-ALIGNED)
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-18 border-b border-slate-200/80 overflow-hidden bg-slate-50">
          
          {/* Subtle Full-Bleed Industrial Background Image with Frosted Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/industrial_equipment_hero.jpg"
              alt="Paragon Industrial Furnace & Thermal Machinery"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            {/* Luminous Frosted Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-slate-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/80" />
          </div>

          {/* Blueprint Grid & Warm Ambient Radial Glows */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none z-0" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-amber-400/15 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="container mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
            
            {/* Breadcrumb Navigation (Center-Aligned) */}
            <nav aria-label="breadcrumb" className="mb-5 flex justify-center">
              <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
                <li>
                  <Link to="/" className="hover:text-[#090D16] transition-colors">Home</Link>
                </li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-slate-400">Products</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <li className="text-[#D97706] font-semibold">Industrial Equipment</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Category Eyebrow Pill (Center-Aligned) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D97706] font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.9)]" />
                <span>Heavy Industrial Machinery • Turnkey Systems</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                Industrial Furnace &amp;{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Thermal Hardware.
                </span>
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Heavy-duty reheating furnaces, metallic radiation recuperators, precision dual-fuel burners, and automated billet handling systems engineered for non-stop industrial productivity.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>HEAT RECOVERY: <strong>UP TO 40% FUEL SAVINGS</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Cpu className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>CAPACITY: <strong>10 TO 80+ TPH BILLET FURNACES</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>EXECUTION: <strong>TURNKEY EPC &amp; RETROFITS</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* --- Architectural Overview Panel --- */}
        <section className="container mx-auto px-5 sm:px-6 lg:px-24 py-8 sm:py-12">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
          >
            <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-4 lg:pb-0 lg:pr-8">
              <span className="font-mono text-[10.5px] text-[#D97706] font-bold uppercase tracking-[0.2em] block mb-2">
                Engineering Capabilities
              </span>
              <h2 className="font-display text-2xl font-bold text-[#090D16] tracking-tight leading-snug">
                Heavy Furnace Engineering for Modern Rolling Mills
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Industrial reheating equipment must deliver continuous duty cycle reliability with optimal fuel efficiency and minimal thermal waste. We manufacture complete walking beam, walking hearth, and pusher furnaces, complemented by metallic radiation recuperators, high-pressure blowers, and automatic billet charging and ejection systems.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Filter Bar — Precision Segmented Control --- */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-y border-slate-200/90 py-4 mb-12 shadow-xs">
          <div className="container mx-auto px-5 sm:px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              {categories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-5 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
                      isActive
                        ? 'bg-[#090D16] text-white shadow-sm ring-1 ring-[#090D16]'
                        : 'bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:text-[#090D16]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Equipment Cards Grid --- */}
        <section id="first-product" className="container mx-auto px-5 sm:px-6 lg:px-24 pb-16 sm:pb-24 scroll-mt-28">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-9"
          >
            <AnimatePresence>
              {filteredEquipments.map((equipment) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  key={equipment.id}
                  className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#D97706]/60 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <Link 
                    to={`/products/industrial-equipment/${equipment.id}`} 
                    className="flex flex-col flex-grow h-full w-full"
                  >
                    {/* Equipment Photo Showcase */}
                    <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                      <img 
                        src={equipment.image} 
                        alt={equipment.title} 
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('industrial_equipment_hero')) {
                            target.src = '/images/industrial_equipment_hero.jpg';
                          }
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                      <div className="absolute top-3.5 right-3.5 z-20">
                        <span className="bg-white/95 backdrop-blur-md text-[#090D16] border border-slate-200/90 font-mono text-[9px] font-bold px-3 py-1 rounded shadow-xs uppercase tracking-[0.16em]">
                          {equipment.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 md:p-7 flex flex-col flex-grow relative z-20 border-t border-slate-100">
                      <h3 className="font-display text-lg lg:text-xl font-bold text-[#090D16] mb-2 leading-tight group-hover:text-[#D97706] transition-colors duration-200">
                        {equipment.title}
                      </h3>
                      
                      <p className="font-ui text-slate-500 text-xs sm:text-sm leading-relaxed font-normal line-clamp-2 mb-6">
                        {equipment.desc}
                      </p>

                      {/* Technical Specs 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                        {Object.entries(equipment.specs).slice(0, 4).map(([key, value], idx) => (
                          <div key={idx} className="bg-slate-50 rounded-lg p-2.5 border border-slate-200/80 flex flex-col gap-0.5 group-hover:border-amber-500/20 transition-colors">
                            <span className="text-[8px] text-slate-400 font-mono font-bold uppercase tracking-wider truncate">{key}</span>
                            <span className="text-[#090D16] text-xs font-mono font-bold truncate">{value as string}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Link */}
                      <div className="flex items-center justify-between w-full px-4 py-3 bg-slate-50 border border-slate-200 group-hover:border-[#090D16] group-hover:bg-[#090D16] transition-all duration-200 rounded-lg mt-auto">
                        <span className="font-mono text-[10px] font-bold text-slate-700 group-hover:text-white uppercase tracking-[0.18em] transition-colors">
                          Technical Specs &amp; Sizing
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transform group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Technical Consultation Strip --- */}
        <section className="relative py-16 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="container mx-auto px-5 sm:px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-sm"
            >
              <div className="md:w-2/3">
                <div className="inline-flex items-center gap-2 font-mono text-[10.5px] font-bold text-[#D97706] tracking-[0.2em] uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  Custom Engineering &amp; EPC Sizing
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#090D16] mb-3 leading-tight tracking-tight">
                  Require Custom Sizing for Your Rolling Mill?
                </h2>
                <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                  Our thermal engineering design group calculates exact furnace tonnage, hearth travel speed, recuperator surface area, and combustion blower CFM for your production target.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-start md:justify-end shrink-0 w-full md:w-auto">
                <Link to="/contact" className="w-full md:w-auto">
                  <CustomButton className="w-full md:w-auto bg-[#090D16] hover:bg-[#D97706] text-white font-ui font-bold py-4 px-8 uppercase tracking-[0.16em] text-xs transition-all duration-300 rounded-md shadow-sm hover:shadow-lg hover:shadow-amber-500/20">
                    Schedule Engineering Review
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