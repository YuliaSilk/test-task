import React from "react";
import {StarIcon} from "../ui/StarIcon";
import Button from "../ui/Button";
import {GoArrowRight} from "react-icons/go";

const STATS = [
 {value: "98%", label: "Client Satisfaction Rate"},
 {value: "500+", label: "Successful Cases Handled"},
 {value: "25+", label: "Years Legal Experience"},
];

export default function Hero() {
 return (
  <section className="container-custom grid grid-cols-2 gap-10  mt-29.5 pb-10">
   <div className="w-full pt-20">
    <div className="mb-29.25">
     <div className="h-7  w-fit bg-light flex items-center gap-2 mb-6 px-2  ">
      <div className="flex gap-0.5 text-primary">
       {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
       ))}
      </div>
      <p className=" text-primary text-[12px] font-base tracking-wide">Professional Legal Expertise</p>
     </div>
     <h1 className="h1-main mb-6">
      Your ally
      <span className="h1-span"> in and out of court</span>
     </h1>
     <p className="font-base text-[20px] text-5 leading-8 mb-10">
      Empowering individuals and businesses through every legal journey, turning complexity into clarity.
     </p>
     <Button>
      Schedule a Consultation
      <span>
       <GoArrowRight />
      </span>
     </Button>
    </div>
    <div className="flex gap-4 ">
     {STATS.map((stat, index) => (
      <div
       key={index}
       className="w-51 flex flex-col gap-4 items-center justify-center"
      >
       <span className="font-playfair font-semibold text-[56px] leading-16 tracking-tight-custom text-primary">
        {stat.value}
       </span>
       <p className="text-[14px] leading-6.5  ">{stat.label}</p>
      </div>
     ))}
    </div>
   </div>
   <div className="bg-gray">{/* IMAGE PLACEHOLDER */}</div>
  </section>
 );
}
