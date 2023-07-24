import React from "react";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import Homologacao from "../../../public/images/treino-homologacao/aghux-homologacao.png";
import Implantação from "../../../public/images/treino-homologacao/aghux-implantacao.png";
import Treinamento from "../../../public/images/treino-homologacao/aghux-treinamento.png";
import MapaLeitos from "../../../public/images/treino-homologacao/mapa-leitos.png";
import SolicitacaoEspecial from "../../../public/images/treino-homologacao/procedimento-especial.png";
import SEI from "../../../public/images/treino-homologacao/sei-treinamento.png";

type Props = {};

const TreinoHomologacao = (props: Props) => {
  const images = [
    Homologacao,
    Implantação,
    Treinamento,
    MapaLeitos,
    SolicitacaoEspecial,
    SEI,
  ];

  const getInfosFromImages = [
    {
      id: "Homologação do AGHU",
      src: images[0],
      text: "Ambiente de homologação do AGHU. Utilizado para validar as alterações realizadas antes de uma nova atualização. Após validação, a nova versão poderá ser implantada e colocada em produção.",
      alt: "Homologação do AGHU",
      idColor: "text-[#f9a825]",
      href: 'http://10.18.0.67:8080/aghu/pages/casca/casca.xhtml'
    },
    {
      id: "Implantação do AGHU",
      src: images[1],
      text: "Ambiente de implantação do AGHU, utilizado para validar a inclusão de novos itens, antes de serem colocados em ambiente de produção.",
      alt: "Implantação do AGHU",
      idColor: "text-[#f9a825]",
      href: 'http://10.18.0.113:8080/aghu/pages/casca/casca.xhtml'
    },
    {
      id: "Treinamento do AGHU",
      src: images[2],
      text: "Ambiente de treinamento do AGHU, utilizado para aprendizado da ferramenta. Tudo que for alterado nesse ambiente não será replicado no de produção.",
      alt: "Treinamento do AGHU",
      idColor: "text-[#f9a825]",
      href: 'http://treinamento.ebserh.gov.br/aghu/pages/casca/casca.xhtml'
    },
    {
      id: "Mapa de Leitos (Homologação)",
      src: images[3],
      text: "Relatório contendo a situação atual dos leitos, a ser utilizado pelo NIR.",
      alt: "Mapa de Leitos (Homologação)",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.62/relator/relatorio/aghu/mapa-leitos'
    },
    {
      id: "Solicitação de Procedimentos Especiais",
      src: images[4],
      text: "Laudo para solicitação de diárias de acompanhantes, UTI e UCI; permanência à maior, além de procedimentos especiais.",
      alt: "Solicitação de Procedimentos Especiais",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.62/formularios/formulario/procedimento-especial'
    },
    {
      id: "Treinamento do SEI!",
      src: images[5],
      text: "Ambiente de treinamento do Sistema Eletrônico de Informações (SEI!), desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF4), é uma plataforma que engloba um conjunto de módulos e funcionalidades que promovem a eficiência administrativa. A solução é cedida gratuitamente para instituições públicas e permite transferir a gestão de documentos e de processos eletrônicos administrativos para um mesmo ambiente virtual. Mais informações em O que é o SEi.",
      alt: "Treinamento do SEI!",
      idColor: "text-[#455A64]",
      href: 'https://treinamento-sei.ebserh.gov.br/'
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <Main title="Treinamento e Homologação">
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
      </Main>
    </div>
  );
};

export default TreinoHomologacao;
