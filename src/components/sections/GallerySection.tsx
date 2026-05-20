// src/components/sections/GallerySection.tsx
import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogHeader 
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';

const galleryImages = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  url: `/images/Gallery/g${i + 1}.webp`,
  alt: `Gallery Image ${i + 1}`
}));

// ----------------------------------------------------------------------
// Zoomable Image Sub-Component
// ----------------------------------------------------------------------
const ZoomableImage = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg group cursor-pointer"
      onClick={(e) => {
        // If they click the blurred background wrapper, close the modal
        if (e.target === e.currentTarget) {
           onClose();
        }
      }}
    >
      {/* Zoom Hint Icon */}
      <div className="absolute top-4 right-4 z-50 bg-black/40 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
      </div>

      <motion.img 
        src={src} 
        alt={alt}
        // Clicking the image itself toggles the zoom
        onClick={(e) => {
          e.stopPropagation(); 
          setIsZoomed(!isZoomed);
        }}
        drag={isZoomed}
        dragConstraints={{ left: -600, right: 600, top: -600, bottom: 600 }}
        dragElastic={0.1}
        animate={{ 
          scale: isZoomed ? 2.5 : 1, 
          x: isZoomed ? undefined : 0, 
          y: isZoomed ? undefined : 0 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`max-h-[85vh] w-auto object-contain shadow-2xl ${
          isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
        }`}
        onDragStart={(e) => e.preventDefault()} 
      />
    </div>
  );
};

// ----------------------------------------------------------------------
// Main Gallery Section
// ----------------------------------------------------------------------
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Handle Mobile/Hardware Back Button
  useEffect(() => {
    const handlePopState = () => {
      // If the back button is pressed while an image is open, just close the image
      if (selectedImage) {
        setSelectedImage(null);
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedImage]);

  const openModal = (img: typeof galleryImages[0]) => {
    setSelectedImage(img);
    // Push a fake state into the browser history so the back button has something to pop
    window.history.pushState({ galleryModalOpen: true }, '');
  };

  const closeModal = () => {
    setSelectedImage(null);
    // If they closed it manually (clicking X or background), we need to clear the fake history state
    if (window.history.state?.galleryModalOpen) {
      window.history.back();
    }
  };

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
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              {/* Grid Item Card */}
              <div 
                className="relative w-full aspect-square overflow-hidden bg-gray-200 cursor-pointer group"
                onClick={() => openModal(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Master Modal Pop-up (Single instance for performance) */}
        <Dialog 
          open={!!selectedImage} 
          onOpenChange={(open) => {
            if (!open) closeModal();
          }}
        >
          <DialogContent className="max-w-5xl w-[95vw] p-0 bg-transparent border-none shadow-none flex items-center justify-center outline-none">
            <DialogHeader className="sr-only">
              <DialogTitle>{selectedImage?.alt || 'Gallery Image'}</DialogTitle>
            </DialogHeader>
            
            {/* Backdrop Blur Container */}
            <div className="relative w-full h-[90vh] flex items-center justify-center backdrop-blur-md bg-black/60 p-2 md:p-4 rounded-xl overflow-hidden outline-none">
              {selectedImage && (
                <ZoomableImage 
                  src={selectedImage.url} 
                  alt={selectedImage.alt} 
                  onClose={closeModal} 
                />
              )}
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default GallerySection;