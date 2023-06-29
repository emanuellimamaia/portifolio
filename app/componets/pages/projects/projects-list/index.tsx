import Link from "next/link"

import { Project } from '@/app/types/project'
import { PorjectCard } from "./project-card"




type ProjectsListProps = {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => {
        return (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <PorjectCard project={project} />
          </Link>
        )
      })}
    </section>
  )
}