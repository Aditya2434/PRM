import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
  variant?: 'default' | 'dark' | 'outline';
}

export const ArrowButton = ({ 
  direction, 
  onClick, 
  className,
  variant = 'default'
}: ArrowButtonProps) => {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  
  const variants = {
    default: 'bg-white/20 hover:bg-white/40 text-white',
    dark: 'bg-[#1e3a5f] hover:bg-[#152a45] text-white',
    outline: 'border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-10 h-10 flex items-center justify-center transition-all duration-300',
        variants[variant],
        className
      )}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

interface DotIndicatorsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
  className?: string;
}

export const DotIndicators = ({ 
  total, 
  current, 
  onDotClick,
  className 
}: DotIndicatorsProps) => {
  return (
    <div className={cn('flex gap-2', className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={cn(
            'w-3 h-3 rounded-full transition-all duration-300',
            current === index 
              ? 'bg-[#e63946]' 
              : 'bg-white/50 hover:bg-white/70'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
