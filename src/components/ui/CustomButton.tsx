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
    primary: 'bg-[#e63946] text-white hover:bg-[#c1121f]',
    secondary: 'bg-[#1e3a5f] text-white hover:bg-[#152a45]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f]',
    outlineDark: 'border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white',
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
