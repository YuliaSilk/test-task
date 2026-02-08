"use client";

import React, {useState} from "react";
import {CONTACT_METHODS} from "../../constants/contacts";

export default function ContactWidget() {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <>
   <div
    className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 z-40 pointer-events-none ${
     isOpen ? "opacity-100" : "opacity-0"
    }`}
   />

   <div
    className="fixed bottom-10 right-10 z-50 flex flex-col items-end"
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
   >
    <div className="flex flex-col gap-2 mb-4 items-end">
     {CONTACT_METHODS.map((method, index) => (
      <div
       key={method.id}
       style={{transitionDelay: isOpen ? `${(CONTACT_METHODS.length - 1 - index) * 100}ms` : "0ms"}}
       className={`
        bg-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 cursor-pointer 
        hover:bg-gray transition-all duration-500 ease-out w-full
        ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"}
      `}
      >
       <span className="text-xl">{method.icon}</span>
       <span className="font-montserrat text-sm font-medium text-primary whitespace-nowrap">{method.label}</span>
      </div>
     ))}
    </div>

    <button
     className={`
          w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl transition-transform duration-300
          ${isOpen ? "rotate-90 scale-110" : "rotate-0"}
        `}
    >
     <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
     >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
     </svg>
    </button>
   </div>
  </>
 );
}
