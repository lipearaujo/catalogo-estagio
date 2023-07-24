"use client";
import React from 'react'

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import SilLab from '../../../../public/images/assistenciais/sil/sil-laboratorio.png'

const images = [SilLab]

const getInfosFromImages = [
    {
        id: "SIL - Laboratório",
        src: images[0],
        text: "Sistema de informação utilizado pela Unidade de Análises Clínicas e Anatomia Patológica (UACAP) para emissão de laudos de exames laboratoriais (versão LDAP).",
        alt: "SIL - Laboratório",
        idColor: "text-[#c62828]",
        href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/acompanhantes-pacientes",
    },
    {
        id: "SIL - Postos",
        src: images[0],
        text: "Sistema de informação da Unidade de Análises Clínicas e Anatomia Patológica (UACAP), utilizado pelos postos de atendimento interno do HU-UFGD, para emissão de laudos de exames laboratoriais (versão LDAP).",
        alt: "SIL - Postos",
        idColor: "text-[#c62828]",
        href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/acompanhantes-pacientes",
    },
    {
        id: "SIL - Intranet",
        src: images[0],
        text: "Sistema de informação utilizado pela Unidade de Análises Clínicas e Anatomia Patológica (UACAP) para emissão de laudos de exames laboratoriais (versão Intranet, mesmo link contido na área de trabalho dos computadores).",
        alt: "SIL - Intranet",
        idColor: "text-[#455A64]",
        href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/acompanhantes-pacientes",
    },
]

type Props = {}

const Sil = (props: Props) => {
    const currentRoute = usePathname();

    return (
      <div className="flex">
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

export default Sil