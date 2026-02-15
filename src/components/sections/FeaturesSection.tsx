import React from 'react';
import { motion } from 'framer-motion';
import { Star, Umbrella, Users } from 'lucide-react';
import { features } from '@/data/features';

// Create a map to link the string names from your data to the actual components
const iconMap: Record<string, React.ElementType> = {
  Star,
  Umbrella,
  Users,
};

const FeaturesSection = () => {
  return (
    <section className="relative z-20 -mt-20">
      {/* Padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-xl">
          {features.map((feature, index) => {
            // Get the correct component from the map using the string name
            const IconComponent = iconMap[feature.icon];
            
            return (
              <motion.div
                key={feature.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 text-center border-b md:border-b-0 ${
                  index !== features.length - 1 ? 'md:border-r border-gray-100' : ''
                }`}
              >
                <div className="mb-4 flex justify-center">
                  {/* Render the icon if it exists in the map */}
                  {IconComponent ? (
                    <IconComponent className="w-10 h-10 text-[#1e3a5f]" strokeWidth={1.5} />
                  ) : (
                    <div className="w-10 h-10 bg-gray-100 rounded-full" />
                  )}
                </div>
                <h3 className="text-sm font-bold mb-3 tracking-wide text-[#1e3a5f] uppercase">
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