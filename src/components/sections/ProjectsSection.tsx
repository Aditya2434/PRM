import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { projects, projectCategories } from '@/data/projects';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-[#0d1b2a]">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <SectionTitle title="PROJECTS" light />

        <div className="flex flex-wrap gap-6 mb-10 border-b border-white/10 pb-4">
          {projectCategories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all ${
                activeCategory === category
                  ? 'text-[#e63946] border-b-2 border-[#e63946] pb-4 -mb-[18px]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  category={project.category}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;