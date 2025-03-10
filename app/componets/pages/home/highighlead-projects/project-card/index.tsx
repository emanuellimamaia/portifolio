import { Link } from "@/app/componets/link";
import { Techbage } from "@/app/componets/tech-badge";
import { Project } from "@/app/types/project";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from "@/public/images/logo_emanuel.svg";
type ProjectcardProps = {
  project: Project;
};

export const Projectcard = ({ project }: ProjectcardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full ">
        <Image
          src={project.thumbnail.url}
          width={500}
          height={600}
          alt={`foto do projeto ${project.title}`}
          className="w-full h-full object-cover  rounded-lg "
        />
      </div>

      <div className="flex-1 lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medius text-lg text-gray-50">
          <Image width={30} height={30} alt="" src={logo.src} /> {project.title}
        </h3>

        <p className="text-gray-400 my-6">{project.shortDescription}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech) => (
            <Techbage
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          {" "}
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};
