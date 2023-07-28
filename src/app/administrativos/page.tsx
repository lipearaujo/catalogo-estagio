import React from "react";
import Link from "next/link";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";

import Image from "next/image";

//importação das imagens Sistemas Administrativos
import HelpDesk from "../../../public/images/administrativos/glpi-sgpti.png";
import SEI from "../../../public/images/administrativos/sei.png";
import Arkmeds from "../../../public/images/administrativos/arkmeds.png";
import PortalEmpregado from "../../../public/images/administrativos/ebserh.png";
import ServicosTI from "../../../public/images/administrativos/servicos-ti.png";
import Sigepe from "../../../public/images/administrativos/sigepe.png";
import SouGov from "../../../public/images/administrativos/sougov.png";
import SGA from "../../../public/images/administrativos/novosga.png";
import SAPE from "../../../public/images/administrativos/sape-sis.png";
import SIG from "../../../public/images/administrativos/sig.png";
import Arquivador from "../../../public/images/administrativos/arquivador.png";
import Cards from "@/components/Cards";

type Props = {};

const Administrativo = (props: Props) => {
  const images = [
    HelpDesk,
    SEI,
    Arkmeds,
    PortalEmpregado,
    ServicosTI,
    Sigepe,
    SouGov,
    SGA,
    SAPE,
    SIG,
    Arquivador,
  ];

  const getInfosFromImages = [
    {
      id: "Help Desk - SETISD",
      src: images[0],
      text: "Sistema destinado aos colaboradores do HU-UFGD registrarem chamados referentes às demandas de tecnologia da informação para o Setor de Tecnologia da Informação e Saúde Digital (SETISD).",
      alt: "HelpDesk",
      idColor: "text-[#558b2f]",
      href: 'http://helpdesk.hugd.ebserh.net/index.php?redirect=%2Fplugins%2Fformcreator%2Ffront%2Fformdisplay.php%3Fid%3D1'
    },
    {
      id: "SEI!",
      src: images[1],
      text: "O Sistema Eletrônico de Informações (SEI!), desenvolvido pelo Tribunal Regional Federal da 4ª Região (TRF4), é uma plataforma que engloba um conjunto de módulos e funcionalidades que promovem a eficiência administrativa. A solução é cedida gratuitamente para instituições públicas e permite transferir a gestão de documentos e de processos eletrônicos administrativos para um mesmo ambiente virtual",
      alt: "SEI",
      idColor: "text-[#558b2f]",
      href: 'https://sei.ebserh.gov.br/sip/login.php?sigla_orgao_sistema=SEDE&sigla_sistema=SEI&infra_url=L3NlaS8='
    },
    {
      id: "Arkmeds - Manutenção",
      src: images[2],
      text: "Sistema utilizado para abertura de chamados para a equipe de manutenção predial.",
      alt: "Arkmeds",
      idColor: "text-[#558b2f]",
      href: 'https://huufgd.arkmeds.com/usuarios/conectar?next=/'
    },
    {
      id: "Portal do Empregado (SIGP/MENTORH)",
      src: images[3],
      text: "Sistema da Ebserh para Gestão de Pessoas (SIGP).",
      alt: "Portal do Empregado (SIGP/MENTORH)",
      idColor: "text-[#558b2f]",
      href: 'https://sigp.ebserh.gov.br/csp/ebserh/portal/novo/index.csp'
    },
    {
      id: "Serviços de TI",
      src: images[4],
      text: "Página destinada para alteração de senha e solicitação de desbloqueio de contas de usuário de rede Ebserh.",
      alt: "Serviços de TI",
      idColor: "text-[#558b2f]",
      href: 'https://servicosti.ebserh.gov.br/#/'
    },
    {
      id: "SIGAC/Sigepe",
      src: images[5],
      text: "O Sistema de Gestão de Pessoas do Governo Federal (Sigepe), desenvolvido em parceria entre o Serpro e a Dataprev, foi criado para subsidiar, por meio dos recursos de Tecnologia da Informação, as políticas de gestão de pessoas e as operações de recursos humanos do Governo Federal.",
      alt: "SIGAC/Sigepe",
      idColor: "text-[#558b2f]",
      href: 'https://servidor.sigepe.planejamento.gov.br/'
    },
    {
      id: "SouGov.br",
      src: images[6],
      text: "O SouGov.br faz parte de um amplo trabalho de transformação digital desenvolvido pela Secretaria Especial de Desburocratização, Gestão e Governo Digital e sua Secretaria de Gestão e Desempenho de Pessoal, do Ministério da Economia, para gerar uma maior e melhor conectividade entre os servidores ativos, aposentados e pensionistas e a gestão de pessoas da Administração Pública Federal (APF).",
      alt: "SouGov.br",
      idColor: "text-[#558b2f]",
      href: 'https://sougov.economia.gov.br/sougov/'
    },
    {
      id: "Gerenciamento de Senhas",
      src: images[7],
      text: "Sistema de Gerenciamento de Atendimento (Novo SGA), usado para chamada e controle das senhas e filas de atendimentos nas recepções do HU-UFGD. ",
      alt: "Gerenciamento de Senhas",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.98/novosga/public/login'
    },
    {
      id: "SAPE - Sistemas",
      src: images[8],
      text: "Sistemas de Acompanhamento de Projetos Especializados dos sistemas da EBSERH.",
      alt: "SAPE - Sistemas",
      idColor: "text-[#455A64]",
      href: 'http://sape-sistemas.ebserh.gov.br/sistemas/login?back_url=http%3A%2F%2Fsape-sistemas.ebserh.gov.br%2Fsistemas%2F'
    },
    {
      id: "SIG Ebserh",
      src: images[9],
      text: "Sistema de Informações Gerenciais da Ebserh. Nesse ambiente de produção estão os módulos de Protocolo e Contratos, já implantados, e os de Jurídico e Patrimônio, em processo de implantação. Para sua utilização deverá solicitar acesso na tela inicial no sistema através do botão Solicitar Acesso, escolher o módulo desejado com CPF e preencher o formulário na tela seguinte. Após isso entre em contato com a CAU pelo telefone 0800 941 8211 ou pelo e-mail cau.hugd@ebserh.gov.br e solicitar ativação de seu cadastro, informando CPF e setor no organograma que encontra-se lotado.",
      alt: "SIG Ebserh",
      idColor: "text-[#455A64]",
      href: 'http://sig.ebserh.gov.br/'
    },
    {
      id: "Sistema de Arquivamento de Prontuários",
      src: images[10],
      text: "Sistema para controle de prontuários arquivados.",
      alt: "Sistema de Arquivamento de Prontuários",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/arquivador/'
    },
  ];

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Main title="Sistemas Administrativos">
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

export default Administrativo;
