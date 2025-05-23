import { Project } from "../types/project";
import LoginMobileFulog from '@/public/LoginMobileFulog.png'
import VehicleFulog from '@/public/VehicleFulog.png'
import Fulog from '@/public/images/fulog.png'
import Vocation from '@/public/images/vocation.png'
import PicSpace from '@/public/images/pic-space.png'
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
      {
        icon: '',
        name: "Python",
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
    liveProjectUrl: "https://fulog-front-git-main-emanuellimamaias-projects.vercel.app/dashboard" /* link do projeto */
  },
  {
    slug: "Vocacional",
    thumbnail: {
      url: Vocation.src,
    },
    title: "Vocacional",
    shortDescription: "Site feito para os vocacionados do Vocacional Shalom 2025",
    technologies: [
      {
        icon: '',
        name: "Nodejs",
        startDate: "",
      },

      {
        icon: '',
        name: "NextJs",
        startDate: "",
      },
      {
        icon: '',
        name: "PayloadCMS",
        startDate: "",
      },
      {
        icon: '',
        name: "Hygraph CMS",
        startDate: "",
      },


    ],
    pageThumbnail: {
      url: Vocation.src,
    },
    sections: [
      {
        title: "Pagina inicial",
        image: {
          url: Vocation.src,
        },
      },
    ],
    description: {
      raw: "O Vocacional Shalom é uma proposta da Comunidade Católica Shalom, focada no acompanhamento e discernimento vocacional, ajudando jovens a refletirem sobre o chamado de Deus para suas vidas",
      text: "",
    },
    gitHubUrl: "",
    liveProjectUrl: "https://comshalom.org/vocacionalshalom/" /* link do projeto */
  },
  {
    slug: "PicSpace",
    thumbnail: {
      url: PicSpace.src,
    },
    title: "Pic-space",
    shortDescription: "Um gerenciador de fotos inteligente que usa IA",
    technologies: [
      {
        icon: '',
        name: "Nodejs",
        startDate: "",
      },

      {
        icon: '',
        name: "NextJs",
        startDate: "",
      },
      {
        icon: '',
        name: "NestJs",
        startDate: "",
      },
      {
        icon: '',
        name: "Clarif-AI",
        startDate: "",
      },
      {
        icon: '',
        name: "Postgress",
        startDate: "",
      },


    ],
    pageThumbnail: {
      url: PicSpace.src,
    },
    sections: [
      {
        title: "Pagina inicial",
        image: {
          url: PicSpace.src,
        },
      },
    ],
    description: {
      raw: "Gerencie suas fotos de maneira inteligente.",
      text: "A IA ler a suas imagens e adicionar 3 tags que ajuda você a busca ela futuramente.",
    },
    gitHubUrl: "https://github.com/emanuellimamaia/picSpace-front",
    liveProjectUrl: "https://pic-space-front-vde6.vercel.app/" /* link do projeto */
  },
];