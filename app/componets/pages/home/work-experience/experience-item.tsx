import { Techbage } from "@/app/componets/tech-badge"
import Image from "next/image"

export const ExperienceItem = () =>{
  return(
    <div className="grid grid-cols [40px,ifr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          {/* logo da eempresa que ja trabelhei */}
          <Image 
          src="data:image/jpeg;base64,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"
          width={40}
          height={40}
          alt="logo da empresa"
          className="rounded-full"
          
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"/> 

      </div>
      <div className="">
        {/* sobre a empresa que você trabalhou */}
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a href=""
          target="_blank"
          className="text-gray-500 hover:text-emerald-500 transition-colors">
            sem experience</a>

            {/*  qual tipo de progamador você era na empresa */}
            <h4 className="text-gray-300 ">Full-stack</h4>

            {/* tempo de empresa */}
            <span className="text-gray-500">
              out 2022 . 0 momente .(6 meses)
            </span>

            {/* oque você faz na sua vaga  */}

            <p className="text-gray-400">
              Desenvolvedor full-stack,pau para toda obra pronto para novos desaefios
            </p>
  
        </div>
        {/* tecnologias */}
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8" > 
        <Techbage name="node.js"></Techbage>
        </div>

      </div>
    </div>
  )

}