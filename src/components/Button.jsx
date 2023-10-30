import React from "react";

const Button = (props) => {
  return (
    <button
      className={`flex  justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none  rounded-full  ${
        props.fullWidth && "w-full"
      }
    ${props.backgroundColor || "bg-coral-red"}
    text-lg  rounded-full ${props.textColor || "text-white"} ${
        props.borderColor || "border-coral-red"
      } max-sm:m-auto`}
    >
      {props.lable}
      {props.iconURL && (
        <img
          src={props.iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
