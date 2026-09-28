// src/components/ui/PageHero.tsx
// Premium light architectural page hero banner used across inner pages
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHero = ({ eyebrow, title, subtitle, breadcrumbs = [] }: PageHeroProps) => {
  return (
    <section className="relative pt-36 pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80 overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 uppercase tracking-wider flex-wrap">
              <li>
                <Link to="/" className="hover:text-[#090D16] transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((bc, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    {bc.href && !isLast ? (
                      <Link to={bc.href} className="hover:text-[#090D16] transition-colors">
                        {bc.label}
                      </Link>
                    ) : (
                      <span className="text-[#D97706] font-semibold">
                        {bc.label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#D97706] font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              {eyebrow}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#090D16] mb-6 leading-[1.08] tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="font-ui text-slate-600 text-base sm:text-lg max-w-3xl font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
