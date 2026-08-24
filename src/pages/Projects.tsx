// src/pages/Projects.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';

const Projects = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SEO 
        title="Industrial Reheating Furnace & Refractory Projects | Paragon Refractories and Minerals"
        description="Browse our portfolio of completed reheating furnace installations, refractory linings, and combustion system setup projects for steel plants in India."
        keywords="reheating furnace projects, steel plant furnace installation, refractory installation case studies, rolling mill setup India, industrial piping projects"
        url="/projects"
      />
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section — Industrial Theme */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#0d1f35]">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/projects_hero.jpg"
              alt="Industrial Projects Aerial View"
              className="w-full h-full object-cover animate-ken-burns"
            />
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f35]/90 via-[#0d1f35]/55 to-[#0d1f35]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35]/80 via-transparent to-[#0d1f35]/30" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-60deg,transparent,transparent_30px,rgba(196,154,60,0.03)_30px,rgba(196,154,60,0.03)_31px)] pointer-events-none" />
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-16 h-16 border-t-2 border-l-2 border-[#c49a3c]/60" />
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-16 h-16 border-b-2 border-r-2 border-[#c49a3c]/60" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-36 pb-20 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#c49a3c]/15 border border-[#c49a3c]/30 backdrop-blur-sm text-[#c49a3c] text-xs font-black uppercase tracking-widest mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#c49a3c] animate-pulse" />
              Our Portfolio
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5"
            >
              Our <span className="text-[#c49a3c]">Projects</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-20 h-[3px] bg-gradient-to-r from-[#c49a3c] to-transparent mx-auto mb-5"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/75 uppercase bg-black/25 px-5 py-2 rounded-full backdrop-blur-sm border border-white/10 w-fit mx-auto"
            >
              <a href="/" className="hover:text-[#c49a3c] transition-colors">Home</a>
              <span className="text-white/40">›</span>
              <span className="text-[#c49a3c]">Projects</span>
            </motion.div>
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