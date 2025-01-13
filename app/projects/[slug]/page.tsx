import { ProjectDetails } from "@/app/componets/pages/projects/project/project-details";
import { fetchHygraphQuery } from "@/app/componets/ultis/fetch-hygraph-query";
import {
  ProjectPageData,
  ProjectsPageStaticData,
} from "@/app/types/pages-info";
import { Metadata } from "next";
import { projectsData } from "../projects";

type ProjectProps = {
  params: {
    slug: string;
  };
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const project = projectsData.find((project) => project.slug === slug);

  if (!project) {
    return (
      <>
        <p>Projeto nao encontrado</p>
      </>
    );
  }
  return (
    <>
      <ProjectDetails project={project} />
    </>
  );
}
