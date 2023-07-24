import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import React from "react";

import Image from "next/image";

import HuDigital from "../../../public/images/portais/hu-digital.png";
import PortalHU from "../../../public/images/portais/hugd.png";
import PortalUFGD from "../../../public/images/portais/logo-ufgd-2022.png";
import PortalEbserh from "../../../public/images/portais/ebserh.png";
import PortalGov from "../../../public/images/portais/gov-br.png";
import ContaGov from "../../../public/images/portais/gov-br.png";
import CoinUFGD from "../../../public/images/portais/coin-ufgd.png";
import TelUteis from "../../../public/images/portais/telefones-hugd.png";
import EbserhYT from "../../../public/images/portais/ebserh_youtube.png";
import HuYT from "../../../public/images/portais/hu-youtube.png";
import EbserhIntranet from "../../../public/images/portais/ebserh-intranet.png";
import EbserhPlataformas from "../../../public/images/portais/ebserh-plataformas-tecnologias.png";
import PortalAGHU from "../../../public/images/portais/aghux-portal.png";
import SEI from "../../../public/images/portais/sei.png";
import PortalSIG from "../../../public/images/portais/sig.png";
import Cards from "@/components/Cards";

type Props = {};

const Portais = (props: Props) => {
  const images = [
    HuDigital,
    PortalHU,
    PortalUFGD,
    PortalEbserh,
    PortalGov,
    ContaGov,
    CoinUFGD,
    TelUteis,
    EbserhYT,
    HuYT,
    EbserhIntranet,
    EbserhPlataformas,
    PortalAGHU,
    SEI,
    PortalSIG,
  ];

  const getInfosFromImages = [
    {
      id: "HU Digital",
      src: images[0],
      text: "O HU Digital é uma plataforma da Rede Ebserh para acesso aos dados dos sumários de alta, procedimentos ambulatoriais e exames registrados no Aplicativo de Gestão para Hospitais Universitários (AGHUX).",
      alt: "HU Digital",
      idColor: "text-[#4527a0]",
      href: 'https://hudigital.ebserh.gov.br/'
    },
    {
      id: "Portal do HU-UFGD",
      src: images[1],
      text: "Acesso ao portal gov.br com as últimas notícias, contatos, informações e serviços oferecidos pelo HU-UFGD.",
      alt: "Portal do HU-UFGD",
      idColor: "text-[#4527a0]",
      href: 'https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd'
    },
    {
      id: "Portal da UFGD",
      src: images[2],
      text: "Acesso ao portal com as últimas notícias, contatos, informações e serviços oferecidos pela Universidade Federal da Grande Dourados.",
      alt: "Portal da UFGD",
      idColor: "text-[#4527a0]",
      href: 'https://portal.ufgd.edu.br/'
    },
    {
      id: "Portal da Ebserh",
      src: images[3],
      text: "Acesso ao portal de notícias e informações da Sede.",
      alt: "Portal da Ebserh",
      idColor: "text-[#4527a0]",
      href: 'https://www.gov.br/ebserh/pt-br'
    },
    {
      id: "Portal GOV.BR",
      src: images[4],
      text: "O gov.br reúne, em um só lugar, serviços para o cidadão e informações sobre a atuação de todas as áreas do governo brasileiro.",
      alt: "Portal GOV.BR",
      idColor: "text-[#4527a0]",
      href: 'https://www.gov.br/pt-br'
    },
    {
      id: "Conta e Serviços GOV.BR",
      src: images[5],
      text: "Gerencie sua conta gov.br, acompanhe os serviços solicitados e assine documentos digitalmente.",
      alt: "Conta e Serviços GOV.BR",
      idColor: "text-[#4527a0]",
      href: 'https://servicos.acesso.gov.br/'
    },
    {
      id: "Página da COIN/UFGD",
      src: images[6],
      text: "A Coordenadoria de Desenvolvimento de Tecnologia da Informação (COIN) da Universidade Federal da Grande Dourados (UFGD) tem por objetivo desenvolver as atividades de gestão de tecnologia da informação, definindo estratégias e executando o planejamento definido pelo Comitê Governança Digital (CGD). Exerce suas atividades nas áreas de sistemas de informações, desenvolvimento de sistemas, redes de comunicação e serviços associados, telefonia, segurança de tecnologia da informação, atendimento e suporte aos usuários​.",
      alt: "Página da COIN/UFGD",
      idColor: "text-[#4527a0]",
      href: 'https://portal.ufgd.edu.br/coordenadoria/coin/index'
    },
    {
      id: "Telefones Úteis do HU-UFGD",
      src: images[7],
      text: "Ramais de todos os setores assistenciais e administrativos do HU-UFGD.",
      alt: "Telefones Úteis do HU-UFGD",
      idColor: "text-[#4527a0]",
      href: 'https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/comunicacao/telefones-uteis'
    },
    {
      id: "Canal da Ebserh no Youtube",
      src: images[8],
      text: "Canal da Ebserh no YouTube, com tutoriais e orientações dos módulos do AGHU e do SIG.",
      alt: "Canal da Ebserh no Youtube",
      idColor: "text-[#455A64]",
      href: 'https://www.youtube.com/channel/UCPxUBJmTNk1waw_m53twcQg/feed'
    },
    {
      id: "Canal do HU-UFGD no Youtube",
      src: images[9],
      text: "Canal do HU-UFGD no YouTube para compartilhamento de vídeos institucionais (anteriormente usado o Canal da Unidade de Comunicação Social/HU-UFGD).",
      alt: "Canal do HU-UFGD no Youtube",
      idColor: "text-[#455A64]",
      href: 'https://www.youtube.com/@huufgd'
    },
    {
      id: "Intranet HU-UFGD/Ebserh",
      src: images[10],
      text: "Rede corporativa da Ebserh e suas filiais. Para mais informações e como se conectar à Intranet acesse a Central de Ajuda.",
      alt: "Intranet HU-UFGD/Ebserh",
      idColor: "text-[#455A64]",
      href: 'https://login.microsoftonline.com/64d34ddd-aff0-4d95-b7f1-0734a5c845e5/oauth2/v2.0/authorize?state=ac33da47334d788ad6eab9960af2f5a2&scope=People.Read%20Presence.Read%20Presence.Read.All%20profile%20User.Read%20openid%20offline_access%20email&response_type=code&approval_prompt=auto&redirect_uri=https%3A%2F%2Fintranet.ebserh.gov.br%2Fo365%2Fcallback&client_id=00da78c6-c253-41f8-934a-081c3096f1d3'
    },
    {
      id: "Plataformas e Tecnologias Ebserh",
      src: images[11],
      text: "Portal da Ebserh com sistemas utilizados e/ou desenvolvidos pela Sede e filiais.",
      alt: "Plataformas e Tecnologias Ebserh",
      idColor: "text-[#455A64]",
      href: 'https://www.gov.br/ebserh/pt-br/governanca/plataformas-e-tecnologias'
    },
    {
      id: "Portal do AGHU",
      src: images[12],
      text: "Acesso ao portal com notícias, informações, manuais e cronograma de implantações do AGHU. ",
      alt: "Portal do AGHU",
      idColor: "text-[#455A64]",
      href: 'https://www.gov.br/ebserh/pt-br/governanca/plataformas-e-tecnologias/aghu/'
    },
    {
      id: "Portal do SEI!",
      src: images[13],
      text: "O Sistema Eletrônico de Informações (SEI), desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF4), é uma ferramenta de gestão de documentos e processos eletrônicos, e tem como objetivo promover a eficiência administrativa. O SEI integra o Processo Eletrônico Nacional (PEN), uma iniciativa conjunta de órgãos e entidades de diversas esferas da administração pública, com o intuito de construir uma infraestrutura pública de processos e documentos administrativos eletrônico.",
      alt: "Portal do SEI",
      idColor: "text-[#455A64]",
      href: 'https://www.gov.br/economia/pt-br/acesso-a-informacao/sei'
    },
    {
      id: "Portal do SIG",
      src: images[14],
      text: "Acesso ao portal com notícias, informações, manuais e cronograma de treinamentos do SIG.",
      alt: "Portal do SIG",
      idColor: "text-[#455A64]",
      href: 'https://www.gov.br/ebserh/pt-br/governanca/plataformas-e-tecnologias/sig'
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <Main title="Portais">
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

export default Portais;
