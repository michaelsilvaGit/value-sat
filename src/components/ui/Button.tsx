import '../../tech-theme.css';
import React from 'react';


interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseStyles = 'font-heading font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: `bg-[var(--primary)] text-[var(--text-dark)] hover:bg-opacity-90 hover:shadow-lg hover:shadow-[var(--primary)]/30 transform hover:translate-y-[-2px]`,
    secondary: `border-2 border-[var(--primary)] text-[var(--primary)] bg-transparent hover:bg-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/20 transform hover:translate-y-[-2px]`,
    tertiary: `text-[var(--primary)] underline hover:text-opacity-80 hover:shadow-sm hover:shadow-[var(--primary)]/20`,
  };
  
  const sizeStyles = {
    small: 'text-sm py-1 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        boxShadow: variant === 'primary' ? 'var(--neon-glow)' : 'none',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
