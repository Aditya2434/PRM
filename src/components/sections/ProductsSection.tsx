import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, productCategories } from '@/data/products';
import SectionTitle from '@/components/ui/SectionTitle';

const ProductsSection = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Filter products based on the selected category
  const filteredProducts = activeFilter === 'ALL' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionTitle 
            subtitle="OUR PORTFOLIO" 
            title="Featured Products & Projects" 
            centered={true}
          />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 mb-12">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`text-xs md:text-sm font-bold tracking-wider uppercase px-4 py-2 transition-all duration-300 border-b-2 ${
                activeFilter === category
                  ? 'border-[#e63946] text-[#e63946]'
                  : 'border-transparent text-gray-500 hover:text-[#1e3a5f] hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white shadow-md overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-[#1e3a5f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content Box */}
                <div className="p-6 relative z-20 bg-white border-t border-gray-100 transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1 group-hover:text-[#e63946] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {product.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;