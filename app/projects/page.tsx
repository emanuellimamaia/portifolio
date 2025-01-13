import { PageIntroduction } from "../componets/pages/projects/page-introduction";
import { ProjectsList } from "../componets/pages/projects/projects-list";
import { fetchHygraphQuery } from "../componets/ultis/fetch-hygraph-query";
import { ProjectsPageData } from "../types/pages-info";

export default async function Projects() {
  return (
    <>
      <PageIntroduction />

      <ProjectsList />
    </>
  );
}
