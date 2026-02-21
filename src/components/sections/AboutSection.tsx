import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <SectionTitle title="ABOUT US" />
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3a5f] leading-tight mb-8 tracking-tight">
              OUR REAL COMMITMENT REACHES BEYOND <span className="text-[#e63946] border-b-2 border-[#e63946]/10">GAS & OIL COMPANY.</span>
            </h3>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-[#e63946]/20">
                <p className="text-lg text-[#1e3a5f] font-semibold leading-relaxed italic">
                  Providing world-class industrial solutions and minerals. Our commitment 
                  to excellence ensures sustainable progress for our global partners.
                </p>
              </div>
              
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                We handle manufacturing of reheating furnaces and high-quality refractory 
                materials with a focus on durability and efficiency. Our expertise 
                spans across multiple industrial sectors, delivering precision and reliability.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)]"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="relative shrink-0 group">
                <div className="w-full md:w-52 h-64 bg-gray-100 rounded-sm overflow-hidden relative">
                  {/* Image with subtle zoom on hover */}
                  <img
                    src="/src/assets/images/team-peter.jpg"
                    alt="Peter White"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
                
                {/* Operations Badge */}
                <div className="absolute bottom-0 left-0 bg-[#e63946] text-white px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg">
                  OPERATIONS
                </div>
              </div>

              <div className="flex-1 py-2">
                <h4 className="text-2xl font-serif font-bold text-[#1e3a5f] mb-1">Peter White</h4>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px w-4 bg-[#e63946]" />
                  <p className="text-xs text-[#e63946] font-bold tracking-[0.15em] uppercase">
                    Head of Operations
                  </p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Leading our manufacturing and logistics teams to ensure every reheating 
                  furnace meets international quality standards with uncompromising precision.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;