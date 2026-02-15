import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { NewsCard } from '@/components/ui/CustomCard';
import { news } from '@/data/news';

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-white">
      {/* Updated padding: px-12 (48px) for mobile, lg:px-24 (96px) for desktop */}
      <div className="container mx-auto px-12 lg:px-24">
        <SectionTitle title="RECENT NEWS" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NewsCard
                image={item.image}
                title={item.title}
                date={item.date}
                comments={item.comments}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;