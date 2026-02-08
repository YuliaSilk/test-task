import {GoArrowRight} from "react-icons/go";

interface TeamCardProps {
 name: string;
 surname: string;
 specialties: string[];
}

const TeamCard = ({name, surname, specialties}: TeamCardProps) => {
 return (
  <div className="flex flex-col group cursor-pointer">
   <div className="aspect-3/4 bg-[#D9D9D9] mb-6 overflow-hidden">{/* <Image ... /> */}</div>

   <div className="flex flex-wrap gap-3 mb-6">
    {specialties.map((spec) => (
     <span
      key={spec}
      className="px-2 py-1 border-[0.2px] border-primary rounded-md text-[12px] leading-5 font-montserrat text-dark"
     >
      {spec}
     </span>
    ))}
   </div>

   <div className="flex justify-between items-center ">
    <h3 className="text-[24px] leading-8">
     <span className="font-montserrat font-medium">{name} </span>
     <span className="font-playfair italic">{surname}</span>
    </h3>

    <div className="w-9 h-9 rounded-full border-[0.5px] border-primary flex items-center justify-center ">
     <GoArrowRight className="w-6 h-6" />
    </div>
   </div>
  </div>
 );
};

export default TeamCard;
