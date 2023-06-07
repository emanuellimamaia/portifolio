
import { getRelativeTimeString } from "@/app/componets/ultis/get-relative-time"
import { ReactNode } from "react"

type KnowTechProps = {
  tech: {
    icon: ReactNode
    name: string
   startDate: string
 }
}
export const KnowTech = ({tech}:KnowTechProps) =>{
  const relativeTime = getRelativeTimeString(new Date(tech.startDate), 
  'pt-BR',
  ).replace('há',' ')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between ">
      <p className="font-medius">
        {tech.name}

        {tech.icon}
          </p>
        </div>
    <span>{relativeTime} de experiência</span>
    </div>
  )
}