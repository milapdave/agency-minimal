import React from 'react';

const Button = ({ color = 'primary', className = '', label, size = 'medium', icon, disabled, onClick, children }) => {
  const sizes = {
    small: 'py-2 px-5 text-base font-semibold',
    medium: 'py-2 px-6 text-base font-semibold',
    large: 'py-3 px-6 text-xl font-semibold',
  };

  const sizeClassName = sizes[size] || sizes.medium;

  const colorClassName =
    color === 'primary' ? 'bg-primary text-white hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary' :
    color === 'secondary' ? 'text-primary border-2 border-primary hover:border-primary hover:bg-primary hover:text-white' :
    '';

  const buttonClasses = `rounded ${sizeClassName} ${colorClassName} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} `;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label || children}
    </button>
  );
};

export default Button;
