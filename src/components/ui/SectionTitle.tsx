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
    <div className={cn('mb-8', centered && 'text-center', className)}>
      <div className={cn(
        'w-16 h-1 mb-4',
        light ? 'bg-[#e63946]' : 'bg-[#e63946]'
      )} />
      <h2 className={cn(
        'text-2xl md:text-3xl font-bold tracking-wide',
        light ? 'text-white' : 'text-[#1e3a5f]'
      )}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
