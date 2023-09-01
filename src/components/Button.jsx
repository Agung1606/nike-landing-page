import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none rounded-full border
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } ${fullWidth && "w-full"} hover:scale-105 ease-out duration-300`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt={"icon"} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
