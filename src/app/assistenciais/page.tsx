import React from "react";
import { prisma } from "@/lib/prisma";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

//importação das imagens Sistemas Assistenciais
import AGHU from "../../../public/images/assistenciais/aghux.png";
import Farmacia from "../../../public/images/assistenciais/sistemas-farmacia.png";
import Nutricao from "../../../public/images/assistenciais/nutricao.png";
import SilLab from "../../../public/images/assistenciais/sil-laboratorio.png";
import Pulseiras from "../../../public/images/assistenciais/pulseiras.png";
import GETS from "../../../public/images/assistenciais/gets-engenharia-clinica.png";
import SGFO from "../../../public/images/assistenciais/sgfo.png";
import SGSTI from "../../../public/images/assistenciais/sgsti.png";
import Udima from "../../../public/images/assistenciais/udima.png";
import Termos from "../../../public/images/assistenciais/termos.png";
import Cadsus from "../../../public/images/assistenciais/cadsus.png";
import Alerta from "../../../public/images/assistenciais/alerta.png";
import Oviyam from "../../../public/images/assistenciais/oviyam.png";
import PACS from "../../../public/images/assistenciais/pacs-dcm.png";
import SESMS from "../../../public/images/assistenciais/ses-ms.png";
import Datasus from "../../../public/images/assistenciais/datasus.png";
import SAMU from "../../../public/images/assistenciais/samu.png";
import Prontuario from "../../../public/images/assistenciais/revisao-prontuarios.png";
import SAGH from "../../../public/images/assistenciais/hotelaria.png";
import SIGTAP from "../../../public/images/assistenciais/datasus.png";
import SISREG from "../../../public/images/assistenciais/datasus.png";
import VigiHosp from "../../../public/images/assistenciais/vigihosp.png";

const images = [
  AGHU,
  Farmacia,
  Nutricao,
  SilLab,
  Pulseiras,
  GETS,
  SGFO,
  SGSTI,
  Udima,
  Termos,
  Cadsus,
  Alerta,
  Oviyam,
  PACS,
  SESMS,
  Datasus,
  SAMU,
  Prontuario,
  SAGH,
  SIGTAP,
  SISREG,
  VigiHosp,
];

