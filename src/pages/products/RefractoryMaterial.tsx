// src/pages/products/RefractoryMaterial.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { refractoryProducts } from '@/data/refractoryProducts';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

const categories = ['All', 'High Alumina', 'Castables', 'Insulating', 'Special'];

const RefractoryMaterial = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = activeFilter === 'All' 
    ? refractoryProducts 
    : refractoryProducts.filter(product => product.category === activeFilter);

  // Combined Collection & Breadcrumb Schema
  const refractorySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials/#collection",
        "url": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials",
        "name": "Refractory Materials Catalog | Paragon Refractories & Minerals",
        "description": "High-performance refractory materials catalog including High Alumina Bricks (50%-80%), Fire Clay Bricks, Refractory Castables, Insulating Bricks, and special shapes.",
        "publisher": {
          "@type": "Organization",
          "name": "Paragon Refractories & Minerals"
        },
        "about": {
          "@type": "Thing",
          "name": "Refractory Materials"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials/#breadcrumb",
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
            "name": "Refractory Materials",
            "item": "https://www.paragonrefractoriesandminerals.com/products/refractory-materials"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4f0]">
      <SEO 
        title="Refractory Material Manufacturer | Alumina Bricks & Castables | Paragon Refractories and Minerals"
        description="PRM is a premier refractory material manufacturer in India. We supply high alumina bricks, fire clay bricks, super castables, insulation blocks, and burner blocks for steel mill furnaces."
        keywords="refractory material manufacturer India, high alumina bricks suppliers, fire clay bricks price, super duty castables, furnace insulation blocks, refractory manufacturer West Bengal"
        url="/products/refractory-materials"
        schema={refractorySchema}
      />
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Hero Section — Refractory Theme --- */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#0d1f35]">
          {/* Background Image — Molten Metal / Refractory */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/refractory_hero.jpg"
              alt="Refractory Materials & Molten Metal"
              className="w-full h-full object-cover animate-ken-burns"
            />
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f35]/92 via-[#0d1f35]/65 to-[#0d1f35]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35]/80 via-transparent to-[#0d1f35]/30" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_30px,rgba(196,154,60,0.03)_30px,rgba(196,154,60,0.03)_31px)] pointer-events-none" />
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 border-t-2 border-l-2 border-[#c49a3c]/60" />
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 border-b-2 border-r-2 border-[#c49a3c]/60" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10 pt-36 pb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c49a3c]"></span>
                <span className="text-[#c49a3c] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">Product Catalog</span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c49a3c]"></span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
                Engineered <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c49a3c] via-[#ff6b6b] to-[#ffb3c6]">Refractory</span> Solutions.
              </h1>
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#c49a3c] to-transparent mx-auto mb-5" />
              <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                High-performance thermal protection for the world's most demanding industrial environments. Precision-engineered for extreme temperatures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Introduction Section --- */}
        <section className="container mx-auto px-6 lg:px-24 py-16 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white border border-[#e8e3d8] rounded-2xl p-8 lg:p-12 overflow-hidden shadow-[0_8px_30px_rgba(13,31,53,0.08)] hover:shadow-[0_12px_40px_rgba(13,31,53,0.12)] transition-all duration-500"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#c49a3c] via-[#c49a3c]/50 to-transparent opacity-80" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#0d1f35]/5 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-serif text-[#0d1f35] mb-5 tracking-wide font-bold">
                Premium Refractory Solutions for All Industrial Applications
              </h2>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                Refractory materials are specially engineered products designed to withstand extremely high temperatures, chemical attack, and mechanical stress in industrial environments. These materials are widely used in industries such as steel plants, cement plants, power plants, foundries, and reheating furnaces. <span className="text-[#0d1f35] font-semibold">At Paragon Refractories and Minerals</span>, we are a leading manufacturer and supplier of high-quality refractory materials in India, offering a complete range of products including high alumina bricks, fire bricks, castables, insulation materials, and special refractories. Our refractory products are manufactured using high-grade raw materials and advanced production techniques to ensure durability, thermal stability, and long service life.
              </p>
            </div>
          </motion.div>
        </section>

        {/* --- Filter Bar — Light Industrial --- */}
        <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b-2 border-[#e8e3d8] py-5 mb-12 shadow-[0_4px_20px_rgba(13,31,53,0.08)]">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-[#0d1f35] text-white border border-[#0d1f35] shadow-[0_4px_15px_rgba(13,31,53,0.3)]'
                      : 'bg-transparent text-gray-500 border border-[#e8e3d8] hover:border-[#0d1f35] hover:text-[#0d1f35] hover:bg-[#0d1f35]/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* --- Ultra-Premium Product Grid --- */}
        <section className="container mx-auto px-6 lg:px-24 pb-24">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={product.id}
                  className="group relative bg-white border border-[#e8e3d8] rounded-2xl overflow-hidden hover:border-[#0d1f35]/30 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(13,31,53,0.12)]"
                >
                  <Link 
                    to={`/products/refractory-materials/${product.id}`} 
                    className="flex flex-col flex-grow h-full w-full"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent z-10 pointer-events-none group-hover:opacity-30 transition-opacity duration-500" />
                      
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        />
                      ) : (
                        <ImageIcon className="w-12 h-12 text-gray-400 opacity-40 group-hover:scale-110 transition-transform duration-700" />
                      )}

                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-[#0d1f35] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Spec Content Area */}
                    <div className="p-6 flex flex-col flex-grow relative z-20">
                      <h3 className="text-lg lg:text-xl font-bold text-[#0d1f35] mb-2 group-hover:text-[#0d1f35] transition-colors duration-500 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow font-light line-clamp-3">
                        {product.shortDescription}
                      </p>

                      <div className="bg-[#f5f4f0] rounded-xl p-4 border border-[#e8e3d8] mb-4 group-hover:border-[#0d1f35]/20 transition-colors duration-500">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="border-r border-[#e8e3d8]">
                            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Max Temp</span>
                            <span className="block text-[#0d1f35] font-mono text-xs tracking-tight">{product.specs.maxTemp}</span>
                          </div>
                          <div className="pl-1">
                            <span className="block text-[8px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">Density</span>
                            <span className="block text-[#0d1f35] font-mono text-xs tracking-tight">{product.specs.density}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto block active:scale-[0.98] transition-transform duration-200">
                        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#e8e3d8] group-hover:border-[#0d1f35] group-hover:bg-[#0d1f35] transition-all duration-300">
                          <span className="text-[10px] font-bold text-gray-600 group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300">
                            Explore Specs
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#0d1f35]/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300">
                            <ArrowRight className="w-3.5 h-3.5 text-[#0d1f35] group-hover:text-white transform group-hover:translate-x-0.5 transition-all duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Technical Support Strip --- */}
        <section className="relative py-24 overflow-hidden bg-white border-t border-[#e8e3d8]">
          <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0d1f35] rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_60px_rgba(13,31,53,0.25)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 blur-[80px] pointer-events-none rounded-full" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_20px,rgba(255,255,255,0.02)_20px,rgba(255,255,255,0.02)_40px)]" />

              <div className="md:w-2/3 relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-8 h-[1px] bg-[#c49a3c]"></span>
                  <span className="text-[#c49a3c] font-bold tracking-[0.3em] text-[10px] uppercase">Engineering Support</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                  Need a custom Refractory Material lining design?
                </h2>
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Speak directly with our metallurgical engineers to find the exact formulation for your furnace, ensuring maximum thermal efficiency and lifespan.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-8 md:mt-0 relative z-10">
                <Link to="/contact" className="relative group block w-full md:w-auto">
                  <CustomButton className="relative w-full md:w-auto bg-[#c49a3c] hover:bg-white hover:text-[#c49a3c] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl text-center whitespace-nowrap shadow-2xl">
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