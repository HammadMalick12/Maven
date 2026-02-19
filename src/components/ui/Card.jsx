import React from "react";

const Card = ({ children, className = "", hover = true }) => {
  return (
    <div 
      className={`
        bg-white rounded-custom shadow-lg 
        ${hover ? "hover:shadow-2xl hover:-translate-y-2 transition-all duration-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;