import React from "react";

const Button = ({ children, className, type, onClick, disabled, style }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
