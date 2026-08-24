// src/components/sections/ProjectsSection.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import CustomButton from '@/components/ui/CustomButton';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  // Extract 8 projects for the desktop view
  const displayedProjects = projects.slice(0, 8);

  return (
    <section id="projects" className="py-20 bg-[#f5f4f0] relative overflow-hidden">
      {/* Engineering blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />
      <div className="container mx-auto px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle 
            subtitle="OUR PORTFOLIO" 
            title="Featured Projects" 
            centered={true}
            light={false} 
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
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
            <CustomButton 
              className="group flex items-center gap-2 bg-[#0d1f35] hover:bg-[#c49a3c] text-white px-8 py-4 rounded-sm font-bold tracking-widest text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              EXPLORE MORE PROJECTS
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </CustomButton>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;