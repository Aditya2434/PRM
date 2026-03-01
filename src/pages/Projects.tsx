// src/pages/Projects.tsx
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow bg-gray-50 pt-32 pb-24">
        <div className="container mx-auto px-12 lg:px-24">
          
          <div className="text-center mb-16">
            <SectionTitle 
              subtitle="OUR COMPLETE PORTFOLIO" 
              title="All Industrial Projects" 
              centered={true} 
            />
          </div>

          {/* Grid updated to lg:grid-cols-4 for 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="group relative bg-white shadow-md overflow-hidden cursor-pointer rounded-sm">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-[#1e3a5f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 relative z-20 bg-white border-t border-gray-100 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#e63946] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;