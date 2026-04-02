// src/pages/products/RefractoryMaterial.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { refractoryProducts } from '@/data/refractoryProducts';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'High Alumina', 'Castables', 'Insulating', 'Basic'];

const RefractoryMaterial = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All' 
    ? refractoryProducts 
    : refractoryProducts.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#080d14]">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Cinematic Hero Section --- */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-[#e63946] rounded-full blur-[150px] pointer-events-none" 
          />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#457b9d]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#e63946]"></span>
                <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
                  Product Catalog
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#e63946]"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Engineered <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] via-[#ff6b6b] to-[#ffb3c6]">
                  Refractory
                </span> Solutions.
              </h1>
              
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                High-performance thermal protection for the world's most demanding industrial environments. Precision-engineered for extreme temperatures and severe conditions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Sleek Minimalist Filter Bar --- */}
        <section className="sticky top-0 z-40 bg-[#080d14]/90 backdrop-blur-xl border-b border-white/5 py-5 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-6 lg:px-24">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
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
                  className="group relative bg-[#0d1520]/50 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(230,57,70,0.12)]"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-[#0a111a]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520]/50 via-[#080d14]/40 to-transparent z-10" />
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Spec Content Area */}
                  <div className="p-6 flex flex-col flex-grow relative z-20">
                    <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-[#e63946] transition-colors duration-500 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow font-light">
                      {product.shortDescription}
                    </p>

                    <div className="bg-black/20 rounded-2xl p-4 border border-white/5 mb-4 group-hover:bg-black/30 transition-colors duration-500">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="border-r border-white/5">
                          <span className="block text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">Max Temp</span>
                          <span className="block text-white font-mono text-xs tracking-tight">{product.specs.maxTemp}</span>
                        </div>
                        <div className="pl-1">
                          <span className="block text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-1">Density</span>
                          <span className="block text-white font-mono text-xs tracking-tight">{product.specs.density}</span>
                        </div>
                      </div>
                    </div>

                    {/* --- UPDATED RESPONSIVE PREMIUM LINK --- */}
                    {/* Added active:scale-[0.98] for touch feedback and lg: prefixes for desktop hover effects */}
                    <a href={`/products/refractory-material/${product.id}`} className="mt-auto block active:scale-[0.98] transition-transform duration-200">
                      <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 lg:border-transparent lg:group-hover:border-white/10 bg-white/[0.03] lg:bg-transparent lg:group-hover:bg-white/[0.03] transition-all duration-300">
                        <span className="text-[10px] font-bold text-white lg:text-gray-400 lg:group-hover:text-white uppercase tracking-[0.2em] transition-colors duration-300">
                          Explore Specs
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#e63946]/20 lg:bg-transparent lg:group-hover:bg-[#e63946] flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 text-[#e63946] lg:group-hover:text-white transform lg:group-hover:translate-x-0.5 transition-all duration-300" />
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e63946]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Technical Support Strip --- */}
        <section className="relative py-24 overflow-hidden bg-[#080d14]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#e63946]/10 blur-[150px] pointer-events-none rounded-full" />

          <div className="container mx-auto px-6 lg:px-24 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.02] border border-white/5 backdrop-blur-2xl rounded-3xl p-10 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#e63946] to-transparent opacity-70"></div>

              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-8 h-[1px] bg-[#e63946]"></span>
                  <span className="text-[#e63946] font-bold tracking-[0.3em] text-[10px] uppercase">
                    Engineering Support
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                  Need a custom refractory lining design?
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Speak directly with our metallurgical engineers to find the exact formulation for your furnace, ensuring maximum thermal efficiency and lifespan.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-8 md:mt-0">
                <a href="/contact" className="relative group block w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e63946] to-[#ffb3c6] rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
                  <CustomButton className="relative w-full md:w-auto bg-[#0d1520] hover:bg-[#1a2332] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl border border-white/10 group-hover:border-[#e63946]/50 text-center whitespace-nowrap shadow-2xl">
                    Contact Engineering
                  </CustomButton>
                </a>
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