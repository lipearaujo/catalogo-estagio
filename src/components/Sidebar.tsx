import React from 'react'
import Image from 'next/image'

import logoHU from '../../public/logo-hu.png'

import { GiMedicalPack } from "react-icons/gi";
import { FaSuitcase, FaNewspaper } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiClipboardTextFill, PiNotebookFill } from "react-icons/pi";
import { MdEmail, MdCollectionsBookmark } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { MdHelpCenter } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import SidebarItem from './SidebarItem';
import Link from 'next/link';

const routesList = [
  {
    id: "assistencias",
    name: "Assistenciais",
    href: "/assistenciais",
    icon: <GiMedicalPack />,
    color: "#c62828"
  },
  {
    id: "administrativos",
    name: "Administrativos",
    href: "/administrativos",
    icon: <FaSuitcase />,
    color: "#558b2f"
  },
  {
    id: "ensino",
    name: "Ensino",
    href: "/ensino",
    icon: <RiGraduationCapFill />,
    color: "#283593"
  },
  {
    id: "formularios",
    name: "Formulários",
    href: "/formularios",
    icon: <PiClipboardTextFill />,
    color: "#00695c"
  },
  {
    id: "relatorios",
    name: "Relatórios",
    href: "/relatorios",
    icon: <BiSolidReport />,
    color: "#37474f"
  },
  {
    id: "emails-institucionais",
    name: "E-mails Inst.",
    href: "/emails-institucionais",
    icon: <MdEmail />,
    color: "#0277bd"
  },
  { id: "portais", name: "Portais", href: "/portais", icon: <FaNewspaper />, color: "#4527a0" },
  {
    id: "treino-homologacao",
    name: "Trein. e Homol.",
    href: "/treino-homologacao",
    icon: <PiNotebookFill />,
    color: "#f9a825"
  },
  {
    id: "restritos",
    name: "Restritos",
    href: "/restritos",
    icon: <SiSpringsecurity />,
    color: "#263238"
  },
  {
    id: "manuais",
    name: "Manuais",
    href: "/manuais",
    icon: <MdCollectionsBookmark />,
    color: "#263238"
  },
  {
    id: "ajuda",
    name: "Ajuda",
    href: "/ajuda",
    icon: <MdHelpCenter />,
    color: "#263238"
  },
];

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <aside className='w-[230px]'>
      <nav className="w-full">
        <Link href="/"><Image className='ml-4 mt-4' src={logoHU} width={40} height={40} alt="Logo do HU-UFGD" /></Link>
        <p className='border-b-[1px] mt-8 mb-8 ml-1 w-11/12 border-[#888888]'></p>
        <ul className="list-none p-0">
            {routesList.map((route) => (
              <SidebarItem id={route.id} name={route.name} href={route.href} icon={route.icon} color={route.color} />
            ))}   
        </ul>
      </nav>

      <p className='border-b-[1px] mt-8 mb-8 ml-1 w-11/12 border-[#888888]'></p>
      <footer className='flex flex-col items-start gap-2 px-5 text-[14px] rounded-[10px] text-white'>
        <p className='bg-[#888888] py-1 px-2 rounded'><strong>Seu IP é: 10.18.129.197</strong></p>
        <p><strong>© Catálogo de Sistemas</strong></p>
        <p>SETISD/HU-UFGD/Ebserh</p>
      </footer>
    </aside>
  )
}

export default Sidebar

