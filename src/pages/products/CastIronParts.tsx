// src/pages/products/CastIronParts.tsx
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { ArrowRight, Anvil } from 'lucide-react';

const castIronData = [
  { 
    id: 1, 
    title: 'Industrial Ingot Moulds', 
    category: 'MOULDS', 
    image: 'https://images.unsplash.com/photo-1565439390214-747192329e46?auto=format&fit=crop&q=80&w=800',
    desc: 'High-grade cast iron moulds designed for optimal thermal conductivity and an extended lifecycle in steel plants.'
  },
  { 
    id: 2, 
    title: 'Furnace Bottom Plates', 
    category: 'PLATES', 
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    desc: 'Heavy-duty structural base plates engineered to withstand extreme temperatures and severe mechanical stress.'
  },
  { 
    id: 3, 
    title: 'Slag Pots', 
    category: 'POTS', 
    image: 'https://images.unsplash.com/photo-1607507981507-62f7961d15de?auto=format&fit=crop&q=80&w=800',
    desc: 'Robust slag pots for safe transportation of molten waste. Designed with reinforced trunnions for crane handling.'
  },
  { 
    id: 4, 
    title: 'Counter Weights', 
    category: 'CUSTOM', 
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    desc: 'Precision-cast counterweights for heavy machinery, cranes, and elevators. Available in various custom shapes.'
  },
  { 
    id: 5, 
    title: 'Heavy Duty Casting', 
    category: 'PLATES', 
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    desc: 'Heat-resistant cast iron components for sintering plants and pelletizing furnaces ensuring efficient air flow.'
  },
  { 
    id: 6, 
    title: 'Custom Grey Iron Parts', 
    category: 'CUSTOM', 
    image: 'https://images.unsplash.com/photo-161ef71412089-c5c8f18ea6f6?auto=format&fit=crop&q=80&w=800',
    desc: 'Bespoke foundry solutions tailored to specific industrial blueprints with stringent quality and defect testing.'
  },
];

const CastIronParts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#080d14]">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        
        {/* --- Premium Cinematic Hero Section --- */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
          
          {/* Animated Glow Orbs (Consistent Red Theme) */}
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
                  <Anvil className="w-4 h-4" /> Foundry & Casting
                </span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#e63946]"></span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Cast Iron <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e63946] via-[#ff6b6b] to-[#ffb3c6]">
                  Components.
                </span>
              </h1>
              
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                High-grade metallurgical castings forged for extreme durability. From massive slag pots to precision-machined industrial counterweights, engineered to your exact specifications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Ultra-Premium Foundry Grid (3 Columns, 50% Image Height) --- */}
        {/* Adjusted padding top (pt-8) since filter bar is removed */}
        <section className="container mx-auto px-6 lg:px-24 pb-24 pt-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {castIronData.map((part) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={part.id}
                  className="group relative bg-[#0d1520]/50 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:border-white/15 transition-all duration-500 flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(230,57,70,0.12)] h-full"
                >
                  {/* Image Container - h-[320px] for true 50% appearance */}
                  <div className="relative h-[320px] shrink-0 overflow-hidden bg-[#0a111a]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1520] via-transparent to-transparent z-10" />
                    <img 
                      src={part.image} 
                      alt={part.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-[#e63946] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(230,57,70,0.5)]">
                        {part.category}
                      </span>
                    </div>
                  </div>

                  {/* Technical Content Area */}
                  <div className="p-8 flex flex-col flex-grow relative z-20 -mt-6">
                    <div className="bg-[#0a111a] border border-white/5 rounded-2xl p-5 mb-5 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#e63946] opacity-50"></div>
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                        {part.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-4">
                        {part.desc}
                      </p>
                    </div>

                    <a href="/contact" className="mt-auto pt-4 block active:scale-[0.98] transition-transform duration-200">
                      <div className="flex items-center justify-between px-5 py-4 rounded-xl border border-white/10 lg:border-white/5 bg-white/[0.03] lg:group-hover:bg-[#e63946] lg:group-hover:border-[#e63946] transition-all duration-300">
                        <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em] transition-colors duration-300">
                          Request Foundry Quote
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-white transform lg:group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </a>
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
                    Bespoke Casting
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  Need custom foundry solutions?
                </h2>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-2xl">
                  Share your technical drawings and blueprints with us. Our metallurgical engineers will guide you from pattern making to final quality inspection.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-end shrink-0 w-full md:w-auto mt-6 md:mt-0 relative z-10">
                <a href="/contact" className="relative group block w-full md:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e63946] to-[#ffb3c6] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
                  <CustomButton className="relative w-full md:w-auto bg-[#e63946] hover:bg-[#d62828] text-white font-extrabold py-4 px-10 uppercase tracking-[0.2em] text-[11px] transition-all duration-300 rounded-xl text-center shadow-2xl">
                    Submit Blueprints
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

export default CastIronParts;