import React from "react";

const TextInput = (
  TextFieldProps: React.InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
      {...TextFieldProps}
    />
  );
};

export default TextInput;
