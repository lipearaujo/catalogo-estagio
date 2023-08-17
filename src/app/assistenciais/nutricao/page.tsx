import React from "react";
import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import AcompanhantesPaciente from "../../../../public/images/assistenciais/nutricao/acompanhantes_paciente.png";
import PrescricoesCopas from "../../../../public/images/assistenciais/nutricao/prescricoes-dietas.png";
import PrescricoesUFs from "../../../../public/images/assistenciais/nutricao/prescricoes-dietas.png";
import EtiquetaDietaPaciente from "../../../../public/images/assistenciais/nutricao/etiquetas_dietas.png";
import EtiquetaDietaUF from "../../../../public/images/assistenciais/nutricao/etiquetas.png";
import { prisma } from "@/lib/prisma";

const images = [
  AcompanhantesPaciente,
  PrescricoesCopas,
  PrescricoesUFs,
  EtiquetaDietaPaciente,
  EtiquetaDietaUF,
];

const getInfosFromImages = [
  {
    id: "Acompanhantes por Pacientes",
    src: images[0],
    text: "Lista de acompanhantes cadastrados para cada paciente.",
    alt: "Acompanhantes por Pacientes",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/acompanhantes-pacientes",
  },
  {
    id: "Prescrições de Dietas por Copas",
    src: images[1],
    text: "Lista das dietas prescritas por dia, por copas.",
    alt: "Prescrições de Dietas por Copas",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/prescricoes-dietas",
  },
  {
    id: "Prescriçoes de Dietas por UFs",
    src: images[2],
    text: "Lista das dietas prescritas por dia, por unidades funcionais.",
    alt: "Prescriçoes de Dietas por UFs",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/prescricoes-dietas-unidade",
  },
  {
    id: "Etiqueta de Dieta por Paciente",
    src: images[3],
    text: "Impressão de etiquetas para identificação de dietas, por paciente.",
    alt: "Etiqueta de Dieta por Paciente",
    idColor: "text-[#455A64]",
    href: "http://sistemas.hugd.ebserh.gov.br/relator/relatorio/aghu/etiqueta-dieta-paciente",
  },
  {
    id: "Etiquetas de Dietas por UF",
    src: images[4],
    text: "Impressão de etiquetas para identificação de dietas, por unidade funcional (UF).",
    alt: "Etiquetas de Dietas por UF",
    idColor: "text-[#455A64]",
    href: "http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/farmacia/Desabastecimento-Dipirona-Ampola_11-22.pdf",
  },
];

type Props = {};

const Nutricao = async (props: Props) => {
  const allCards = await prisma.card.findMany({
    where: {
      category: "assistenciais/nutricao",
    },
  });


  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Main title="Sistemas Assistenciais > Nutrição">
        <div className="flex flex-wrap justify-center gap-5 px-8">
          {getInfosFromImages.map((images) => (
            <Cards
              id={images.id}
              name={images.id}
              src={images.src}
              text={images.text}
              alt={images.alt}
              idColor={images.idColor}
              href={images.href}
            />
          ))}
                    {/*           {allCards.map((card) => (
            <Cards
              id={card.id}
              name={card.name}
              src={card.src}
              text={card.text}
              alt={card.alt}
              href={card.href}
            />
          ))} */}
        </div>
      </Main>
    </div>
  );
};

export default Nutricao;
