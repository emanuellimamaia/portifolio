"use client";
import { Button } from "@/app/componets/button";
import { Techbage } from "@/app/componets/tech-badge";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandChrome,
  TbBrandGithub,
  TbBrandGmail,
  TbBrandLinkedin,
  TbBrandOnlyfans,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/emanuellimamaia",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/emanuel-lima-maia-a222a7247/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://wa.me/92991004322",
    icon: <TbBrandWhatsapp />,
  },
  {
    url: "mailto:emanuellimamaia@gmail.com",
    icon: <TbBrandGmail />,
  },
];

export const HeroSection = () => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32  lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col lg:flex-row">
        {/*parte aonde vai falar de mim e */}
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é </p>
          <h2 className="text-4xl font-medium mt-2">Emanuel Maia</h2>

          <div className="text-gray-400 my-6 text-sn:text-base">
            Olá meu nome é{" "}
            <strong className="text-gray-50">Emanuel Lima Maia</strong>,
            Engenheiro de Software apaixonado por tecnologia e criação de
            soluções digitais que impactam positivamente empresas e usuários.
          </div>

          {/* parte que vai falar sobre minha tecnologias  */}
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            <Techbage name="JavaScript" />
            <Techbage name="TypeScript" />
            <Techbage name="Sql" />
            <Techbage name="React" />
            <Techbage name="Node.js" />
            <Techbage name="Next.js" />
            <Techbage name="Nest.js" />
            <Techbage name="Docker" />
            <Techbage name="Python" />
            <Techbage name="Bun" />
            <Techbage name="Linux" />
            <Techbage name="Jest" />
            <Techbage name="Prisma" />
            <Techbage name="AWS" />
            <Techbage name="Fastify" />
            <Techbage name="Tailwind" />
            <Techbage name="Express" />
          </div>

          {/* parte para entrar em contato */}
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sn:flex-row">
            <Button className="w-max shadow-button">
              <Link
                scroll
                href="#contact"
                className="flex flex-row justify-between items-center"
                onClick={handleContact}
              >
                Entrar em contato
                <HiArrowNarrowRight size={18} />
              </Link>
            </Button>

            <div
              className="text-2xl text-gray-600 flex 
          items-center h-20 gap-3 "
            >
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
        <div className="md:w-[50%] mt-10 w-[21rem]">
          <GitHubCalendar username="emanuellimamaia" colorScheme="dark" />
        </div>
      </div>
    </section>
  );
};
