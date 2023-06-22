import { KnowTech, Project } from "./project"
import type { RichTextContent } from "@graphcms/rich-text-types";
export type socials = {
  url: string;
  icon: string;
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  }
  technologies: KnowTech[]
  profilePicture: {
    url: string;
  }
  socials: socials[]
  knowTechs: KnowTech[]
  highlightProjects: Project[]
}


export type ProjectPageData = {
  project: Project
}

export type ProjectsPageData = {
  projects: Project[]
}
export type ProjectsPageStaticData = {
  projects: {
    slug: string
  }[]
 }

export type HomePageData = {
  page : HomePageInfo
}