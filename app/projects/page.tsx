import { PageIntroduction } from "../componets/pages/projects/page-introduction";
import { ProjectsList } from "../componets/pages/projects/projects-list";
import { fetchHygraphQuery } from "../componets/ultis/fetch-hygraph-query";
import { ProjectsPageData } from "../types/pages-info";

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = ` query ProjectsQuery {
    projects {
      shortDescription
      slug
      title
      thumbnail {
        url
      }
      technologies {
        name
      }
    }
  }`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 //24 HORAS
  );
};
export default async function Projects() {
  const { projects } = await getPageData();
  return (
    <>
      <PageIntroduction />

      <ProjectsList projects={projects} />
    </>
  );
}
