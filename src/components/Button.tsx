import React from "react";
import ButtonProps from "@/interfaces/ButtonProps";

export const Button: React.FC<ButtonProps> = ({ label, action, color }) => {
  return (
    <button
      onClick={action}
      className={`text-white h-10 w-40 rounded-md px-4 py-2 font-medium shadow-md transition duration-300 ease-in-out ${color} hover:cursor-pointer `}
    >
      {label}
    </button>
  );
};
