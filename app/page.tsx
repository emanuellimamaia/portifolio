
import { HeroSection } from "./componets/pages/home/hero-section";
import { HighlightedProjects } from "./componets/pages/home/highighlead-projects";

import { KnowTechs } from "./componets/pages/home/know-techs";
import { WorkExperience } from "./componets/pages/home/work-experience";

export default async function Home() {
  return (
    <>
    
        <HeroSection></HeroSection>
        <KnowTechs/>

 
       
        <HighlightedProjects/>
       <WorkExperience/> 
    
    </>
  )
}
