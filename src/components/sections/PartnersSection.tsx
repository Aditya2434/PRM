import { motion } from 'framer-motion';
import { partners } from '@/data/partners';

const PartnersSection = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <span 
                className="text-xl md:text-2xl font-bold transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;