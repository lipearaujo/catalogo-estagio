"use client";
import React from 'react'

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import Pulseira from '../../../../public/images/assistenciais/pulseiras/pulseiras.png'

const images = [Pulseira]

const getInfosFromImages = [
    {
        id: "Pulseira Adulto - Gainscha",
        src: images[0],
        text: "Impressão das Pulseiras de Identificação para pacientes Adultos (impressora Gainscha).",
        alt: "Pulseira Adulto - Gainscha",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
    },
    {
        id: "Pulseira Adulto - Zebra",
        src: images[0],
        text: "Impressão das Pulseiras de Identificação para pacientes Adultos (impressora Zebra).",
        alt: "Pulseira Adulto - Zebra",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
    },
    {
        id: "Pulseira Infantil",
        src: images[0],
        text: "Impressão das Pulseiras de Identificação para pacientes Infantis.",
        alt: "Pulseira Adulto",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
    },
    {
        id: "Pulseira Neonato",
        src: images[0],
        text: "Impressão das Pulseiras de Identificação para pacientes Neonatos.",
        alt: "Pulseira Neonato",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
    },
    {
        id: "Pulseira Neonato (SOFT)",
        src: images[0],
        text: "Impressão das Pulseiras de Identificação para pacientes Neonatos (novo modelo).",
        alt: "Pulseira Neonato (SOFT)",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
    },
]

type Props = {}

const Pulseiras = (props: Props) => {
    const currentRoute = usePathname();

    return (
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Main title="Sistemas Assistenciais > SIL">
          <div className="flex flex-wrap justify-center gap-5 px-8">
            {getInfosFromImages.map((images) => (
              <Cards
                id={images.id}
                src={images.src}
                text={images.text}
                alt={images.alt}
                idColor={images.idColor}
                href={images.href}
              />
            ))}
          </div>
  
          {/*        <div className="flex items-center justify-end  ">
            <AddButton />
            </div> */}
        </Main>
      </div>
    );
}

export default Pulseiras