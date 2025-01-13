import { Project } from "../types/project";
import LoginMobileFulog from '@/public/LoginMobileFulog.png'
import VehicleFulog from '@/public/VehicleFulog.png'
export const projectsData: Project[] = [
  {
    slug: "fulog",
    thumbnail: {
      url: LoginMobileFulog.src,
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
      raw: "Aplicativo para gestão de veiculos e monitoramento de viagens, divido em um front-end feito em next 15 que consome uma api feita usando nesjt com prisma ORM para gerenciamento de banco.",
      text: "",
    },
  },
];