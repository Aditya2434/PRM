import { motion } from 'framer-motion';
import { Settings, Leaf, Droplet, Zap, FlaskConical, Box } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // Import the specific type
import SectionTitle from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/ui/CustomCard';
import { services } from '@/data/services';

// Explicitly type this map using LucideIcon to match ServiceCard props
const iconMap: Record<string, LucideIcon> = {
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
      {/* Padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <SectionTitle title="SERVICES" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Get the component from the map
            const IconComponent = iconMap[service.icon];

            // Safety check: if the icon name from data doesn't exist in our map, skip it
            if (!IconComponent) return null;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
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