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
    default: 'bg-white/80 hover:bg-white text-slate-800 border border-slate-200 shadow-sm',
    dark: 'bg-[#090D16] hover:bg-[#D97706] text-white',
    outline: 'border border-slate-300 text-slate-800 hover:bg-[#090D16] hover:text-white hover:border-[#090D16]',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-10 h-10 rounded-md flex items-center justify-center transition-all duration-300',
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
              ? 'bg-[#D97706] w-6' 
              : 'bg-slate-300 hover:bg-slate-400'
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
