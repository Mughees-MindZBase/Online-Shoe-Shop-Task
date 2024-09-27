import React from "react";

const InputField = ({ type, placeholder, className, icon, ...props }) => {
  return (
    <div className="relative w-full">
      {/* Icon on the left, centered vertically */}
      {icon && (
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
          {icon}
        </span>
      )}

      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-customGray text-black rounded-lg p-3 pl-10 w-full placeholder:text-blackColor focus:outline-none focus:border-blue-500 ${className}`} // Add focus styles if needed
        {...props}
      />
    </div>
  );
};

export default InputField;
