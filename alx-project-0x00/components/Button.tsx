import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`px-4 py-2 font-medium transition-all duration-200 hover:opacity-80 active:scale-95 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;