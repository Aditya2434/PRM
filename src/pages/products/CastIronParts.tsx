import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronRight } from 'lucide-react';

const productsData = [
  { id: 1, title: 'Industrial Casting Gears', category: 'GEARS', image: 'https://images.unsplash.com/photo-1607507981507-62f7961d15de?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'High Pressure Valves', category: 'VALVES', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Heavy Duty Furnace Molds', category: 'MOLDS', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Transmission Gears', category: 'GEARS', image: 'https://images.unsplash.com/photo-161ef71412089-c5c8f18ea6f6?auto=format&fit=crop&q=80&w=800' },
  { id: 5, title: 'Industrial Gate Valves', category: 'VALVES', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' },
  { id: 6, title: 'Custom Alloy Molds', category: 'MOLDS', image: 'https://images.unsplash.com/photo-1565439390214-747192329e46?auto=format&fit=crop&q=80&w=800' },
];

const categories = ['ALL', 'GEARS', 'VALVES', 'MOLDS'];

const CastIronParts = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProducts = activeFilter === 'ALL' 
    ? productsData 
    : productsData.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* UPDATED: Bigger Hero Section with Background Image */}
        <section className="relative bg-[#0f172a] py-32 md:py-48 overflow-hidden flex items-center min-h-[50vh]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607507981507-62f7961d15de?auto=format&fit=crop&q=80&w=1920')" }}
          ></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="container mx-auto px-12 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              Cast Iron Parts
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#e63946]">Products</span>
              <ChevronRight className="w-4 h-4 text-[#e63946]" />
              <span className="text-white">Cast Iron Parts</span>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-12 lg:px-24">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-[#1e3a5f] mb-6">Durable Components for Severe Environments</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our cast iron components are fabricated utilizing advanced metallurgical processes to ensure exceptional wear resistance and longevity. Designed specifically to complement our refractory and furnace systems, these robust parts are guaranteed to maintain structural integrity under continuous industrial stress.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`text-xs md:text-sm font-bold tracking-[0.1em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                    activeFilter === category ? 'text-[#e63946] border-[#e63946]' : 'text-gray-500 border-transparent hover:text-[#1e3a5f] hover:border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm cursor-pointer h-80"
                  >
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/95 via-[#1e3a5f]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-[#e63946] text-[10px] font-bold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.category}</span>
                      <h3 className="text-white text-xl font-serif font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{product.title}</h3>
                      <div className="w-12 h-1 bg-[#e63946] mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150"></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CastIronParts;