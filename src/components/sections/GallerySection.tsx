// src/components/sections/GallerySection.tsx
import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle, 
  DialogHeader 
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Maximize2, Image as ImageIcon, ZoomIn, ZoomOut } from 'lucide-react';

const galleryImages = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  url: `/images/Gallery/g${i + 1}.webp`,
  alt: `Gallery Image ${i + 1}`
}));

// ----------------------------------------------------------------------
// Zoomable Image Sub-Component
// Handles click-to-zoom and drag-to-pan functionality smoothly
// ----------------------------------------------------------------------
const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg group"
      onClick={() => setIsZoomed(!isZoomed)}
    >
      {/* Zoom Hint Icon (Visible on hover on desktop, or active state on mobile) */}
      <div className="absolute top-4 right-4 z-50 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
      </div>

      <motion.img 
        src={src} 
        alt={alt}
        // Enable dragging only when zoomed in
        drag={isZoomed}
        // Generous drag constraints so the user can pan around the zoomed image
        dragConstraints={{ left: -600, right: 600, top: -600, bottom: 600 }}
        dragElastic={0.1}
        animate={{ 
          scale: isZoomed ? 2.5 : 1, 
          // Reset position to center when zoomed out
          x: isZoomed ? undefined : 0, 
          y: isZoomed ? undefined : 0 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`max-h-[85vh] w-auto object-contain shadow-2xl ${
          isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
        }`}
        // Prevent default drag behavior to stop the browser from trying to save the image
        onDragStart={(e) => e.preventDefault()} 
      />
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Gallery Section
// ----------------------------------------------------------------------
const GallerySection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-2 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-bold text-[#e63946] tracking-[0.2em] uppercase mb-3">Our Facilities</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#1e3a5f]">
            Image <span className="text-[#e63946]">Gallery</span>
          </h3>
        </div>
        
        {/* Mobile: 3 columns, Desktop: 4-5 columns */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-4">
          {galleryImages.map((image, index) => (
            <Dialog key={image.id}>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <DialogTrigger asChild>
                  {/* Grid Item Card */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-200 cursor-pointer group">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark overlay that fades out on hover to highlight the hovered image */}
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                </DialogTrigger>
              </motion.div>

              {/* Modal Pop-up (Backdrop Blur applied to container) */}
              <DialogContent className="max-w-5xl w-[95vw] p-0 bg-transparent border-none shadow-none flex items-center justify-center">
                <DialogHeader className="sr-only">
                  <DialogTitle>{image.alt}</DialogTitle>
                </DialogHeader>
                
                {/* Backdrop Blur Container */}
                <div className="relative w-full h-[90vh] flex items-center justify-center backdrop-blur-md bg-black/60 p-2 md:p-4 rounded-xl overflow-hidden">
                  
                  {/* Our new Zoomable Image Component */}
                  <ZoomableImage src={image.url} alt={image.alt} />
                  
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;