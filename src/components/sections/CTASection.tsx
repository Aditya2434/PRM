import { motion } from 'framer-motion';
import CustomButton from '@/components/ui/CustomButton';

const CTASection = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/src/assets/images/cta-bg.jpg)' }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1e3a5f]/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            If you need industrial solution... We are available for you
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            We provide innovative solutions for sustainable progress. Our professional team 
            works to increase productivity and cost effectiveness on the market.
          </p>
          <CustomButton variant="primary" size="lg">
            CONTACT US
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