const getInfosFromImages = [
  {
    id: "AGHU",
    src: images[0],
    text: "O Aplicativo de Gestão para Hospitais Universitários – AGHU é um sistema de gestão hospitalar com foco no paciente, adotado como padrão para todos os Hospitais Universitários Federais da rede Ebserh. O desenvolvimento do AGHU iniciou em 2009, como parte integrante do Programa Nacional de Reestruturação dos Hospitais Universitários Federais (Rehuf), do Ministério da Educação, destinado à reestruturação e revitalização dos hospitais das universidades federais. É utilizado no HU-UFGD desde 2010.",
    alt: "AGHU",
    idColor: "text-[#c62828]",
    href: "https://aghu.hugd.ebserh.gov.br/aghu/pages/casca/casca.xhtml",
  },
  {
    id: "Farmacia",
    src: images[1],
    text: "Sistemas e documentos utilizados pelo Setor de Farmácia Hospitalar.",
    alt: "Farmacia",
    idColor: "text-[#c62828]",
    href: "/assistenciais/farmacia",
  },
  {
    id: "Nutrição",
    src: images[2],
    text: "Identificação de dietas para pacientes e de acompanhantes para refeições.",
    alt: "Nutrição",
    idColor: "text-[#c62828]",
    href: "/assistenciais/nutricao",
  },
  {
    id: "SIL - Emissão de Laudos Online",
    src: images[3],
    text: "Links do sistema de informação SIL utilizado pela Unidade de Análises Clínicas e Anatomia Patológica (UACAP) para emissão de laudos de exames laboratoriais (versões LABORATÓRIO, POSTOS e INTRANET).",
    alt: "SIL - Emissão de Laudos Online",
    idColor: "text-[#c62828]",
    href: "/assistenciais/sil",
  },
  {
    id: "Impressão de Pulseiras",
    src: images[4],
    text: "Sistema desenvolvido para imprimir pulseiras de identificação para os pacientes internados.",
    alt: "Impressão de Pulseiras",
    idColor: "text-[#c62828]",
    href: "/assistenciais/pulseiras",
  },
  {
    id: "GETS - Manutenção Engenharia Clínica",
    src: images[5],
    text: "Sistema de Gerenciamento de Tecnologia para Saúde (GETS) usado para solicitar manutenção dos equipamentos médicos do HU-UFGD.",
    alt: "GETS - Manutenção Engenharia Clínica",
    idColor: "text-[#c62828]",
    href: "https://gets.ceb.unicamp.br/nec/view/inicio/index.jsf",
  },
  {
    id: "SGFO",
    src: images[6],
    text: "Sistema Gerenciador de Fichas Obstétricas.",
    alt: "SGFO",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/gfo/",
  },
  {
    id: "SGSTI",
    src: images[7],
    text: "Sistema Gerenciador de Solicitação de Transferência Interna.",
    alt: "SGSTI",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/sgsti/",
  },
  {
    id: "Sistema UDIMA",
    src: images[8],
    text: "Sistema para realizar a solicitação de exame(s) para a Unidade de Diagnóstico por Imagem.",
    alt: "Sistema UDIMA",
    idColor: "text-[#c62828]",
    href: "http://sistemas.hugd.ebserh.gov.br/udima/login",
  },
  {
    id: "Termos de Consentimento",
    src: images[9],
    text: "Sistema de cadastro de termos de responsabilidade e consentimento.",
    alt: "Termos de Consentimento",
    idColor: "text-[#c62828]",
    href: "http://10.18.0.62/termos/",
  },
  {
    id: "CADSUS Web",
    src: images[10],
    text: "Cadastro Nacional de Usuários do Sistema Único de Saúde (SUS).",
    alt: "CADSUS Web",
    idColor: "text-[#455A64]",
    href: "https://cadastro.saude.gov.br/segcartao/?contextType=external&username=string&contextValue=%2Foam&password=sercure_string&challenge_url=https%3A%2F%2Fcadastro.saude.gov.br%2Fsegcartao&request_id=5224975690003497663&authn_try_count=0&locale=pt_BR&resource_url=http%253A%252F%252Fcadastro.saude.gov.br%252Fnovocartao%252Frestrito%252FusuarioConsulta.jsp",
  },
  {
    id: "Eventos Adversos",
    src: images[11],
    text: "Listagem de eventos Adversos identificados na Unidade de Gestão de Riscos Assistenciais (UGRA) para facilitar a identificação, análise e implementação de ações preventivas pelas unidades.",
    alt: "Eventos Adversos",
    idColor: "text-[#455A64]",
    href: "http://sistemas.hugd.ebserh.gov.br/gfo/eventosadversos/listareventosadversos",
  },
  {
    id: "Oviyam 2.1",
    src: images[12],
    text: "Sistema usado para visualizar as imagens geradas pela Unidade de Diagnóstico por Imagem.",
    alt: "Oviyam 2.1",
    idColor: "text-[#455A64]",
    href: "https://10.18.0.22:8443/oviyam2/",
  },
  {
    id: "PACS",
    src: images[13],
    text: "Sistema de Comunicação e Arquivamento de Imagens Médicas (voltado aos médicos radiologistas), utilizando a aplicação DCM4CHE.",
    alt: "PACS",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.22:8080/dcm4chee-web3/",
  },
  {
    id: "Portal de Regulamentação de Saúde/MS",
    src: images[14],
    text: "Portal de Regulação de Saúde do estado de Mato Grosso do Sul (CORE/MS).",
    alt: "Portal de Regulamentação de Saúde/MS",
    idColor: "text-[#455A64]",
    href: "http://www.core.saude.ms.gov.br/",
  },
  {
    id: "Procedimento por CID (APAC/AIH)",
    src: images[15],
    text: "Aplicação do DataSUS para consulta de um código de procedimento a partir de uma determinada CID (Classificação Internacional de Doenças).",
    alt: "Procedimento por CID (APAC/AIH)",
    idColor: "text-[#455A64]",
    href: "http://sigtap.datasus.gov.br/tabela-unificada/app/sec/procedimento/publicados/consultar",
  },
  {
    id: "Prontuário Eletrônico SAMU 192 Dourados",
    src: images[16],
    text: "Solicitação do Serviço de Atendimento Móvel de Emergência (SAMU 192) de Dourados/MS.",
    alt: "Prontuário Eletrônico SAMU 192 Dourados",
    idColor: "text-[#455A64]",
    href: "http://samudourados.hopto.org:8078/SSODOurados/Login.aspx",
  },
  {
    id: "Revisão de Prontuários",
    src: images[17],
    text: "Sistema utilizado pela Comissão de Revisão de Prontuários para avaliar os prontuários.",
    alt: "Revisão de Prontuários",
    idColor: "text-[#455A64]",
    href: "http://sistemas.hugd.ebserh.gov.br/revprontuario/",
  },
  {
    id: "SAGH",
    src: images[18],
    text: "O Sistema de Apoio à Gestão - Hotelaria (SAGH) permite o monitoramento em tempo real da situação dos leitos no AGHU, em suas respectivas unidades funcionais, apoiando a gestão na tomada de decisão, além de ser uma ferramenta de comunicação e interação entre os diferentes setores. No SAGH é possível ter uma visão geral da situação dos leitos num determinado momento, de forma rápida e intuitiva para os usuários. Com isso, os gestores podem tomar decisões com maior agilidade, respaldos em informações confiáveis e a partir de uma única fonte de dados, no caso, o Sistema AGHU.",
    alt: "SAGH",
    idColor: "text-[#455A64]",
    href: "http://10.18.0.74/sagh/",
  },
  {
    id: "SIGTAP",
    src: images[19],
    text: "Sistema de Gerenciamento da Tabela de Procedimentos, Medicamentos e OPM (Órtese, Prótese e Materiais) do SUS.",
    alt: "SIGTAP",
    idColor: "text-[#455A64]",
    href: "http://sigtap.datasus.gov.br/tabela-unificada/app/sec/inicio.jsp",
  },
  {
    id: "SISREG",
    src: images[20],
    text: "Sistema online, criado para o gerenciamento de todo complexo regulatório indo da rede básica à internação hospitalar, visando a humanização dos serviços, maior controle do fluxo e otimização na utilização dos recursos.",
    alt: "SISREG",
    idColor: "text-[#455A64]",
    href: "https://sisregiii.saude.gov.br/",
  },
  {
    id: "VigiHosp",
    src: images[21],
    text: "Gestão de Riscos e Segurança do Paciente, utilizado para notificação de incidentes e queixas técnicas.",
    alt: "VigiHosp",
    idColor: "text-[#455A64]",
    href: "http://sig.ebserh.gov.br/vigihosp/index.php?hosp=HUUFGD",
  },
];

type Props = {};

const Assistenciais = async () => {
  const allCards = await prisma.card.findMany({
    where: {
      category: "assistenciais",
    },
  });

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Main title="Sistemas Assistenciais">
        <div className="flex flex-wrap justify-center gap-5 px-8 max-lg:px-0 ">
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
              //src={card.src}
              src=""
              text={card.text}
              href={card.href}
              alt={card.alt}
            />
          ))} */}
        </div>
      </Main>
    </div>
  );
};

export default Assistenciais;
