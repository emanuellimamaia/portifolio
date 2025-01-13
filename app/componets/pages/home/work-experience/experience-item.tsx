import { Techbage } from "@/app/componets/tech-badge";
import Image from "next/image";

type ExperienceItemProps = {
  imageUrl: string;
  company: string;
  programingType: string;
  date: string;
  whatWasDone: string;
  skills: string;
  tecnologis: string[];
};
export const ExperienceItem = ({
  imageUrl,
  company: experience,
  programingType,
  date,
  whatWasDone,
  skills,
  tecnologis,
}: ExperienceItemProps) => {
  return (
    <div className="grid grid-cols  gap-4 md:gap-10 border-b-2 border-b-gray-500">
      <div className="flex flex-col items-start ">
        <div className="rounded-full border border-gray-500  bg-white p-2">
          {/* logo da eempresa que ja trabelhei */}
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt="logo da empresa"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div className="">
        {/* Nome da empresa */}
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href=""
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
          >
            {experience}
          </a>

          {/*  qual tipo de progamador você era na empresa */}
          <h4 className="text-gray-300 ">{programingType}</h4>

          {/* tempo de empresa */}
          <span className="text-gray-500">{date}</span>

          {/* oque você faz na sua vaga  */}
          <p className="text-gray-400">{whatWasDone}</p>
        </div>
        {/* tecnologias */}
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          {skills}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {tecnologis.map((tec) => (
            <Techbage key={tec} name={tec} />
          ))}
        </div>
      </div>
    </div>
  );
};
