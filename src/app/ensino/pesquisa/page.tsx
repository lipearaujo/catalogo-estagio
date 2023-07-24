"use client";

import React from "react";

import { usePathname } from "next/navigation";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Cards from "@/components/Cards";

import CICS from '../../../../public/images/ensino/pesquisa/cics-hugd.png'
import CTP from '../../../../public/images/ensino/pesquisa/ctp-nats.png'
import DECS from '../../../../public/images/ensino/pesquisa/decs-mesh.png'
import Orcid from '../../../../public/images/ensino/pesquisa/orcid.png'
import CAPES from '../../../../public/images/ensino/pesquisa/capes.png'
import Plataforma from '../../../../public/images/ensino/pesquisa/plataforma-brasil.png'
import Rayyan from '../../../../public/images/ensino/pesquisa/rayyan.png'
import RCAP from '../../../../public/images/ensino/pesquisa/rcap.png'
import RedePesquisa from '../../../../public/images/ensino/pesquisa/rede-pesquisa-ebserh.png'
import UpToDate from '../../../../public/images/ensino/pesquisa/uptodate-novo.png'

const images = [CICS, CTP, DECS, Orcid, CAPES, Plataforma, Rayyan, RCAP, RedePesquisa, UpToDate]

const getInfosFromImages = [
    {
        id: "CICS/HU-UFGD - Youtube",
        src: images[0],
        text: "Esse canal foi criado pela Unidade de Gestão da Inovação Tecnológica em Saúde (UGITS ) do HU-UFGD/Ebserh para divulgar conteúdos e/ou produtos sobre Educação em Saúde, Saúde Baseada em Evidência, Tecnologias em Saúde e Inovação produzidos pelo HU.",
        alt: "CICS/HU-UFGD - Youtube",
        idColor: "text-[#283593]",
        href: 'https://www.youtube.com/channel/UC8L_LhPgE5EQNIt_B080_qg'
      },
    {
        id: "Como Solicitar uma Avaliação de Tecnologia em Saúde (ATS)",
        src: images[1],
        text: "Uma Avaliação de Tecnologias em Saúde (ATS) é a síntese do conhecimento produzido sobre as implicações da utilização das tecnologias e constitui subsídio técnico importante para a tomada de decisão sobre difusão e incorporação de tecnologias em saúde.",
        alt: "Como Solicitar uma Avaliação de Tecnologia em Saúde (ATS)",
        idColor: "text-[#283593]",
        href: 'https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/governanca/ensino-e-pesquisa/gestao-da-pesquisa-e-inovacao-tecnologica/unidade-de-gestao-da-inovacao-tecnologica-em-saude/comissao-tecnica-permanente-do-nucleo-de-avaliacao-de-tecnologias-em-saude-ctp-nats/como-solicitar-uma-ats'
      },
    {
        id: "Descritores em Saúde - DeCS/MeSH",
        src: images[2],
        text: "O DeCS/MeSH é um vocabulário dinâmico que totaliza 34.126 registros de descritores e 77 qualificadores, sendo 30.194 registros de descritores provenientes do MeSH e 3.932 exclusivamente do DeCS. As categorias exclusivas do DeCS e seus totais de descritores são: Ciência e Saúde (329); Homeopatia (1.912); Medicinas Tradicionais, Complementares e Integrativas (113); Saúde Pública (2750); e Vigilância Sanitária (820). Por ser um vocabulário dinâmico, possui um processo constante de crescimento e mudança, dentre alterações, substituições e criações de novos termos ou áreas.",
        alt: "Descritores em Saúde - DeCS/MeSH",
        idColor: "text-[#455A64]",
        href: 'https://decs.bvsalud.org/'
      },
    {
        id: "ORCID",
        src: images[3],
        text: "ORCID, que significa Open Researcher and Contributor ID, é uma organização global sem fins lucrativos sustentada por taxas de nossas organizações membros. Somos construídos pela comunidade e governados por um Conselho de Administração representativo de nossos membros com ampla representação das partes interessadas. ORCID é apoiado por uma equipe profissional dedicada e experiente.",
        alt: "ORCID",
        idColor: "text-[#455A64]",
        href: 'https://orcid.org/'
      },
    {
        id: "Periódicos CAPES - CAFe",
        src: images[4],
        text: "O Portal de Periódicos da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) é um dos maiores acervos científicos virtuais do País, que reúne e disponibiliza conteúdos produzidos nacionalmente e outros assinados com editoras internacionais a instituições de ensino e pesquisa no Brasil. São mais de 49 mil periódicos com texto completo e 455 bases de dados de conteúdos diversos, como referências, patentes, estatísticas, material audiovisual, normas técnicas, teses, dissertações, livros e obras de referência.",
        alt: "Periódicos CAPES - CAFe",
        idColor: "text-[#455A64]",
        href: 'http://ez50.periodicos.capes.gov.br/login?url=https://www.periodicos.capes.gov.br/index.php?option=com_pezproxy&controller=auth&view=pezproxyauth&url=https://www.periodicos.capes.gov.br/index.php?&'
      },
    {
        id: "Plataforma Brasil",
        src: images[5],
        text: "A Plataforma Brasil é uma base nacional e unificada de registros de pesquisas envolvendo seres humanos para todo o sistema CEP/Conep. Ela permite que as pesquisas sejam acompanhadas em seus diferentes estágios - desde sua submissão até a aprovação final pelo CEP e pela Conep, quando necessário - possibilitando inclusive o acompanhamento da fase de campo, o envio de relatórios parciais e dos relatórios finais das pesquisas (quando concluídas).O sistema permite, ainda, a apresentação de documentos também em meio digital, propiciando ainda à sociedade o acesso aos dados públicos de todas as pesquisas aprovadas. Pela Internet é possível a todos os envolvidos o acesso, por meio de um ambiente compartilhado, às informações em conjunto, diminuindo de forma significativa o tempo de trâmite dos projetos em todo o sistema CEP/CONEP.",
        alt: "Plataforma Brasil",
        idColor: "text-[#455A64]",
        href: 'https://plataformabrasil.saude.gov.br/login.jsf'
      },
    {
        id: "Rayyan",
        src: images[6],
        text: "A Rayyan é uma fornecedora líder de ferramentas de colaboração e pesquisa que impulsionam a comunidade global de pesquisa em busca de descobertas científicas e médicas aceleradas. Tem a missão de democratizar o acesso a ferramentas importantes para a ciência, a fim de obter todos os benefícios sociais das descobertas científicas e médicas aceleradas em todo o mundo.",
        alt: "Rayyan",
        idColor: "text-[#455A64]",
        href: 'https://www.rayyan.ai/'
      },
    {
        id: "REDCap",
        src: images[7],
        text: "REDCap é uma plataforma web segura para construir e gerenciar bancos de dados e pesquisas online. O processo simplificado do REDCap para criar e projetar projetos rapidamente oferece uma vasta gama de ferramentas que podem ser adaptadas para praticamente qualquer estratégia de coleta de dados. O REDCap fornece procedimentos de exportação automatizados para downloads de dados contínuos para Excel e pacotes estatísticos comuns (SPSS, SAS, Stata, R), bem como um calendário de projeto integrado, um módulo de agendamento, ferramentas de relatórios ad hoc e recursos avançados, como lógica de ramificação, upload de arquivo e campos calculados.",
        alt: "REDCap",
        idColor: "text-[#455A64]",
        href: 'https://redcap.ebserh.gov.br/'
      },
    {
        id: "Rede Pesquisa EBSERH",
        src: images[8],
        text: "O sistema Rede Pesquisa é uma ferramenta de gestão dos estudos desenvolvidos no âmbito dos Hospitais Universitários Federais (HUF), que compõem a Rede da Empresa Brasileira de Serviços Hospitalares (Ebserh). O sistema automatiza o processo de cadastramento de pesquisas desenvolvidas no âmbito da Rede Ebserh, gerando uma base de dados para a construção de panoramas e indicadores estratégicos para a gestão das pesquisas na Rede.",
        alt: "Rede Pesquisa EBSERH",
        idColor: "text-[#455A64]",
        href: 'http://sig.ebserh.gov.br/redepesquisa/'
      },
    {
        id: "UpToDate",
        src: images[9],
        text: "Aplicativo de pesquisa e apoio aos profissionais da saúde. Base de informações médicas baseada em evidências. das quais os médicos confiam para tomar as decisões certas no local de atendimento. Mais de 6.000 médicos autores, editores e revisores reconhecidos mundialmente usam um processo editorial rigoroso para sintetizar as informações médicas mais recentes em recomendações confiáveis e baseadas em evidências para aprimorar o atendimento de pacientes e a qualidade.",
        alt: "UpToDate",
        idColor: "text-[#455A64]",
        href: 'http://www.uptodate.com/'
      },
]

type Props = {}

const Pesquisa = (props: Props) => {
    const currentRoute = usePathname();

    return (
      <div className="flex">
        <Sidebar />
        <Main title="Sistemas de Ensino, Pesquisa e Inovação em Saúde > Pesquisa e Inovação em Saúde">
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
}

export default Pesquisa