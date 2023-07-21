"use client";

import React from 'react'

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import CimFarmacia from '../../../../public/images/assistenciais/farmacia/cim-farmacia.png'

const images = [ CimFarmacia ];

const getInfosFromImages = [
    {
        id: "Informações sobre Medicamentos",
        src: images[0],
        text: "Centro de Informações sobre Medicamentos (CIM) pelo Setor de Farmácia Hospitalar (SFH).",
        alt: "Informações sobre Medicamentos",
        idColor: "text-[#c62828]",
        href: ''
      },
]

type Props = {}

const Farmacia = (props: Props) => {
    const currentRoute = usePathname();
    
  return (
    <div className="flex">
      <Sidebar />
      <Main title="Sistemas Assistenciais > Farmácia">
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
  )
}

export default Farmacia