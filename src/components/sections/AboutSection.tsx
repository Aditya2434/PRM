import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      {/* Updated padding: px-10 (40px) on mobile and lg:px-20 (80px) on desktop */}
      <div className="container mx-auto px-10 lg:px-20">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Team Member Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative">
                <img
                  src="/src/assets/images/team-peter.jpg"
                  alt="Peter White"
                  className="w-full md:w-48 h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-[#00b4d8] text-white px-4 py-2 text-xs font-semibold">
                  HEAD OF OPERATIONS
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#1e3a5f] mb-1">Peter White</h4>
                <p className="text-sm text-[#e63946] font-semibold mb-4">HEAD OF OPERATIONS</p>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                Petro Industrial Template continues to grow ever day thanks to the confidence our 
                clients have in us. We cover many industries such as oil gas, energy, business services, 
                consumer products.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;