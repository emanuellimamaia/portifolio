import { HorizontalDivider } from "@/app/componets/divider/horizontal"
import { SectionTitle } from "@/app/componets/section-title"
import { Projectcard } from "./project-card"
import { Link } from "@/app/componets/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Project } from "@/app/types/project"

type HighlightedProjectsProps ={
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (

    <section className="container py-16">
      <SectionTitle
       subtitle="destaques" 
       title="Projetos os destaque" />
      <HorizontalDivider className="mb-16"/>
      
      <div>
        {projects?.map(project => (
          <div key={project.slug}>
            <Projectcard project={project}/>
            <HorizontalDivider className="my-16"/>
          </div>
        ))}
        <p className="flex  items-center gap-1.5">
          <span className="text-gray-400"> Se interessou?</span>
          <Link 
          href="/projects"
          className="inline-flex">
            ver todos
            <HiArrowNarrowRight/>
            </Link>
           
        </p>
      </div>
    </section>
  )
}