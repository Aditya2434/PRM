// src/pages/products/RefractoryMaterial.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ImageIcon, ShieldCheck, Flame, Layers } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SEO from '@/components/SEO';
import CustomButton from '@/components/ui/CustomButton';
import { refractoryProducts } from '@/data/refractoryProducts';

const categories = ['All', 'High Alumina', 'Castables', 'Insulating', 'Special'];

const RefractoryMaterial = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? refractoryProducts 
    : refractoryProducts.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  const refractorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "High Alumina Refractory Bricks & Materials",
        "description": "Premium high alumina bricks, dense fire clay bricks, castables, and custom burner blocks designed for temperatures up to 1850°C.",
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
            "name": "Products",
            "item": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Refractory Materials",
            "item": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white text-slate-900 selection:bg-amber-500 selection:text-white">
      <SEO 
        title="Refractory Material Manufacturer | Alumina Bricks & Castables | Paragon Refractories and Minerals"
        description="PRM is a premier refractory material manufacturer in India. We supply high alumina bricks, fire clay bricks, super duty castables, insulation blocks, and burner blocks for steel mill furnaces."
        keywords="refractory material manufacturer India, high alumina bricks suppliers, fire clay bricks price, super duty castables, furnace insulation blocks, refractory manufacturer West Bengal"
        url="/products/refractory-materials"
        schema={refractorySchema}
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
              src="/images/refractory_hero.jpg"
              alt="Paragon Refractories High-Performance Thermal Materials"
              className="w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.05] opacity-20"
            />
            {/* Soft Luminous Frosted Gradient Overlays */}
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
                <li className="text-[#D97706] font-semibold">Refractory Materials</li>
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
                <span>Technical Product Catalog • Thermal Protection</span>
              </div>

              {/* Authoritative Display Headline (Center-Aligned) */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-6 leading-[1.10] tracking-tight">
                High-Performance{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#B45309]">
                  Refractory Systems
                </span>{" "}
                &amp; Materials.
              </h1>

              {/* Narrative Subtext (Center-Aligned) */}
              <p className="font-ui text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto mb-8">
                Extreme-temperature thermal protection engineered for continuous industrial operations up to 1850°C. Manufactured to stringent metallurgical standards for steel plants, rolling mills, and heavy reheating furnaces.
              </p>

              {/* Verified Badges Strip (Center-Aligned) */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1">
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Flame className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>MAX TEMP: <strong>UP TO 1850°C</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <Layers className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>AL₂O₃ GRADE: <strong>50% TO 80%+</strong></span>
                </div>
                <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl px-4 py-2.5 shadow-sm hover:border-amber-400/60 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>CERTIFICATION: <strong>ISO 9001:2015</strong></span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Hairline Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        </section>

        {/* --- Architectural Introduction Panel --- */}
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
                Material Standards
              </span>
              <h2 className="font-display text-2xl font-bold text-[#090D16] tracking-tight leading-snug">
                Engineered for Punishing Furnace Atmospheres
              </h2>
            </div>
            <div className="lg:w-2/3">
              <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
                Refractory compounds endure continuous high temperatures, molten slag abrasion, and extreme mechanical loading. Our catalog spans high alumina bricks, dense fire clay bricks, super duty castables, ceramic fiber blankets, and custom precast burner blocks tailored specifically to walking beam and pusher-type reheating furnaces.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Category Filter Bar — Precision Segmented Control --- */}
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

        {/* --- Precision Technical Product Grid --- */}
        <section id="first-product" className="container mx-auto px-5 sm:px-6 lg:px-24 pb-16 sm:pb-24 scroll-mt-28">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  key={product.id}
                  className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#D97706]/60 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <Link
                    to={`/products/refractory-materials/${product.id}`}
                    className="flex flex-col flex-grow h-full w-full"
                  >
                    {/* Studio Image Showcase */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/70 border-b border-slate-100 flex items-center justify-center p-6">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('High%20Alumina.webp') && !target.src.includes('High Alumina.webp')) {
                              target.src = '/images/refractory/High Alumina.webp';
                            }
                          }}
                          className="max-h-40 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-slate-400 opacity-40 group-hover:scale-110 transition-transform duration-500" />
                      )}

                      {/* Floating Category Tag */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-white/95 backdrop-blur-md text-[#090D16] border border-slate-200/90 font-mono text-[9px] font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-[0.15em]">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Technical Spec & Details Area */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <h3 className="font-display text-base lg:text-lg font-bold text-[#090D16] mb-2 group-hover:text-[#D97706] transition-colors duration-200 leading-tight">
                        {product.name}
                      </h3>

                      <p className="font-ui text-slate-500 text-xs leading-relaxed mb-5 flex-grow font-normal line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Specs Data Box */}
                      <div className="bg-slate-50 rounded-lg p-3 border border-slate-200/80 mb-4 group-hover:border-amber-500/30 transition-colors">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="border-r border-slate-200 pr-2">
                            <span className="block text-[8px] text-slate-400 font-mono font-bold uppercase tracking-[0.16em] mb-0.5">Max Temp</span>
                            <span className="block text-[#090D16] font-mono text-xs font-bold">{product.specs.maxTemp}</span>
                          </div>
                          <div className="pl-1">
                            <span className="block text-[8px] text-slate-400 font-mono font-bold uppercase tracking-[0.16em] mb-0.5">Density</span>
                            <span className="block text-[#090D16] font-mono text-xs font-bold">{product.specs.density}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Link */}
                      <div className="mt-auto block pt-1">
                        <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-slate-200 group-hover:border-[#090D16] group-hover:bg-[#090D16] transition-all duration-200">
                          <span className="font-mono text-[10px] font-bold text-slate-700 group-hover:text-white uppercase tracking-[0.16em] transition-colors">
                            Technical Data
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transform group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Technical Consultation Strip (Light Architectural Accent) --- */}
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
                  Custom Furnace Formulation
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#090D16] mb-3 leading-tight tracking-tight">
                  Need a custom refractory lining configuration?
                </h2>
                <p className="font-ui text-slate-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl">
                  Consult directly with our ceramic and metallurgical engineers to formulate brick grades and castables tailored to your furnace thermal cycle and load profiles.
                </p>
              </div>

              <div className="md:w-1/3 flex justify-start md:justify-end shrink-0 w-full md:w-auto">
                <Link to="/contact" className="w-full md:w-auto">
                  <CustomButton className="w-full md:w-auto bg-[#090D16] hover:bg-[#D97706] text-white font-ui font-bold py-4 px-8 uppercase tracking-[0.16em] text-xs transition-all duration-300 rounded-md shadow-sm hover:shadow-lg hover:shadow-amber-500/20">
                    Contact Engineering
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

export default RefractoryMaterial;