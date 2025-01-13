import { HeroSection } from "./componets/pages/home/hero-section";
import { HighlightedProjects } from "./componets/pages/home/highighlead-projects";

import { KnowTechs } from "./componets/pages/home/know-techs";
import { WorkExperience } from "./componets/pages/home/work-experience";
import { fetchHygraphQuery } from "./componets/ultis/fetch-hygraph-query";
import { HomePageData } from "./types/pages-info";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
}
