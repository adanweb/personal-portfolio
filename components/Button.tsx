import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = true,
  className = '',
  ...props 
}) => {
  const baseStyles = "group relative overflow-hidden px-8 py-4 font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-4 text-sm";
  
  const variants = {
    primary: "bg-[#ccff00] text-black hover:bg-white",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </span>
    </button>
  );
};
