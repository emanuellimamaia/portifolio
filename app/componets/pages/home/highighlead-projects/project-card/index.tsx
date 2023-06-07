import { Link } from "@/app/componets/link"
import { Techbage } from "@/app/componets/tech-badge"
import Image from "next/image"
import { HiArrowCircleRight } from "react-icons/hi"

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image 
        width={420}
        height={302}
        alt="thumbanil do projeto"
        src="/images/foto emanuel elevador.png"

        className=" w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full objetc-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image 
          width={20}
          height={20}
          alt=""
          src="/images/icons/project-title-icon.svg"
          />
           titulo do projeto
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat aperiam modi, atque sunt natus corporis quo tempora blanditiis totam esse? Pariatur autem quidem aliquam dolorum dolores. In omnis laudantium ea?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus minus ut commodi, a cum ad itaque quod ea ducimus excepturi error voluptatem! Nam quo harum soluta praesentium sequi ex beatae autem, rerum dicta illo ratione accusantium dolorum, nisi voluptate? Laborum sequi eius sit suscipit, possimus neque placeat veniam facilis!</p>
      
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <Techbage name="nextjs"/>
          <Techbage name="html"/>
          <Techbage name="css"/>
          <Techbage name="nextjs"/>
          <Techbage name="html"/>
          <Techbage name="css"/>
          
        </div>
        <Link href="/projetos/book">
        ver projeto
        <HiArrowCircleRight/>
        </Link>
      </div>

    </div>
  )
}