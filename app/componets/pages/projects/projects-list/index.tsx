import Link from "next/link";

import { PorjectCard } from "./project-card";
import { projectsData } from "@/app/projects/projects";

export const ProjectsList = () => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projectsData.map((project) => {
        return (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <PorjectCard project={project} />
          </Link>
        );
      })}
    </section>
  );
};
