// src/pages/Clients.tsx
import { motion } from 'framer-motion';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/ui/CustomCard';
import { clients } from '@/data/clients';

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow bg-[#0d1b2a] pt-32 pb-24">
        <div className="container mx-auto px-12 lg:px-24">
          
          <div className="text-center mb-16">
            <SectionTitle 
              subtitle="OUR PARTNERS" 
              title="Valued Clients" 
              centered={true}
              light={true} 
            />
          </div>

          {/* Updated grid to use lg:grid-cols-4 for 4 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  image={client.image}
                  title={client.title}
                  category={client.category}
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

export default Clients;