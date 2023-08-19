import React from "react";

type ButtonPropsType = {
  children: React.ReactNode;
  classes?: string;
  disabled?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;

const Button = ({
  children,
  classes = "",
  disabled = false,
  ...rest
}: ButtonPropsType) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`
      bg-transparent 
      py-2 
      px-4
      border 
      rounded
      w-full
      ${
        disabled
          ? "bg-gray-300 text-white"
          : `text-blue-700 
              font-semibold 
              hover:text-white 
              hover:border-transparent 
              hover:bg-blue-500
              border-blue-500 `
      }
      ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
