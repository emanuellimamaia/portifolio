import { Button } from "@/app/componets/button";
import { SectionTitle } from "@/section-title";
import { Techbage } from "@/app/componets/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { Link } from "@/app/componets/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

import { RichText } from "@/app/componets/rich-text";
import { Project } from "@/app/types/project";

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  if (!project.title) {
    return <div>titulo nao encontrado</div>;
  }

  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
      ></div>
      <SectionTitle
        subtitle="projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />

      <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        {project.description.raw}
      </div>

      <div className="w-full max-w-[340xp] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech) => (
          <Techbage key={tech.name} name={tech.name} />
        ))}
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row ">
        <a href={project.gitHubUrl} target="_blank">
          <Button className="max-w-[180px]">
            <TbBrandGithub size={20} />
            Repositorio
          </Button>
        </a>
        <a href={project.liveProjectUrl} target="_blank">
          <Button className="max-w-[180px]">Projeto Online</Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        voltar para projetos
      </Link>
    </section>
  );
};
