import React from "react";

function Button(
  children,
  textColor,
  bgColor,
  type = "button",
  classname = " ",
  ...props
) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${classname} ${textColor} ${bgColor} `}
    >
      {children}
    </button>
  );
}

export default Button;
