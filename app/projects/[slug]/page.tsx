
import { ProjectDetails } from "@/app/componets/pages/projects/project/project-details";
import { fetchHygraphQuery } from "@/app/componets/ultis/fetch-hygraph-query";
import { ProjectPageData, ProjectsPageStaticData } from "@/app/types/pages-info";
import { Metadata } from "next";

type ProjectProps = {
  params: {
    slug: string
  }
}



const getProjectDetails = async (slug:string): Promise <ProjectPageData> =>{
  const query = `
  query MyQuery {
    project(where: {slug: "${slug}"}) {
      id
      liveProjectUrl
      title
      sections {
        title
        image {
          url
        }
      }
      shortDescription
      technologies {
        name
      }
      pageThumbnail {
        fileName
        url
      }
      description {
        raw
      }
      gitHubUrl
    }
  }
  
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 //24 HORAS 
  )
}
export default async function Project ({ params:{slug} }: ProjectProps) {
  const { project } = await getProjectDetails(slug)

  return(
    <>
      <ProjectDetails project = {project} />
    </>
  )
}
export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `
  const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query)

  return projects
} 

export async function generateMetadata({
  params: {slug}
}:ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug)
  const project =  data.project;
 return { 
 title: project.title,
 description:project.description.text,
 }
} 