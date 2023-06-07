import { HiArrowNarrowRight } from "react-icons/hi"
import { HorizontalDivider } from "../../../divider/horizontal"
import { Link } from "../../../link"
import { SectionTitle } from "../../../section-title"
import { ProjectCard } from "./project-card"

export const HightedProjetcs = () => {
  return(
    <section className="container py-16">

      <SectionTitle subtitle="destaques" title="Projetos em destaque"/>
      <HorizontalDivider className="mb-16"/>

    <div>
      <ProjectCard/>
      <HorizontalDivider className="my-16"/>
      <ProjectCard/>
      <HorizontalDivider className="my-16"/>

      <p className="flex items-center gap-1.5">
        <span className="text-gray-400" >se interessou?</span>
        <Link href="/projetos" className="inline-flex">
        ver todos
        <HiArrowNarrowRight/>
        </Link>
      </p>
    </div>

    </section>
  )
}