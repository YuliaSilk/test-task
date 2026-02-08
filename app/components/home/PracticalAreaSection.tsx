import {areas} from "@/app/constants/practiceAreas";

const PracticalArea = () => {
 return (
  <section className="container-custom pt-20">
   <div className="flex flex-col items-center justify-center gap-6 mb-6 ">
    <div className="flex items-center justify-center gap-2 ">
     <div className="w-3 h-3 rounded-full bg-primary" />
     <span className="font-montserrat text-base text-[16px]  leading-6">Practice Area</span>
    </div>
    <h2 className="font-medium text-[40px] leading-12 tracking-tight-custom ">
     Areas of
     <span className="font-playfair font-normal italic"> Legal Expertise</span>
    </h2>
    <p className="text-[20px] text-base">
     Discover our core legal services, backed by experience and a commitment to justice.
    </p>
   </div>
   <div className="grid grid-cols-3 gap-10 ">
    {areas.map((area, index) => (
     <div
      key={index}
      className={`
              p-8 flex flex-col  
              border-gray
              border-l-[0.5px]
              ${(index + 1) % 3 === 0 ? "border-r-[0.5px]" : ""}
              
              
            `}
     >
      <div className="font-montserrat text-[24px] leading-6 text-primary mb-8">{area.number}</div>

      <h3 className="mb-6">
       <span className="font-montserrat font-semibold text-[32px] leading-10 text-primary">{area.title} </span>
       <span className="font-playfair italic font-normal text-[32px] leading-10 text-primary">{area.titleItalic}</span>
      </h3>

      <p className="font-inter text-[16px] leading-6 text-base">{area.description}</p>
     </div>
    ))}
   </div>
  </section>
 );
};

export default PracticalArea;
