import TeamList from "../team/TeamList";
import Button from "../ui/Button";
import {GoArrowRight} from "react-icons/go";

const TeamSection = () => {
 return (
  <section className="container-custom pt-20 ">
   <div className="flex flex-col items-center justify-center gap-6">
    <div className="flex items-center justify-center gap-2 ">
     <div className="w-3 h-3 rounded-full bg-primary" />
     <span className="font-montserrat text-base text-[16px]  leading-6">Our Team</span>
    </div>
    <h2 className="font-medium text-[40px] leading-12 tracking-tight-custom ">
     Meet Our
     <span className="font-playfair font-normal italic"> Legal Team</span>
    </h2>
    <p className="text-[20px] text-base">Experienced. Passionate. Results-Driven. </p>
   </div>
   <TeamList />
   <div className="flex items-center justify-center">
    <Button className="">
     Find More Lawyer
     <span>
      <GoArrowRight />
     </span>
    </Button>
   </div>
  </section>
 );
};

export default TeamSection;
