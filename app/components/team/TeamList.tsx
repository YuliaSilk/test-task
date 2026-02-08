import {TEAM_MEMBERS} from "@/app/constants/teamMembers";
import TeamCard from "./TeamCard";

const TeamList = () => {
 return (
  <div className="grid grid-cols-4 gap-10 py-20">
   {TEAM_MEMBERS.map((member) => (
    <TeamCard
     key={member.id}
     {...member}
    />
   ))}
  </div>
 );
};

export default TeamList;
