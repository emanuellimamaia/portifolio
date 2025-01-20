import { Project } from "../types/project";
import LoginMobileFulog from '@/public/LoginMobileFulog.png'
import VehicleFulog from '@/public/VehicleFulog.png'
import Fulog from '@/public/images/fulog.png'
export const projectsData: Project[] = [
  {
    slug: "fulog",
    thumbnail: {
      url: Fulog.src,
    },
    title: "Fulog",
    shortDescription: "Aplicativo para gestão de veiculos e monitoramento de viagens",
    technologies: [
      {
        icon: '',
        name: "Nodejs",
        startDate: "",
      },
      {
        icon: '',
        name: "Nestjs",
        startDate: "",
      },
      {
        icon: '',
        name: "NextJs",
        startDate: "",
      },
      {
        icon: '',
        name: "Docker",
        startDate: "",
      },
    ],
    pageThumbnail: {
      url: VehicleFulog.src,
    },
    sections: [
      {
        title: "Pagina de veiculo",
        image: {
          url: VehicleFulog.src,
        },
      },
    ],
    description: {
      raw: "Aplicativo completo para gestão de veículos e monitoramento de viagens, desenvolvido com uma arquitetura moderna e eficiente. O front-end foi implementado utilizando Next.js 15, garantindo uma interface interativa, responsiva e de alto desempenho. O back-end foi construído com NestJS e o Prisma ORM, proporcionando um gerenciamento robusto e eficiente do banco de dados, além de uma API confiável e escalável para integração entre os serviços",
      text: "",
    },
    gitHubUrl: "https://github.com/emanuellimamaia/fulog-front",
    liveProjectUrl: "https://fulog-front.vercel.app/" /* link do projeto */
  },
];