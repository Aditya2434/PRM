// src/components/sections/ProjectsSection.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  // Extract 8 projects for the desktop view
  const displayedProjects = projects.slice(0, 8);

  return (
    <section id="projects" className="py-24 bg-slate-50/60 border-y border-slate-200/80 relative overflow-hidden">
      {/* Engineering blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-3.5 sm:px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <SectionTitle 
            subtitle="OUR PORTFOLIO" 
            title="Featured Industrial Projects" 
            centered={true}
            light={false} 
          />
        </div>

        {/* Projects Grid: Minimum 2 in a row on all screen sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              // Hide cards after the 4th one on mobile devices (screens smaller than 768px)
              className={index >= 4 ? "hidden md:block" : ""}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                detail={project.detail} 
                tag={project.tag} 
              />
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-14 flex justify-center">
          <Link to="/projects">
            <button 
              className="group inline-flex items-center gap-2.5 bg-[#090D16] hover:bg-[#D97706] text-white px-8 py-4 rounded-md font-ui font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-amber-500/20"
            >
              EXPLORE MORE PROJECTS
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;