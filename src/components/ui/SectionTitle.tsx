import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  className?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  className,
  light = false,
  centered = false 
}: SectionTitleProps) => {
  return (
    <div className={cn('mb-10', centered && 'text-center', className)}>
      <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
        <div className="w-12 h-[2px] bg-[#e63946]" />
        <span className="text-[10px] font-bold text-[#e63946] uppercase tracking-[0.4em]">
          Paragon Industrial
        </span>
      </div>
      <h2 className={cn(
        'text-3xl md:text-4xl font-serif font-bold tracking-tight',
        light ? 'text-white' : 'text-[#1e3a5f]'
      )}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;