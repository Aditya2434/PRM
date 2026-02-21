import { motion } from 'framer-motion';
import { Settings, Leaf, Droplet, Zap, FlaskConical, Box, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { services } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Settings,
  Leaf,
  Droplet,
  Zap,
  FlaskConical,
  Box,
};

const serviceStyles = [
  { 
    gradient: "from-blue-50/50 via-white to-blue-50/30",
    hoverBg: "group-hover:bg-blue-600",
    accent: "bg-blue-600",
    text: "text-blue-700",
    iconBg: "bg-blue-50"
  },
  { 
    gradient: "from-emerald-50/50 via-white to-emerald-50/30",
    hoverBg: "group-hover:bg-emerald-600",
    accent: "bg-emerald-600",
    text: "text-emerald-700",
    iconBg: "bg-emerald-50"
  },
  { 
    gradient: "from-amber-50/50 via-white to-amber-50/30",
    hoverBg: "group-hover:bg-amber-500",
    accent: "bg-amber-500",
    text: "text-amber-700",
    iconBg: "bg-amber-50"
  },
  { 
    gradient: "from-red-50/50 via-white to-red-50/30",
    hoverBg: "group-hover:bg-[#e63946]",
    accent: "bg-[#e63946]",
    text: "text-[#e63946]",
    iconBg: "bg-red-50"
  },
  { 
    gradient: "from-purple-50/50 via-white to-purple-50/30",
    hoverBg: "group-hover:bg-purple-600",
    accent: "bg-purple-600",
    text: "text-purple-700",
    iconBg: "bg-purple-50"
  },
  { 
    gradient: "from-indigo-50/50 via-white to-indigo-50/30",
    hoverBg: "group-hover:bg-indigo-600",
    accent: "bg-indigo-600",
    text: "text-indigo-700",
    iconBg: "bg-indigo-50"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50/30 skew-x-12 -translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-12 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle title="OUR SERVICES" className="mb-0" />
          <p className="max-w-md text-sm font-medium text-gray-400 leading-relaxed italic border-l-2 border-gray-100 pl-4">
            Delivering precision-engineered solutions and high-grade mineral sourcing for complex industrial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const style = serviceStyles[index % serviceStyles.length];
            if (!IconComponent) return null;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`group relative p-7 text-center rounded-xl border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} -z-10`} />
                  <div className={`absolute top-0 left-0 w-full h-1 ${style.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />
                  <div className="mb-6 flex justify-center">
                    <div className={`relative w-14 h-14 rounded-xl ${style.iconBg} flex items-center justify-center transition-all duration-500 ${style.hoverBg} group-hover:rotate-[10deg] group-hover:shadow-lg`}>
                      <IconComponent className={`w-7 h-7 ${style.text} group-hover:text-white transition-colors duration-500`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className={`text-sm font-bold mb-3 tracking-widest uppercase transition-colors duration-300 ${style.text} group-hover:text-gray-900`}>{service.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500 font-medium mb-6">{service.description}</p>
                  <div className={`flex justify-center items-center gap-2 text-[9px] font-bold ${style.text} opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 tracking-[0.2em] uppercase`}>
                    Explore Service <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;