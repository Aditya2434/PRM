// src/pages/products/RefractoryProductDetails.tsx
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { refractoryProducts } from '@/data/refractoryProducts';

const RefractoryProductDetails = () => {
  const { productId } = useParams();
  
  // Find the exact product based on the URL parameter
  const product = refractoryProducts.find(p => p.id === productId);

  // If the user types a bad URL, kick them back to the catalog
  if (!product) {
    return <Navigate to="/products/refractory-material" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#030508] font-sans selection:bg-[#e63946]/30 selection:text-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-grow pt-12 pb-32 relative overflow-hidden">
        
        {/* Minimalist Background Ambient Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#e63946]/[0.02] to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
          
          {/* Top Navigation & Breadcrumbs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <Link 
              to="/products/refractory-material" 
              className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Catalog
            </Link>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500"
            >
              <Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <Link to="/products/refractory-material" className="hover:text-gray-300 transition-colors">Refractory</Link>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="text-[#e63946]">{product.category}</span>
            </motion.div>
          </div>

          {/* Premium 12-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
            
            {/* ---------------------------------------------------------------- */}
            {/* LEFT SIDE: Main Product Content (8 Columns)                      */}
            {/* ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 flex flex-col"
            >
              
              {/* Top Profile Section: Small Image (Left) + Text (Right) */}
              <div className="flex flex-col md:flex-row gap-10 xl:gap-14 mb-12">
                
                {/* Smaller Left-Aligned Image */}
                <div className="w-full md:w-5/12 shrink-0">
                  <div className="w-full aspect-square relative overflow-hidden rounded-sm bg-[#0a111a] group shadow-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    />
                    {/* Subtle Inner Border */}
                    <div className="absolute inset-0 border border-white/5 rounded-sm pointer-events-none" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-[#030508]/80 backdrop-blur-md border border-white/10 text-white text-[10px] px-3 py-1.5 rounded-sm uppercase tracking-[0.15em]">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title & Specifications Beside Image */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white mb-6 tracking-tight leading-[1.1]">
                    High Alumina Bricks
                  </h1>
                  
                  {/* Product Highlights */}
                  <div className="flex flex-col gap-6">
                    <p className="text-base text-gray-300 leading-relaxed border-l-2 border-[#e63946]/50 pl-4">
                      Premium-grade high alumina refractory bricks engineered to deliver outstanding thermal stability, mechanical strength, and long service life in high-temperature environments.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-2">
                      {[
                        "High Alumina Content: 55% – 82% (Al₂O₃)",
                        "Standard Size: 230 × 115 × 65 mm",
                        "Custom sizes available as per requirement",
                        "Excellent resistance to high temperatures",
                        "Superior thermal performance and durability",
                        "Strong structural integrity under extreme conditions"
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#e63946] shrink-0 shadow-[0_0_8px_rgba(230,57,70,0.6)]" />
                          <span className="text-sm text-gray-200 tracking-wide leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description Block (Below Image) */}
              <div className="mb-8 border-l border-white/10 pl-6 py-2 flex flex-col gap-4">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  High Alumina Fire Bricks are manufactured using carefully selected bauxite chamotte, processed through advanced production techniques and fired at controlled temperatures ranging from 1420°C to 1530°C. Strict quality control ensures consistent performance and reliability.
                </p>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  We offer a complete range of grades including SK36, SK37, SK38, and SK40, suitable for various industrial furnace and refractory applications at competitive factory pricing.
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="mb-16 rounded-sm border border-white/10 overflow-x-auto bg-[#0a111a]/50">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-white/[0.02] border-b border-white/10">
                      <th className="py-5 px-6 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">Properties</th>
                      <th className="py-5 px-6 text-xs font-medium uppercase tracking-[0.15em] text-[#e63946]">SK36</th>
                      <th className="py-5 px-6 text-xs font-medium uppercase tracking-[0.15em] text-[#e63946]">SK37</th>
                      <th className="py-5 px-6 text-xs font-medium uppercase tracking-[0.15em] text-[#e63946]">SK38</th>
                      <th className="py-5 px-6 text-xs font-medium uppercase tracking-[0.15em] text-[#e63946]">SK40</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { label: "Al₂O₃ (%)", values: ["≥55", "≥65", "≥75", "≥82"] },
                      { label: "Fe₂O₃ (%)", values: ["≤2.0", "≤2.0", "≤2.0", "≤1.5"] },
                      { label: "Bulk Density (g/cm³)", values: ["≥2.1", "≥2.3", "≥2.5", "≥2.7"] },
                      { label: "Apparent Porosity (%)", values: ["≤23", "≤23", "≤22", "≤21"] },
                      { label: "Cold Crushing Strength (MPa)", values: ["≥40", "≥45", "≥50", "≥60"] },
                      { label: "Refractoriness (°C)", values: ["≥1750", "≥1770", "≥1790", "≥1850"] },
                      { label: "Refractoriness Under Load 0.2MPa (°C)", values: ["≥1420", "≥1480", "≥1500", "≥1530"] },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors duration-300">
                        <td className="py-4 px-6 text-sm text-gray-300">{row.label}</td>
                        {row.values.map((val, vIdx) => (
                          <td key={vIdx} className="py-4 px-6 text-sm text-gray-100">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Applications List */}
              <div className="mb-20">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-6">
                  Primary Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Reheating furnaces",
                    "Steel and iron industries",
                    "Cement kilns",
                    "Glass furnaces",
                    "Petrochemical industries"
                  ].map((app, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/5 rounded-sm p-4 hover:bg-white/5 transition-colors duration-300 group">
                      <span className="text-sm text-gray-200 group-hover:text-white transition-colors">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural CTA Strip */}
              <div className="relative border border-white/10 bg-white/[0.01] p-10 md:p-14 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/0 via-[#e63946]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                
                <div className="relative z-10 max-w-md">
                  <h4 className="text-xl md:text-2xl font-serif text-white mb-3">Require tailored specifications?</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Consult with our engineering team for custom formulations, bulk acquisition pricing, and rapid deployment details.
                  </p>
                </div>

                <Link 
                  to="/contact" 
                  className="relative z-10 flex-shrink-0 inline-flex items-center justify-center border border-white/20 bg-transparent hover:bg-white hover:text-black text-white px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-500 rounded-sm"
                >
                  Contact Sales
                </Link>
              </div>

            </motion.div>

            {/* ---------------------------------------------------------------- */}
            {/* RIGHT SIDE: Sidebar Catalog (4 Columns)                          */}
            {/* ---------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <div className="sticky top-32">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400 mb-8 pb-4 border-b border-white/10">
                  Explore Catalog
                </h3>
                
                <div className="flex flex-col">
                  {refractoryProducts.map((p) => {
                    const isActive = p.id === product.id;
                    
                    return (
                      <Link 
                        key={p.id}
                        to={`/products/refractory-material/${p.id}`}
                        className={`group flex items-center gap-5 py-4 border-b border-white/5 transition-all duration-300 ${
                          isActive ? 'pointer-events-none' : 'hover:pl-2 hover:border-white/10'
                        }`}
                      >
                        {/* Minimalist Thumbnail */}
                        <div className="w-12 h-12 rounded-sm overflow-hidden bg-[#0a111a] flex-shrink-0 relative">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              isActive ? 'opacity-100 scale-105' : 'opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105'
                            }`} 
                          />
                          {isActive && <div className="absolute inset-0 ring-1 ring-inset ring-[#e63946]" />}
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex-grow min-w-0">
                          <h4 className={`text-sm truncate transition-colors duration-300 ${
                            isActive ? 'text-white font-medium' : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {p.name}
                          </h4>
                          <p className={`text-[10px] uppercase tracking-[0.15em] mt-1 transition-colors duration-300 ${
                            isActive ? 'text-[#e63946]' : 'text-gray-500'
                          }`}>
                            {p.category}
                          </p>
                        </div>

                        {/* Slide-in Arrow */}
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                          isActive ? 'text-[#e63946]' : 'text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                        }`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefractoryProductDetails;