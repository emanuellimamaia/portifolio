import { Link } from "@/app/componets/link"
import { Techbage } from "@/app/componets/tech-badge"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

export const Projectcard = () =>{
  return(
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image 
        src="/images/foto emanuel elevador.png"
        width={420}
        height={304}
        alt="foto do projeto"
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg "/>

      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medius text-lg text-gray-50">
          <Image
          width={20}
          height={20}
          alt=""
          src="images/icons/project-title-icon.svg"
          
          /> fala 
        </h3>

        <p className="text-gray-400 my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto beatae consequuntur impedit, doloribus, error aliquam incidunt laudantium quis ipsam, reprehenderit maxime totam! Odio omnis placeat tenetur ex exercitationem ab.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <Techbage name="Next.js"/>
          <Techbage name="React"/>
          <Techbage name="Next.js"/>
          <Techbage name="React"/>
          <Techbage name="Next.js"/>
          <Techbage name="React"/>
          <Techbage name="Next.js"/>
          <Techbage name="React"/>
        </div>
        <Link
        href='/projects/book-wise' 
        >Ver projetos
        <HiArrowNarrowRight/></Link>
       
      </div>
    </div>
  )
}