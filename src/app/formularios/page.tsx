import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import React from "react";

import Image from "next/image";

import FormularioAcesso from "../../../public/images/formularios/formulario-acesso.png";
import AvisoAlta from "../../../public/images/formularios/aviso-alta.png";
import DiariaAcompanhante from "../../../public/images/formularios/diaria-acompanhante.png";
import FichaCuidado from "../../../public/images/formularios/pdf.png";
import FichaPreOp from "../../../public/images/formularios/pdf.png";
import FichaPed from "../../../public/images/formularios/pdf.png";
import FormularioVirusRespiratorio from "../../../public/images/formularios/formulario-coronavirus.png";
import GeracaoAIH from "../../../public/images/formularios/aih.png";
import InvestigacaoObito from "../../../public/images/formularios/investigacao-obito.png";
import ObitoFetal from "../../../public/images/formularios/obito-perinatal.png";
import ObitoInfantil from "../../../public/images/formularios/obito-infantil.png";
import ObitoMaterno from "../../../public/images/formularios/obito-materno.png";
import PartoAdequado from "../../../public/images/formularios/parto-adequado-mini.png";
import RequisicaoExames from "../../../public/images/formularios/requisicao-cultura.png";
import SES from "../../../public/images/formularios/ses-ms.png";
import TermoCsarea from "../../../public/images/formularios/termo-cesarea.png";
import TermoResponsabilidade from "../../../public/images/formularios/termo-responsabilidade.png";
import TransferenciaGestante from "../../../public/images/formularios/excel.png";
import TransferenciaRN from "../../../public/images/formularios/excel.png";
import TransferenciaSRAG from "../../../public/images/formularios/excel.png";
import TransferenciaPadrao from "../../../public/images/formularios/excel.png";
import TransferenciaPsiquiatrica from "../../../public/images/formularios/excel.png";
import Cards from "@/components/Cards";

type Props = {};

