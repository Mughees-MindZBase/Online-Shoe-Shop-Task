import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import { MdLock } from "react-icons/md"; // Import the lock icon for the password field

const PasswordInput = ({ placeholder, className, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Lock Icon on the left */}
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <MdLock size={20} />
      </span>

      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="border border-customGray text-black placeholder:text-blackColor bg-white rounded-lg p-3 pl-10 w-full"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-3 text-gray-500"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
      </button>
    </div>
  );
};

export default PasswordInput;
