import { Techbage } from "@/app/componets/tech-badge"
import { Project } from "@/app/types/project"
import Image from "next/image"
type ProjectCardProps = {
  project: Project
}
export const PorjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map(x => x.name).join(', ');
  if (!project.thumbnail) {
    return (
      <div>
        Nao achei
      </div>
    )
  }
  return (



    <div className="rounded-lg h-[436] flex flex-col 
    bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 
    opacity-70 hover:opacity-100 transition-all group">
      <div>
        <Image
          width={380}
          height={200}
          src={project.thumbnail.url}
          alt={`Thubanail do projeto ${project.title}`}
          unoptimized
          className="h-full w-full group-hover:scale-110 duration-500 transition-all "
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all"
        >{project.title}</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  )

}