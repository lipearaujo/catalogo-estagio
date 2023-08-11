"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SidebarItem from "./SidebarItem";
import { useUserIp } from "@/utils/useUserIp";

import logoHU from "../../public/logo-hu.png";

import { GiMedicalPack, GiHamburgerMenu } from "react-icons/gi";
import { FaSuitcase, FaNewspaper } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiClipboardTextFill, PiNotebookFill } from "react-icons/pi";
import { MdEmail, MdCollectionsBookmark, MdHelpCenter } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { BiSolidReport } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const routesList = [
  {
    id: "assistencias",
    name: "Assistenciais",
    href: "/assistenciais",
    subHref: [
      "/assistenciais/farmacia",
      "/assistenciais/sil",
      "/assistenciais/nutricao",
      "/assistenciais/pulseiras",
    ],
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
    subHref: ["/ensino/pesquisa"],
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
    subHref: ["/relatorios/paineis"],
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
    tooltip:
      "Ambiente de treinamento e homologação dos sistemas em implantação",
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

type Props = {};

const Sidebar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);
  const ip = useUserIp();

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <aside className="w-[230px] max-[1023px]:w-full">
      <nav className="w-full">
        <div className="flex justify-center items-center gap-3 max-lg:justify-between max-lg:w-screen max-lg:items-center max-lg:h-[56px] max-lg:px-5 max-lg:py-2">
          <div onClick={handleNav} className="lg:hidden">
            <GiHamburgerMenu
              size={24}
              className="text-white cursor-pointer relative top-1"
            />
          </div>
          <Link
            href="/"
            title="Página inicial"
            className="flex items-center justify-center mr-7 max-lg:mr-0"
          >
            <Image
              src={logoHU}
              alt="Logo do HU-UFGD"
              className="w-[40px] lg:w-[80px]"
            />
          </Link>
        </div>
        <p className="hidden lg:block border-b-[1px] mt-[25px] mb-[25px] ml-1 w-11/12 border-[#ccc] opacity-10"></p>
        <ul className="list-none p-0 hidden lg:flex flex-col">
          {routesList.map((route) => (
            <SidebarItem
              key={route.id}
              id={route.id}
              name={route.name}
              href={route.href}
              subHref={route.subHref}
              icon={route.icon}
              color={route.color}
              tooltip={route.tooltip}
            />
          ))}
        </ul>
      </nav>

      <p className="hidden lg:block border-b-[1px] mt-8 mb-8 ml-1 w-11/12 border-[#ccc] opacity-10"></p>
      <footer className="hidden lg:flex flex-col items-start gap-2 px-5 text-[14px] rounded-[10px] text-white">
        <p>
          <strong>Seu IP é: {ip}</strong>
        </p>
        <p>
          <strong>© Catálogo de Sistemas</strong>
        </p>
        <p>SETISD/HU-UFGD/Ebserh</p>
      </footer>

      <div
        className={
          menuOpen
            ? "max-sm:p-2 fixed left-0 top-0 overflow-auto w-[70%] lg:hidden md:max-lg:w-[40%] h-screen border-r border-[#263238] bg-[#F1F5F9] p-10 ease-in duration-500 z-50"
            : "max-sm:p-2 fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiFillCloseCircle size={24} />
          </div>
        </div>
        <div className="w-full">
          <ul className="list-none p-0 text-black flex flex-col">
            {routesList.map((route) => (
              <SidebarItem
                key={route.id}
                id={route.id}
                name={route.name}
                href={route.href}
                subHref={route.subHref}
                icon={route.icon}
                color={route.color}
                tooltip={route.tooltip}
              />
            ))}
          </ul>

          <p className="lg:block border-b-[1px] mt-4 mb-4 ml-1 w-full border-[#ccc] opacity-10"></p>
          <footer className="flex flex-col items-center gap-2 text-[14px] rounded-[10px] text-start text-black">
            <p className="">
              <strong>Seu IP é: {ip}</strong>
            </p>
            <p>
              <strong>© Catálogo de Sistemas</strong>
            </p>
            <p>SETISD/HU-UFGD/Ebserh</p>
          </footer>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
