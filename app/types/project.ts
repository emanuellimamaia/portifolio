import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnowTech = {
  icon: string;
  name: string;
  startDate: string;
}
export type ProjecSection = {
  title:string;
  image: {
    url:string
  }
}
export type Project = {
  slug:string
  thumbnail: {
    url:string
  }
  title:string
  shortDescription:string
  technologies: KnowTech[]
  pageThumbnail: {
    url:string
  }
  sections:ProjecSection[]
  description: {
    raw:RichTextContent
    text:string
  }
  liveProjectUrl
  ?: string
  gitHubUrl?:string
}