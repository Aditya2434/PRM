import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineDark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  onClick,
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-sm';
  
  const variants = {
    primary: 'bg-[#D97706] text-white hover:bg-[#F59E0B] shadow-sm hover:shadow-md hover:shadow-amber-500/20',
    secondary: 'bg-[#090D16] text-white hover:bg-[#D97706] shadow-sm',
    outline: 'border border-slate-300 text-slate-800 hover:bg-[#090D16] hover:text-white hover:border-[#090D16]',
    outlineDark: 'border border-[#090D16] text-[#090D16] hover:bg-[#090D16] hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
