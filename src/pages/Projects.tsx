// src/pages/Projects.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';
import heroBg from '@/assets/images/cta-bg.jpg';

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Standard Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0f172a]">
          <div className="absolute inset-0 opacity-20">
            <img src={heroBg} alt="Projects Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-[#e63946]/10 text-[#e63946] border border-[#e63946]/20 text-sm font-bold uppercase tracking-widest mb-4"
            >
              Our Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our <span className="text-[#e63946]">Projects</span>
            </motion.h1>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-12 lg:px-24">
            
            <div className="text-center mb-16">
              <SectionTitle 
                subtitle="OUR COMPLETE PORTFOLIO" 
                title="All Industrial Projects" 
                centered={true} 
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProjectCard
                    image={project.image}
                    title={project.title}
                    category={project.category}
                    detail={project.detail} 
                    tag={project.tag}
                    showEnquiry={true}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;