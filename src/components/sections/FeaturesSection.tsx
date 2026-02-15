import React from 'react'; // Added missing React import
import { motion } from 'framer-motion';
import { Star, Umbrella, Users } from 'lucide-react';
import { features } from '@/data/features';

// Map icons to the components imported from lucide-react
const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Star,
  Umbrella,
  Users,
};

const FeaturesSection = () => {
  return (
    <section className="relative z-20 -mt-20">
      {/* Updated padding: px-10 (40px) on mobile and lg:px-20 (80px) on desktop */}
      <div className="container mx-auto px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-xl">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 text-center ${index === 1 ? 'md:border-x border-gray-200' : ''}`}
              >
                <div className="mb-4 flex justify-center">
                  {/* Safety check to prevent crash if icon name is missing */}
                  {IconComponent && (
                    <IconComponent className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                  )}
                </div>
                <h3 className="text-sm font-bold mb-3 tracking-wide text-[#1e3a5f]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;