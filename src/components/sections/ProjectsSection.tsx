// src/components/sections/ProjectsSection.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import CustomButton from '@/components/ui/CustomButton';
import { ProjectCard } from '@/components/ui/CustomCard'; // Brought your custom card back!
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  // Only display the first 6 projects on the home page
  const displayedProjects = projects.slice(0, 6);

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

        {/* Projects Grid using your Custom ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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