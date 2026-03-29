// src/pages/Clients.tsx
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import CustomButton from '@/components/ui/CustomButton';
import { clients, type ClientLogo } from '@/data/clients';

// ----------------------------------------------------------------------
// Reusable, Perfectly Looping Marquee Column Component
// ----------------------------------------------------------------------
const ScrollingColumn = ({ 
  items, 
  speed = 25, 
  reverse = false, 
  className = "" 
}: { 
  items: ClientLogo[], 
  speed?: number, 
  reverse?: boolean, 
  className?: string 
}) => {
  return (
    <div className={`relative w-1/3 max-w-[150px] lg:max-w-[160px] h-[150%] overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-4 md:gap-5 absolute w-full top-0 left-0"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* We duplicate the array to create the endless track */}
        {[...items, ...items].map((client, idx) => (
          <div 
            key={`${client.id}-${idx}`} 
            className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 flex items-center justify-center aspect-square shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/10 hover:border-[#e63946]/40 hover:shadow-[0_8px_30px_rgba(230,57,70,0.15)] hover:-translate-y-1 transition-all duration-300 shrink-0 group relative overflow-hidden cursor-pointer"
          >
            {/* Premium Glossy Shine Effect on Hover */}
            <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] group-hover:animate-sweep-shine bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 pointer-events-none" />
            
            <img 
              src={client.image} 
              alt={client.name} 
              className="w-full h-full object-contain relative z-0 group-hover:scale-110 transition-transform duration-500 ease-out" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Page Component
// ----------------------------------------------------------------------
const Clients = () => {
  // Split the clients into 3 columns (Total 25 clients)
  const col1 = clients.slice(0, 8);
  const col2 = clients.slice(8, 17);
  const col3 = clients.slice(17, 25);

  return (
    // Changed background to #08101a to cleanly differentiate it from the Footer's #0d1b2a
    <div className="min-h-screen flex flex-col relative bg-[#08101a]">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow pt-24 pb-20 overflow-hidden relative">
        
        {/* --- Premium Background Ambient Glows --- */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#e63946]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-[#457b9d]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full lg:min-h-[80vh] relative z-10">
          
          {/* Left Side: Premium Text & Context */}
          <div className="lg:w-5/12 space-y-8 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SectionTitle 
                subtitle="Our Clients" 
                title="Trusted by Industry Leaders Worldwide" 
                centered={false}
                light={true} 
              />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-6 font-light tracking-wide">
                At Paragon Refractories and Minerals, we take immense pride in the strong, 
                lasting relationships we've built with top-tier organizations across the 
                manufacturing, steel, and industrial sectors. 
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-4">
                Our commitment to uncompromising quality and continuous innovation has made us the premier 
                partner for companies demanding excellence globally.
              </p>

              <motion.div 
                className="mt-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ originX: 0 }} // Scales from the left edge
              >
                <a href="/contact">
                  <CustomButton className="bg-gradient-to-r from-[#e63946] to-[#c1121f] hover:from-white hover:to-white hover:text-[#e63946] text-white font-bold py-4 px-10 uppercase tracking-[0.2em] text-sm transition-all duration-300 rounded-xl shadow-[0_4px_20px_rgba(230,57,70,0.4)] hover:shadow-white/20">
                    Contact Us
                  </CustomButton>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Animated Logo Columns */}
          <div className="lg:w-7/12 w-full h-[70vh] lg:h-[80vh] flex gap-4 lg:gap-6 justify-center items-center mask-vertical-fade relative">
            
            {/* Column 1 - Moving UP */}
            <ScrollingColumn items={col1} speed={22} className="mt-16" />

            {/* Column 2 - Moving DOWN */}
            <ScrollingColumn items={col2} speed={25} reverse={true} />

            {/* Column 3 - Moving UP */}
            <ScrollingColumn items={col3} speed={20} className="mt-32" />
            
          </div>
        </div>
      </main>

      <Footer />

      {/* Embedded CSS for Fade Masks and Premium Hover Effects */}
      <style>{`
        /* Smooth gradient fade mask for top and bottom of the scrolling area */
        .mask-vertical-fade {
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
        }

        /* Glassmorphism Shine Animation */
        @keyframes sweep-shine {
          0% { transform: translateX(-150%) skewX(30deg); }
          100% { transform: translateX(200%) skewX(30deg); }
        }
        .animate-sweep-shine {
          animation: sweep-shine 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Clients;