import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronRight, Eye, Target, Layers } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Page Banner */}
        <section className="relative bg-[#0f172a] py-32 md:py-48 overflow-hidden flex items-center min-h-[50vh]">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920')" }}
          ></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="container mx-auto px-12 lg:px-24 relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              About Us
            </h1>
            <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About Us</span>
            </div>
          </div>
        </section>

        {/* Main Content Section - Legacy & Founder */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Side: Story */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-sm font-bold text-[#e63946] tracking-[0.2em] uppercase mb-3">Our Legacy</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1e3a5f] leading-tight mb-8">
                  Excellence in Engineering Since <span className="text-[#e63946]">2000</span>
                </h3>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    <span className="font-bold text-[#1e3a5f]">Paragon Refractories and Minerals</span> is a globally trusted manufacturer and supplier of high-performance refractory materials, heavy industrial mechanical equipment, and precision cast iron products dedicated specifically to the reheating furnace industry.
                  </p>
                  <p>
                    Since our establishment in 2000, we have specialized in tailoring comprehensive solutions for walking beam, walking hearth, and pusher-type reheating furnaces. 
                  </p>
                  <p>
                    Our complete product range is rigorously engineered to withstand extreme thermal stress, heavy mechanical loads, and the harshest operating conditions. With an unwavering focus on durability, precision, and energy efficiency, we help our partners extend furnace lifespans, drastically improve thermal performance, and reduce ongoing operational and maintenance costs.
                  </p>
                </div>
              </motion.div>

              {/* Right Side: Founder Spotlight - MADE MORE GRAY */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gray-100 p-8 md:p-12 rounded-sm border border-gray-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] relative"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e63946]/10 rounded-bl-[100px] -z-10"></div>
                
                <div className="flex flex-col gap-6 items-center text-center">
                  <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
                    <img
                      src="/src/assets/images/Founder.jpg"
                      alt="Kalika Prasad Chauhan"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = '/src/assets/images/Founder.png';
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold text-[#1e3a5f] mb-1">Kalika Prasad Chauhan</h4>
                    <p className="text-xs text-[#e63946] font-bold tracking-[0.15em] uppercase mb-6">Founder & CEO</p>
                    <div className="relative inline-block">
                      <p className="text-base text-gray-700 leading-relaxed italic border-t border-b border-gray-300 py-6 px-4">
                        "Bringing decades of expertise in refractory materials and furnace engineering, guiding Paragon's operations with uncompromising precision and a commitment to industrial innovation."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Vision, Mission, What We Do Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e63946] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#1e3a5f] transition-colors duration-500">
                  <Eye className="w-8 h-8 text-[#1e3a5f] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#1e3a5f] mb-4">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To become a globally trusted leader in refractory and furnace engineering solutions, recognized for innovation, durability, and energy-efficient products serving all types of industrial furnaces worldwide.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e63946] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#e63946] transition-colors duration-500">
                  <Target className="w-8 h-8 text-[#e63946] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#1e3a5f] mb-4">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To manufacture and deliver high-performance refractory materials, industrial mechanical equipment, and cast iron products that enhance efficiency, reliability, and service life across all types of industrial furnaces, while consistently meeting the highest standards of quality, safety, and customer satisfaction.
                </p>
              </motion.div>

              {/* What We Do Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#e63946] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors duration-500">
                  <Layers className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#1e3a5f] mb-4">What We Do</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We design, manufacture, supply, and maintain refractory materials, heavy industrial mechanical equipment, and precision cast iron products for all types of industrial furnaces, including reheating, heat treatment, melting, and process furnaces across diverse industries.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;