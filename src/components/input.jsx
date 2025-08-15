import React, { use, useId } from "react";

const Input = React.forwardRef(function input(
  { label, type = "text", classname = "", ...props },
  ref
) {
  const id = useId;
  return (
    <div className=" w-full">
      {label && (
        <label className=" inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <Input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;
