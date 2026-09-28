import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle = "Paragon Industrial",
  className,
  light = false,
  centered = false 
}: SectionTitleProps) => {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <div className={cn(
        "flex items-center gap-2 mb-3.5", 
        centered ? "justify-center" : "justify-start"
      )}>
        <span className={cn(
          "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-semibold tracking-[0.2em] uppercase border transition-colors",
          light 
            ? "bg-amber-400/10 border-amber-400/30 text-amber-300"
            : "bg-amber-500/10 border-amber-500/25 text-[#D97706]"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          {subtitle}
        </span>
      </div>
      <h2 className={cn(
        'font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]',
        light ? 'text-white' : 'text-[#090D16]'
      )}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;