// src/components/sections/ProjectsSection.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CustomButton from '@/components/ui/CustomButton';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  // Updated to display 8 projects so it perfectly fills 2 rows of 4
  const displayedProjects = projects.slice(0, 8);

  return (
    <section id="projects" className="py-20 bg-[#0d1b2a]">
      <div className="container mx-auto px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle 
            subtitle="OUR PORTFOLIO" 
            title="Featured Projects" 
            centered={true}
            light={true} 
          />
        </div>

        {/* Projects Grid updated to lg:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                detail={project.detail} 
                tag={project.tag} // Passed the tag here
              />
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-14 flex justify-center">
          <a href="/projects">
            <CustomButton 
              className="group flex items-center gap-2 bg-[#e63946] hover:bg-white hover:text-[#0d1b2a] text-white px-8 py-4 rounded-sm font-bold tracking-widest text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              EXPLORE MORE PROJECTS
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </CustomButton>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;