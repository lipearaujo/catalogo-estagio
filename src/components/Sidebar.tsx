import React from "react";
import Image from "next/image";
import Link from "next/link";


import SidebarItem from "./SidebarItem";

import logoHU from "../../public/logo-hu.png";

import { GiMedicalPack } from "react-icons/gi";
import { FaSuitcase, FaNewspaper } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiClipboardTextFill, PiNotebookFill } from "react-icons/pi";
import { MdEmail, MdCollectionsBookmark } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { MdHelpCenter } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";

type Props = {};

const Sidebar = (props: Props) => {
  
  const routesList = [
  {
    id: "assistencias",
    name: "Assistenciais",
    href: "/assistenciais",
    icon: <GiMedicalPack />,
    color: "bg-[#c62828]",
    tooltip: "Sistemas utilizados pela área assistencial",
  },
  {
    id: "administrativos",
    name: "Administrativos",
    href: "/administrativos",
    icon: <FaSuitcase />,
    color: "bg-[#558b2f]",
    tooltip: "Sistemas utilizados pela área administrativa",
  },
  {
    id: "ensino",
    name: "Ensino",
    href: "/ensino",
    icon: <RiGraduationCapFill />,
    color: "bg-[#283593]",
    tooltip: "Sistemas voltados às áreas de ensino e pesquisa",
  },
  {
    id: "formularios",
    name: "Formulários",
    href: "/formularios",
    icon: <PiClipboardTextFill />,
    color: "bg-[#00695c]",
    tooltip: "Acesso a alguns formulários",
  },
  {
    id: "relatorios",
    name: "Relatórios",
    href: "/relatorios",
    icon: <BiSolidReport />,
    color: "bg-[#37474f]",
    tooltip: "Sistemas usados para a geração de relatórios",
  },
  {
    id: "emails-institucionais",
    name: "E-mails Inst.",
    href: "/emails-institucionais",
    icon: <MdEmail />,
    color: "bg-[#0277bd]",
    tooltip: "Acesso aos e-mails institucionais",
  },
  {
    id: "portais",
    name: "Portais",
    href: "/portais",
    icon: <FaNewspaper />,
    color: "bg-[#4527a0]",
    tooltip: "Portais institucionais informativos",
  },
  {
    id: "treino-homologacao",
    name: "Trein. e Homol.",
    href: "/treino-homologacao",
    icon: <PiNotebookFill />,
    color: "bg-[#f9a825]",
    tooltip: "Ambiente de treinamento e homologação dos sistemas em implantação",
  },
  {
    id: "restritos",
    name: "Restritos",
    href: "/restritos",
    icon: <SiSpringsecurity />,
    color: "bg-[#263238]",
    tooltip: "Sistemas restritos ao SGPTI",
  },
  {
    id: "manuais",
    name: "Manuais",
    href: "/manuais",
    icon: <MdCollectionsBookmark />,
    color: "bg-[#263238]",
    tooltip: "Manuais dos sistemas utilizados no HU-UFGD",
  },
  {
    id: "ajuda",
    name: "Ajuda",
    href: "/ajuda",
    icon: <MdHelpCenter />,
    color: "bg-[#263238]",
    tooltip: "Ajuda e sobre o Catálogo de Sistemas",
  },
];

  return (
    <aside className="w-[230px]">
      <nav className="w-full">
        <Link href="/" title="Página inicial" className="flex items-center justify-center">
          <Image
            src={logoHU}
            width={80}
            height={80}
            alt="Logo do HU-UFGD"
          />
        </Link>
        <p className="border-b-[1px] mt-[25px] mb-[25px] ml-1 w-11/12 border-[#ccc] opacity-10"></p>
        <ul className="list-none p-0">
          {routesList.map((route, idx) => (
            <SidebarItem
              id={route.id}
              name={route.name}
              href={route.href}
              icon={route.icon}
              color={route.color}
              tooltip={route.tooltip}
            />
          ))}
        </ul>
      </nav>

      <p className="border-b-[1px] mt-8 mb-8 ml-1 w-11/12 border-[#ccc] opacity-10"></p>
      <footer className="flex flex-col items-start gap-2 px-5 text-[14px] rounded-[10px] text-white">
        <p className="">
          <strong>Seu IP é: 10.18.129.197</strong>
        </p>
        <p>
          <strong>© Catálogo de Sistemas</strong>
        </p>
        <p>SETISD/HU-UFGD/Ebserh</p>
      </footer>
    </aside>
  );
};

export default Sidebar;
