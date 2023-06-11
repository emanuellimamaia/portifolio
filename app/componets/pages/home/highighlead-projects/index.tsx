import { HorizontalDivider } from "@/app/componets/divider/horizontal"
import { SectionTitle } from "@/app/componets/section-title"
import { Projectcard } from "./project-card"

export const HighlightedProjects = () => {
  return (

    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos os destaque" />
      <HorizontalDivider className="mb-16"/>
      <div>
        <Projectcard/>
        <HorizontalDivider/>
        <Projectcard/>
      </div>
    </section>
  )
}