import React from 'react';
import { motion } from 'framer-motion';
// Imported PaintBucket from lucide-react
import { Flame, Cog, PaintBucket } from 'lucide-react';
import { features } from '@/data/features';

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Cog,
  PaintBucket, // Mapped the PaintBucket icon here
};

// Define unique faded color palettes for each card index
const cardStyles = [
  {
    gradient: "from-blue-50/50 via-white to-indigo-50/50",
    hoverGradient: "from-blue-100/40 via-white to-indigo-100/40",
    accent: "bg-[#1e3a5f]",
    iconBg: "bg-blue-50",
    iconColor: "text-[#1e3a5f]"
  },
  {
    gradient: "from-red-50/50 via-white to-rose-50/50",
    hoverGradient: "from-red-100/40 via-white to-rose-100/40",
    accent: "bg-[#e63946]",
    iconBg: "bg-red-50",
    iconColor: "text-[#e63946]"
  },
  {
    gradient: "from-emerald-50/50 via-white to-teal-50/50",
    hoverGradient: "from-emerald-100/40 via-white to-teal-100/40",
    accent: "bg-emerald-600",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative z-20 -mt-20">
      <div className="container mx-auto px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            const style = cardStyles[index % cardStyles.length];
            
            return (
              <motion.div
                key={feature.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 
                  }}
                  className="group relative p-10 text-center rounded-2xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl h-full flex flex-col items-center"
                >
                  {/* Faded Background Layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} -z-20`} />
                  
                  {/* Hover Background Layer */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                  {/* Dynamic Accent Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${style.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center`} />

                  <div className="mb-6 flex justify-center">
                    {/* Icon Container with Matching Faded Color */}
                    <div className={`w-16 h-16 rounded-full ${style.iconBg} shadow-inner flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-white`}>
                      {IconComponent ? (
                        <IconComponent 
                          className={`w-7 h-7 ${style.iconColor} transition-colors duration-500`} 
                          strokeWidth={1.5} 
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  <h3 className={`text-base font-bold mb-4 tracking-widest uppercase transition-colors duration-300 ${style.iconColor}`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-gray-500 font-medium group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;