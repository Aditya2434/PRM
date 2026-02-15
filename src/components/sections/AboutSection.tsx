import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="ABOUT US" />
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] leading-tight mb-6">
              OUR REAL COMMITMENT REACHES BEYOND GAS & OIL COMPANY.
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Providing world-class industrial solutions and minerals. Our commitment 
                to excellence ensures sustainable progress for our global partners.
              </p>
              <p>
                We handle manufacturing of reheating furnaces and high-quality refractory 
                materials with a focus on durability and efficiency. Our expertise 
                spans across multiple industrial sectors, delivering precision and reliability.
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 border border-gray-100"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative shrink-0">
                <div className="w-full md:w-48 h-64 bg-gray-200">
                  <img
                    src="/src/assets/images/team-peter.jpg"
                    alt="Peter White"
                    className="w-full h-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>
                <div className="absolute bottom-0 left-0 bg-[#e63946] text-white px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
                  OPERATIONS
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#1e3a5f] mb-1">Peter White</h4>
                <p className="text-xs text-[#e63946] font-bold tracking-widest uppercase mb-4">Head of Operations</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leading our manufacturing and logistics teams to ensure every reheating 
                  furnace meets international quality standards.
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