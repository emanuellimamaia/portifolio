import { SectionTitle } from "@/app/componets/section-title"
import { ExperienceItem } from "./experience-item"

export const WorkExperience = () => {
  return(
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:fle-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências" title="Experiência Profissional"/>

        {/* escrever um texto sobre experiêcias  */}
        <p className="text-gray-400 mt-6">
          estou sempre aberto a novos desafios </p>
      </div>

        {/* adiciona as experiências  */}
      <div className="flex flex-col  gap-4">
        <ExperienceItem/>
        <ExperienceItem/>
      </div>

    </section>
  )
}