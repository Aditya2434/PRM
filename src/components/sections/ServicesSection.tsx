import { motion } from 'framer-motion';
import { Settings, Leaf, Droplet, Zap, FlaskConical, Box } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/ui/CustomCard';
import { services } from '@/data/services';

const iconMap = {
  Settings,
  Leaf,
  Droplet,
  Zap,
  FlaskConical,
  Box,
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      {/* Updated padding: px-10 (40px) on mobile and lg:px-20 (80px) on desktop */}
      <div className="container mx-auto px-10 lg:px-20">
        <SectionTitle title="SERVICES" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={IconComponent}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;