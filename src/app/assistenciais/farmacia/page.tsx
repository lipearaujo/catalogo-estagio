"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import CimFarmacia from "../../../../public/images/assistenciais/farmacia/cim-farmacia.png";
import MedicamentosPadronizados from "../../../../public/images/assistenciais/farmacia/medicamentos-padronizados.png";
import MedicamentosBloqueados from "../../../../public/images/assistenciais/farmacia/medicamentos-bloqueados.png";
import RotuloMedicamentos from "../../../../public/images/assistenciais/farmacia/rotulo-medicamentos.png";
import TabelaDiluicao from "../../../../public/images/assistenciais/farmacia/diluentes-medicamentos.png";
import ControleAntimicrobiano from "../../../../public/images/assistenciais/farmacia/controle-antimicrobianos.png";
import TagUDF from "../../../../public/images/assistenciais/farmacia/tag-udf.png";
import TicketsDispnsacao from "../../../../public/images/assistenciais/farmacia/ticket-dispensacao.png";
import TicketsTurnos from "../../../../public/images/assistenciais/farmacia/ticket-dispensacao.png";

const images = [
  CimFarmacia,
  MedicamentosPadronizados,
  MedicamentosBloqueados,
  RotuloMedicamentos,
  TabelaDiluicao,
  ControleAntimicrobiano,
  TagUDF,
  TicketsDispnsacao,
  TicketsTurnos,
];

const getInfosFromImages = [
  {
    id: "Informações sobre Medicamentos",
    src: images[0],
    text: "Centro de Informações sobre Medicamentos (CIM) pelo Setor de Farmácia Hospitalar (SFH).",
    alt: "Informações sobre Medicamentos",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/farmacia/Desabastecimento-Dipirona-Ampola_11-22.pdf",
  },
  {
    id: "Medicamentos Padronizados",
    src: images[1],
    text: "Atualização da Lista de Medicamentos Padronizados do HU-UFGD, conforme o anexo da Portaria N. 282, de 21/06/2023, publicada no Boletim de Serviço N. 366, de 23/06/2023.",
    alt: "Medicamentos Padronizados",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/farmacia/Portaria-282_Lista-Medicamentos-Padronizados.pdf",
  },
  {
    id: "Medicamentos Bloqueados/Sem Estoque",
    src: images[2],
    text: "Lista de medicamentos bloqueados e/ou em desabastecimento.",
    alt: "Medicamentos Bloqueados/Sem Estoque",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/medicamentos-bloqueados",
  },
  {
    id: "Rótulo de Medicamentos",
    src: images[3],
    text: "Impressão de rótulos de identificação dos medicamentos dos pacientes.",
    alt: "Rótulo de Medicamentos",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-prontuario",
  },
  {
    id: "Tabela de Diluição de Medicamentos",
    src: images[4],
    text: "Tabela de diluição de medicamentos do HU-UFGD (revisado em 2020).",
    alt: "Tabela de Diluição de Medicamentos",
    idColor: "text-[#c62828]",
    href: "",
  },
  {
    id: "Controle Antimicrobianos e Alto Custo",
    src: images[5],
    text: "Controle de solicitações de antimicrobianos e medicamentos de alto custo e painel de dispensação destes medicamentos.",
    alt: "Controle Antimicrobianos e Alto Custo",
    idColor: "text-[#455A64]",
    href: "",
  },
  {
    id: "Etiquetas da Dispensação Farmacêutica",
    src: images[6],
    text: "Impressão de etiqueta para dispensação de medicamentos.",
    alt: "Etiquetas da Dispensação Farmacêutica",
    idColor: "text-[#455A64]",
    href: "",
  },
  {
    id: "Tickets da Dispensação (24h)",
    src: images[7],
    text: "Relatório para emissão de tickets de dispensação de medicamentos no período de 24 horas.",
    alt: "Tickets da Dispensação (24 h)",
    idColor: "text-[#455A64]",
    href: "",
  },
  {
    id: "Tickets da Dispensação (turnos)",
    src: images[8],
    text: "Relatório para emissão de tickets de dispensação de medicamentos por turnos.",
    alt: "Tickets da Dispensação (turnos)",
    idColor: "text-[#455A64]",
    href: "",
  },
];

type Props = {};

const Farmacia = (props: Props) => {
  const currentRoute = usePathname();

  return (
    <div className="flex max-lg:flex-col">
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

export default Farmacia;
