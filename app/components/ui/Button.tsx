import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: "primary" | "secondary";
 children: React.ReactNode;
 className?: string;
}

export default function Button({variant = "primary", children, className = "", ...props}: ButtonProps) {
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
  </button>
 );
}
