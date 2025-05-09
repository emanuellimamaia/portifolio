import { SectionTitle } from "@/section-title";
import { ExperienceItem } from "./experience-item";
import navegam from "public/Navegam.svg";
export const WorkExperience = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:fle-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />

        {/* escrever um texto sobre experiêcias  */}
        <p className="text-gray-400 mt-6">
          Engenheiro de software sempre buscando oportunidades para aprender e
          crescer profissionalmente.
        </p>
      </div>

      {/* adiciona as experiências  */}
      <div className="flex flex-col gap-4 ">
        <ExperienceItem
          tecnologis={["React", "TypeScript", "Node.js"]}
          date="novembro de 2023 a junho de 2024"
          company="Grupo Navegam - Treinner"
          imageUrl={navegam}
          programingType="Front-End"
          skills="React, Node.js, TypeScript e Next.js"
          whatWasDone="Desenvolvi landing pages e plataformas de e-commerce utilizando as tecnologias destacadas."
        />

        <ExperienceItem
          tecnologis={["React", "TypeScript", "Node.js"]}
          date="junho de 2024 a janeiro de 2025"
          company="Grupo Navegam - Desenvolvedor web"
          imageUrl={navegam}
          programingType="Full-stack"
          skills="Node.js, TypeScript, NestJs, Docker"
          whatWasDone="Desenvolvi soluções inovadoras para preservação da biodiversidade, monitoramento de cadeias produtivas, otimização logística e gestão eficiente, utilizando tecnologias destacadas."
        />

        <ExperienceItem
          tecnologis={["PHP", "Laravel", "Node.js", "Nuxt2"]}
          date="Março de 2025 até o momento"
          company="Aspen Internacional"
          imageUrl={navegam}
          programingType="Full-stack"
          skills="Nuxt, Laravel, Mysql"
          whatWasDone="Desenvolvi melhorias e correções em sistemas da área da educação, com foco em aprimorar a experiência dos usuários que utilizam as plataformas dele."
        />
      </div>
    </section>
  );
};
