
import { HeroSection } from "./componets/pages/home/hero-section";
import { HighlightedProjects } from "./componets/pages/home/highighlead-projects";


import { KnowTechs } from "./componets/pages/home/know-techs";
import { WorkExperience } from "./componets/pages/home/work-experience";
import { fetchHygraphQuery } from "./componets/ultis/fetch-hygraph-query";
import { HomePageData } from "./types/pages-info";



export const metadata = {
  title: 'Home'
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        icon
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
  }
`

return fetchHygraphQuery (
  query, 60 * 60 * 24
)
}

export default async function Home() {
  const data = await getPageData();

  const pageData = data?.page;

  return (
    <>
    
        <HeroSection homeInfo={pageData}/>
        <KnowTechs/>
        <HighlightedProjects projects={pageData.highlightProjects} />
       {/* <WorkExperience/>  */}
    
    </>
  )
}
