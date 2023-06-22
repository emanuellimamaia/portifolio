'use client'
import { Button } from "@/app/componets/button"
import { Techbage } from "@/app/componets/tech-badge"
import { HomePageInfo } from "@/app/types/pages-info"
import { RichText } from "@graphcms/rich-text-react-renderer"
import Image from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandChrome, TbBrandGithub, TbBrandGmail, TbBrandLinkedin, TbBrandOnlyfans, TbBrandWhatsapp } from 'react-icons/tb'


const MOCK_CONTACTS = [
  {
    url: 'https://github.com/emanuellimamaia',
    icon: <TbBrandGithub/>
  },
  {
    url: 'https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/',
    icon: <TbBrandLinkedin/>
  },
  {
    url: 'https://wa.me/92991004322',
    icon: <TbBrandWhatsapp/>
  },
  {
    url: 'mailto:emanuellimamaia@gmail.com',
    icon: <TbBrandGmail/>
  },
]
type HeroSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return(
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32  lg:pb-[110px]">
    <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
      
      {/*parte aonde vai falar de mim e */}
      <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é </p>
          <h2 className="text-4xl font-medium mt-2">Emanuel Maia</h2>
 
          <div className="text-gray-400 my-6 text-sn:text-base">

          Olá meu nome é <strong className="text-gray-50">Emanuel Lima Maia</strong>, desde novo sempre foi um curioso da internet e um apaixonado por tecnologia.
           Atualmente buscando uma oportunidade no mundo da programação, sempre dedicado aos meus estudos na área e empenhado a cada dia melhorar e apreender com meus erros.
            {/* <RichText content={homeInfo.introduction.raw}/> */}  </div> 


       {/* parte que vai falar sobre minha tecnologias  */} 
        <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <Techbage name="React"/>
            <Techbage name="Node.js"/>
            <Techbage name="HTML5"/>
            <Techbage name="CSS3"/>
            <Techbage name="JavaScipt"/>
            <Techbage name="MySql"/>
        </div>

        {/* parte para entrar em contato */}
        <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sn:flex-row">
        <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
          <div className="text-2xl text-gray-600 flex items-center h-20 gap-3 ">
            {MOCK_CONTACTS.map((contact, index) => (
              <a
              href={contact.url}
              key={`contact-${index}`}
              target="_blank"
              className="hover:text-gray-100 transition-colors flex items-center h-20 gap-3"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>  
      
      <Image
      width={420}
      height={404}
      src="/images/emanuel_elevador.jpeg"
      alt="foto de perfil emanuel"
      className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg objetct-cover"
      />
      

    </div>
    </section>
  )
}