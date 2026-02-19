import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  href,
  onClick,
  className = "",
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-custom transition-all hover:scale-105 focus:outline-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-accent shadow-lg",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white",
    success: "bg-success text-white hover:bg-opacity-90 shadow-lg",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;