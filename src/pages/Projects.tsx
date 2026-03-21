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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
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
                  showEnquiry={true}
                />
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