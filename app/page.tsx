import Hero from "./components/home/HeroSection";
import LegalExpertise from "./components/home/PracticalAreaSection";
import TeamSection from "./components/home/TeamSection";

export default function Home() {
 return (
  <div className="">
   <main className="">
    <Hero />
    <LegalExpertise />
    <TeamSection />
   </main>
  </div>
 );
}
