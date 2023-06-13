import { Button } from "@/app/componets/button"
import { SectionTitle } from "@/app/componets/section-title"
import { Techbage } from "@/app/componets/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/Fi"
import { Link } from "@/app/componets/link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDatails = () => {
  return(
      <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
       <div className="absolute inset-0 z-[-1] bg"
       style={{
        background:'url(/images/hero-bg.png)no-repeat center/cover, url(https://br.web.img3.acsta.net/pictures/17/03/27/09/49/121118.jpg) no-repeat center/cover'
       }}>

       </div>
      <SectionTitle subtitle="projetos" title="nome do projeto" 
      className="text-center items-center sm:[&>h3]:text-4xl "/>
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis quibusdam temporibus eum atque quisquam sint veritatis ut nemo veniam quos voluptatibus fugiat eos explicabo voluptas quam distinctio animi, dicta eius.
      </p>

      <div className="w-full max-w-[340xp] flex flex-wrap gap-2 items-center justify-center">
       <Techbage name="react js"/>
       <Techbage name="node js"/>
       <Techbage name="react js"/>
       <Techbage name="node js"/>


      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row ">
        <a href="https://github.com/" target="_blank">
          <Button className="max-w-[180px]">
            <TbBrandGithub size={20}/>
            Repositorio
          </Button>
        </a>
        <a href="https://github.com/" target="_blank">
          <Button className="max-w-[180px]">
            <FiGlobe size={20}/>
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20}/>
        voltar para projetos
      </Link>
      </section>
  )
}