const Formularios = (props: Props) => {
  const images = [
    FormularioAcesso,
    AvisoAlta,
    DiariaAcompanhante,
    FichaCuidado,
    FichaPreOp,
    FichaPed,
    FormularioVirusRespiratorio,
    GeracaoAIH,
    InvestigacaoObito,
    ObitoFetal,
    ObitoInfantil,
    ObitoMaterno,
    PartoAdequado,
    RequisicaoExames,
    SES,
    TermoCsarea,
    TermoResponsabilidade,
    TransferenciaGestante,
    TransferenciaRN,
    TransferenciaSRAG,
    TransferenciaPadrao,
    TransferenciaPsiquiatrica,
  ];

  const getInfosFromImages = [
    {
      id: "Formulário de Acesso - Rede/AGHU",
      src: images[0],
      text: "Pré-cadastro para acesso à rede interna de computadores e ao sistema AGHU. Preenchimento obrigatório para novos funcionários e àqueles que ainda não possuírem acesso.",
      alt: "Formulário de Acesso - Rede/AGHU",
      idColor: "text-[#00695c]",
      href: 'http://sistemas.hugd.ebserh.gov.br:9000/'
    },
    {
      id: "Aviso Alta",
      src: images[1],
      text: "Formulário usado para emissão de aviso de alta hospitalar.",
      alt: "Aviso Alta",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.89/sialtas/'
    },
    {
      id: "Diária de Acompanhamnto de Paciente",
      src: images[2],
      text: "Formulário de solicitação de diária de acompanhante de paciente.",
      alt: "Diária de Acompanhamnto de Paciente",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.89/faturamento/diariaFormPesqPront.php'
    },
    {
      id: "Ficha Transf. Cuidado entre Unidades de Internação",
      src: images[3],
      text: "Ficha de Transferência de Cuidado entre Unidades de Internação.",
      alt: "Ficha Transf. Cuidado entre Unidades de Internação",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/stgq/Ficha-transferencia-cuidado-entre-unidades-internacao.pdf'
    },
    {
      id: "Ficha Transf. Pré-op Adulto",
      src: images[4],
      text: "Ficha de Transferência Pré-operatória Adulto.",
      alt: "Ficha Transf. Pré-op Adulto",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/stgq/Ficha-transferencia-pre-operatoria-adulto.pdf'
    },
    {
      id: "Ficha Transf. Pré-op Ped. e Neonatal",
      src: images[5],
      text: "Ficha de Transferência Pré-operatória Pediátrica e Neonatal.",
      alt: "Ficha Transf. Pré-op Ped. e Neonatal",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/stgq/Ficha-transferencia-pre-operatoria-pediatrica-neonatal.pdf'
    },
    {
      id: "Formulário Vírus Respiratórios",
      src: images[6],
      text: "Formulário para informar a situação de casos suspeitos de COVID-19 e Influenza.",
      alt: "Formulário Vírus Respiratórios",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/formularios/formulario/virus-respiratorios'
    },
    {
      id: "Geração de AIH",
      src: images[7],
      text: "Formulário para geração de Autorização de Internação Hospitalar.",
      alt: "Geração de AIH",
      idColor: "text-[#455A64]",
      href: 'http://10.18.0.89/faturamento/form_pesquisa.php'
    },
    {
      id: "Investigação de Óbito de 1 ano ou mais",
      src: images[8],
      text: "Formulário usado para investigar óbitos de um ano ou mais.",
      alt: "Investigação de Óbito de 1 ano ou mais",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/gfo/fichas/listarCadastroDO'
    },
    {
      id: "Investigação de Óbito Fetal e Perinatal",
      src: images[9],
      text: "Formulário usado para investigar um óbito perinatal (ou mortalidade infantil e fetal) ocorrido no HU-UFGD.",
      alt: "Investigação de Óbito Fetal e Perinatal",
      idColor: "text-[#455A64]",
      href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3U3TZPCvlU238Qc0pchF5ZyzUTyoNApPiaD0P6w1AAhUQVRaWFk1WldRTzhLNVU1NjhFMERLSVpYNC4u'
    },
    {
      id: "Investigação de Óbito Infantil",
      src: images[10],
      text: "Formulário usado para investigar um óbito infantil (29 dias a 1 ano) ocorrido no HU-UFGD.",
      alt: "Investigação de Óbito Infantil",
      idColor: "text-[#455A64]",
      href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3U3TZPCvlU238Qc0pchF5ZyzUTyoNApPiaD0P6w1AAhUMk8zMjFLTTBFTkJJVE5USERKUkNDR0tOTi4u'
    },
    {
      id: "Investigação de Óbito Materno",
      src: images[11],
      text: "Formulário usado para investigar um óbito materno ocorrido no HU-UFGD.",
      alt: "Investigação de Óbito Materno",
      idColor: "text-[#455A64]",
      href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=3U3TZPCvlU238Qc0pchF5ZyzUTyoNApPiaD0P6w1AAhUNlBVSFRHT1BENUM1TFRORkFNNzBDNlVEWi4u'
    },
    {
      id: "Parto Adequado",
      src: images[12],
      text: "O Projeto Parto Adequado é uma iniciativa conjunta entre a Agência Nacional de Saúde Suplementar (ANS), o Hospital Israelita Albert Einstein e o Institute for Healthcare Improvement (IHI), com apoio do Ministério da Saúde. Tem por objetivo mudar o modelo de atenção ao parto, promovendo o parto normal, qualificando os serviços de assistência no pré-parto, parto e pós-parto e favorecendo a redução de cesáreas desnecessárias e de possíveis eventos adversos decorrentes de um parto não adequado. Com isso, busca-se reduzir riscos desnecessários e melhorar a segurança do paciente e a experiência do cuidado para mães e bebês.",
      alt: "Parto Adequado",
      idColor: "text-[#455A64]",
      href: 'https://app.einstein.br/PartoAdequado/Home/Login'
    },
    {
      id: "Requisição de Exames Laboratoriais",
      src: images[13],
      text: "Formulário utilizado para a solicitar a realização de exames laboratoriais.",
      alt: "Requisição de Exames Laboratoriais",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/formularios/formulario/requisicao-exame-laboratorial/parametros'
    },
    {
      id: "Termo de Compromisso para Acesso ao Sistema CORE - Campo Grande/MS",
      src: images[14],
      text: "Termo de Compromisso para Acesso ao Sistema CORE, de Campo Grande, Mato Grosso do Sul.",
      alt: "Termo de Compromisso para Acesso ao Sistema CORE - Campo Grande/MS",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/nir/Termo-de-Compromisso-Regulacao_v3-CORE-CG-MS.pdf'
    },
    {
      id: "Termo de Consentimento de Cesárea",
      src: images[15],
      text: "Termo de consentimento livre e esclarecido de pedido de cesárea feito pela paciente.",
      alt: "Termo de Consentimento de Cesárea",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametros-crm-prontuario'
    },
    {
      id: "Termo de Responsabilidade",
      src: images[16],
      text: "[PARA CADASTRADORES] Emissão do termo de responsabilidade do uso dos recursos de TIC e confidencialidade.",
      alt: "Termo de Responsabilidade",
      idColor: "text-[#455A64]",
      href: 'http://sistemas.hugd.ebserh.gov.br/formularios/tela-relatorio/parametro-cpf'
    },
    {
      id: "Transferência de Gestantes",
      src: images[17],
      text: "Formulário do NIR para solicitação de vaga de internação e transferência Gestante.",
      alt: "Transferência de Gestantes",
      idColor: "text-[#455A64]",
      href: ''
    },
    {
      id: "Transferência de RN",
      src: images[18],
      text: "Formulário do NIR para solicitação de vaga de internação e transferência de RN.",
      alt: "Transferência de RN",
      idColor: "text-[#455A64]",
      href: ''
    },
    {
      id: "Transferência paciente SRAG",
      src: images[19],
      text: "Formulário do NIR para solicitação de vaga de internação e transferência de paciente SRAG.",
      alt: "Transfência paciente SRAG",
      idColor: "text-[#455A64]",
      href: ''
    },
    {
      id: "Transferência Padrão de Pacientes",
      src: images[20],
      text: "Formulário do NIR para solicitação de vaga de internação e transferência padrão.",
      alt: "Transferência Padrão de Pacientes",
      idColor: "text-[#455A64]",
      href: ''
    },
    {
      id: "Transferência Psiquiátrica",
      src: images[21],
      text: "Formulário do NIR para solicitação de vaga de internação e transferência Psiquiátrica.",
      alt: "Transferência Psiquiátrica",
      idColor: "text-[#455A64]",
      href: ''
    },
  ];

  return (
    <div className="flex max-lg:flex-col">
      <Sidebar />
      <Main title="Formulários">
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

export default Formularios;
