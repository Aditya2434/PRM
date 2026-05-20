// src/components/sections/CertificatesSection.tsx
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle, 
  DialogDescription, 
  DialogHeader 
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Award, Eye, ChevronRight } from 'lucide-react';

// Using your PNG image files for both the card view and the full pop-up view
const certificates = [
  {
    id: 1,
    title: "PRM Trade License",
    imageUrl: "/certificates/PRM tradelicense 2026-2029.png", 
  },
  {
    id: 2,
    title: "IEC Certificate",
    imageUrl: "/certificates/IEC 2026.png",
  }
];

const CertificatesSection = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner Section (Size Reduced & Image Updated) */}
      <section className="relative bg-[#0f172a] py-16 md:py-20 overflow-hidden flex items-center">
        {/* Background Image - Import/Export/Trade Theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8ed744422b?auto=format&fit=crop&q=80&w=1920')" }}
        ></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-5 backdrop-blur-md border border-white/20 shadow-xl">
              <Award className="w-7 h-7 text-[#e63946]" strokeWidth={1.5} />
            </div>
            <h2 className="text-xs font-bold text-[#e63946] tracking-[0.2em] uppercase mb-3">Accreditations</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
              Our Certificates
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
              Recognitions and quality accreditations that validate our commitment to excellence, global standards, and industrial reliability.
            </p>

            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase bg-black/40 px-6 py-2.5 rounded-full backdrop-blur-md border border-white/10">
              <a href="/" className="hover:text-[#e63946] transition-colors duration-300">Home</a>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-[#e63946]">Certificates</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-50 blur-[100px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-red-50 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
               <Dialog key={cert.id}>
                 {/* Card */}
                 <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: index * 0.2 }}
                   className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 group flex flex-col transition-all duration-500 overflow-hidden"
                 >
                   {/* Image Container with "Document Frame" effect */}
                   <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 p-6 flex items-center justify-center">
                     <div className="w-full h-full bg-white shadow-sm border border-gray-200 p-2 relative">
                       <img 
                         src={cert.imageUrl} 
                         alt={cert.title}
                         className="w-full h-full object-cover object-top border border-gray-100 transition-transform duration-700 group-hover:scale-[1.03] pointer-events-none"
                         onContextMenu={(e) => e.preventDefault()}
                       />
                     </div>
                     
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-[#1e3a5f]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                       <DialogTrigger asChild>
                         <button className="bg-white text-[#e63946] px-8 py-3.5 rounded-full font-bold shadow-xl hover:scale-105 hover:bg-gray-50 transition-all flex items-center gap-2">
                           <Eye className="w-5 h-5" />
                           View Document
                         </button>
                       </DialogTrigger>
                     </div>
                   </div>
                   
                   {/* Card Content */}
                   <div className="p-8 text-center flex-grow flex flex-col justify-center bg-white relative">
                     {/* Little decorative top border */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#e63946] rounded-b-md"></div>
                     <h4 className="text-xl md:text-2xl font-bold text-[#1e3a5f]">{cert.title}</h4>
                   </div>
                 </motion.div>
   
                 {/* Modal / Dialog Content for Image */}
                 <DialogContent className="max-w-4xl w-full p-2 overflow-hidden bg-transparent border-none shadow-none">
                   <DialogHeader className="sr-only">
                     <DialogTitle>{cert.title}</DialogTitle>
                     <DialogDescription>Full view of {cert.title} document.</DialogDescription>
                   </DialogHeader>
                   
                   {/* Full Image */}
                   <div 
                     className="relative w-full flex items-center justify-center rounded-xl overflow-hidden bg-black/60 backdrop-blur-md p-4"
                     onContextMenu={(e) => e.preventDefault()}
                   >
                     <img 
                       src={cert.imageUrl} 
                       alt={cert.title} 
                       className="max-h-[85vh] w-auto object-contain rounded-md shadow-2xl pointer-events-none"
                     />
                   </div>
                 </DialogContent>
               </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesSection;