import TeamList from "../team/TeamList";
import Button from "../ui/Button";

const TeamSection = () => {
 return (
  <section className="container-custom pt-20 ">
   <div className="flex flex-col items-center justify-center gap-6">
    <div className="section-label">
     <div className="w-3 h-3 rounded-full bg-primary" />
     <span>Our Team</span>
    </div>
    <h2 className="section-title">
     Meet Our
     <span className="section-title-italic"> Legal Team</span>
    </h2>
    <p className="text-[20px] text-base">Experienced. Passionate. Results-Driven. </p>
   </div>
   <TeamList />
   <div className="flex items-center justify-center">
    <Button showArrow>Find More Lawyer</Button>
   </div>
  </section>
 );
};

export default TeamSection;
