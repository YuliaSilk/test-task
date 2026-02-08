import React from "react";
import type {ButtonProps} from "../types";
import {GoArrowRight} from "react-icons/go";

export default function Button({
 variant = "primary",
 showArrow = false,
 children,
 className = "",
 ...props
}: ButtonProps) {
 const baseStyles =
  "px-5 py-3.5 font-montserrat font-medium text-base transition-all duration-300 rounded-sm flex items-center justify-center gap-2 cursor-pointer";

 const variants = {
  primary: "bg-primary text-white hover:bg-dark",
  secondary: "bg-light text-primary hover:font-semibold cursor-pointer",
 };

 return (
  <button
   className={`${baseStyles} ${variants[variant]} ${className}`}
   {...props}
  >
   {children}
   {showArrow && (
    <span className="transition-transform duration-300 group-hover:translate-x-1">
     <GoArrowRight size={20} />
    </span>
   )}
  </button>
 );
}
