"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import SistemaPaineis from "../../../../public/images/relatorios/paineis/paineis.png";
import Kanban from "../../../../public/images/relatorios/paineis/kanban-catalogo.png";
import PainelBordo from "../../../../public/images/relatorios/paineis/painel-bordo.png";
import PainelGestao from "../../../../public/images/relatorios/paineis/indicadores.png";
import PainelIntranet from "../../../../public/images/relatorios/paineis/paineis-intranet.png";
import PainelCusto from "../../../../public/images/relatorios/paineis/painel-custos.png";
import PainelEstoque from "../../../../public/images/relatorios/paineis/painel-estoque.png";

const images = [
  SistemaPaineis,
  Kanban,
  PainelBordo,
  PainelGestao,
  PainelIntranet,
  PainelCusto,
  PainelEstoque,
];

const getInfosFromImages = [
  {
    id: "Sistema de Painéis",
    src: images[0],
    text: "Sistema para geração de painéis hospitalares (Kanban).",
    alt: "Sistema de Painéis",
    idColor: "text-[#37474f]",
    href: "http://10.18.0.62/paineis/login",
  },
  {
    id: "Kanban da Clínica Cirúrgica",
    src: images[1],
    text: "Painel Kanban da Clínica Cirúrgica.",
    alt: "Kanban da Clínica Cirúrgica",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.62/paineis/kanban:clinica-cirurgica",
  },
  {
    id: "Kanban da Clínica Médica",
    src: images[1],
    text: "Painel Kanban da Clínica Médica.",
    alt: "Kanban da Clínica Médica",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.62/paineis/kanban:clinica-medica",
  },
  {
    id: "Kanban da Clínica Pediátrica",
    src: images[1],
    text: "Painel Kanban da Clínica Pediátrica.",
    alt: "Kanban da Clínica Pediátrica",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.62/paineis/kanban:clinica-pediatrica",
  },
  {
    id: "Kanban da UTI Pediátrica",
    src: images[1],
    text: "Painel Kanban da UTI Pediátrica.",
    alt: "Kanban da UTI Pediátrica",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.62/paineis/kanban:uti-ped",
  },
  {
    id: "Painéis de Bordo do HU-UFGD",
    src: images[2],
    text: "Painéis de bordo com os indicadores hospitalares do HU-UFGD.",
    alt: "Painéis de Bordo do HU-UFGD",
    idColor: "text-[#455A64]",
    href: "http://sistemas.hugd.ebserh.gov.br/painelbordo/",
  },
  {
    id: "Painéis de Gestão do AGHU",
    src: images[3],
    text: "Painel de Gestão de Indicadores Hospitalares dos HUFs, desenvolvido pela Ebserh, utilizandoa base de dados do AGHU.",
    alt: "Painéis de Gestão do AGHU",
    idColor: "text-[#455A64]",
    href: "https://app.powerbi.com/view?r=eyJrIjoiYjRkNGQ0ZGQtYTYyNC00MDg2LWI1MDUtYTJhMjQyZmFiOTc5IiwidCI6IjY0ZDM0ZGRkLWFmZjAtNGQ5NS1iN2YxLTA3MzRhNWM4NDVlNSJ9",
  },
  {
    id: "Painéis (Intranet Ebserh)",
    src: images[4],
    text: "Painéis de indicadores da Ebserh.",
    alt: "Painéis (Intranet Ebserh)",
    idColor: "text-[#455A64]",
    href: "http://intranet.ebserh.gov.br/paineis",
  },
  {
    id: "Painel de Custos do HU-UFGD",
    src: images[5],
    text: "Painel de Custos do HU-UFGD, que pode ser visualizado através do Microsoft Power BI, plataforma unificada e escalonável para BI (business intelligence) corporativo e por self-service, a qual auxilia na obtenção de insights mais aprofundados sobre os dados.",
    alt: "Painel de Custos do HU-UFGD",
    idColor: "text-[#455A64]",
    href: "https://app.powerbi.com/view?r=eyJrIjoiNGRmOTQwYTAtYjcxOS00YjNjLTk0YmEtMWU2YjQxZGY2NWYxIiwidCI6IjY0ZDM0ZGRkLWFmZjAtNGQ5NS1iN2YxLTA3MzRhNWM4NDVlNSJ9",
  },
  {
    id: "Painel de Gestão de Estoque",
    src: images[6],
    text: "Painel com dados do controle do estoque de suprimentos da Rede Ebserh (Microsoft Power BI).",
    alt: "Painel de Gestão de Estoque",
    idColor: "text-[#455A64]",
    href: "https://app.powerbi.com/reportEmbed?reportId=47d2173c-5e38-40d1-ab12-1542286e1c73&autoAuth=true&ctid=64d34ddd-aff0-4d95-b7f1-0734a5c845e5",
  },
];

type Props = {};

const Paineis = (props: Props) => {
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
  );
};

export default Paineis;
