import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandMysql, TbBrandNextjs, TbBrandNpm, TbBrandReact } from "react-icons/tb"
import { SiNextdotjs } from "react-icons/si"
import { SectionTitle } from "../../../../../section-title"
import { KnowTech } from "./know-tech"

export const KnowTechs = () => {
  return(
    <section className="container py-16">
    <SectionTitle subtitle="competências" title="Conhecimentos"></SectionTitle>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
    
    <KnowTech tech={{
     icon: <TbBrandReact/>,
     name:"React",
     startDate :"2023-02-01"
    }}/>
    <KnowTech tech={{
     icon: <TbBrandNpm/>,
     name:"Node.Js",
     startDate :"2023-02-01"
    }}/>
    <KnowTech tech={{
     icon: <TbBrandHtml5/>,
     name:"HTML5",
     startDate :"2022-08-01"
    }}/>
    <KnowTech tech={{
     icon: <TbBrandCss3/>,
     name:"CSS",
     startDate :"2022-08-01"
    }}/>
     <KnowTech tech={{
     icon: <TbBrandMysql/>,
     name:"MYSQL",
     startDate :"2023-05-01"
    }}/>
    <KnowTech tech={{
     icon: <SiNextdotjs/>,
     name:"Next.js",
     startDate :"2023-06-01"
    }}/>


    
    </div>
    </section>
  )
}