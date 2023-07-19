import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'
import React from 'react'

import Image from 'next/image'

import SistemaRelatorio from '../../../public/images/relatorios/relator.png'
import PaineisHospitalares from '../../../public/images/relatorios/paineis-hospitalares.png'
import MapaLeitos from '../../../public/images/relatorios/mapa-leitos.png'
import MapaLeitosCovid from '../../../public/images/relatorios/mapa-leitos-covid.png'
import AtendimentosPAGO from '../../../public/images/relatorios/pago.png'
import BeiraLeito from '../../../public/images/relatorios/beira-leito-adulto.png'
import BeiraNeonatal from '../../../public/images/relatorios/beira-leito-neonato.png'
import BeiraPediatria from '../../../public/images/relatorios/beira-leito-pediatrico.png'
import CasosCovid from '../../../public/images/relatorios/coronavirus-situacao-ativa.png'
import Braden from '../../../public/images/relatorios/braden.png'
import PacientesAdmitidos from '../../../public/images/relatorios/pacientes-admitidos.png'
import PacientesInternados from '../../../public/images/relatorios/paciente-dias-internacao.png'
import PAGO from '../../../public/images/relatorios/pago.png'
import Pentaho from '../../../public/images/relatorios/pentaho.png'
import TermoTransfusional from '../../../public/images/relatorios/termo-transfusional.png'

type Props = {}

const Relatorios = (props: Props) => {
  const images = [
    SistemaRelatorio, PaineisHospitalares, MapaLeitos, MapaLeitosCovid, AtendimentosPAGO, BeiraLeito, BeiraNeonatal, BeiraPediatria, 
    CasosCovid, Braden, PacientesAdmitidos, PacientesInternados, PAGO, Pentaho, TermoTransfusional ]
  
  const imagesSistemasAssistenciais = [
    {
      id: "Sistema de Relatórios",
      src: images[0],
      text: "Sistema desenvolvido pelo SGPTI onde se concentram os principais relatórios utilizados no HU-UFGD",
      alt: "Sistema de Relatórios",
      idColor: "text-[#37474f]",
    },
    {
      id: "Painéis Hospitalares",
      src: images[1],
      text: "Links para os painéis de indicadores hospitalares desenvolvidos pela equipe da USID.",
      alt: "Painéis Hospitalares",
      idColor: "text-[#37474f]",
    },
    {
      id: "Mapa de Leitos",
      src: images[2],
      text: "Relatório contendo a situação atual dos leitos, a ser utilizado pelo NIR.",
      alt: "Mapa de Leitos",
      idColor: "text-[#37474f]",
    },
    {
      id: "Mapa de Leitos (COVID-19)",
      src: images[3],
      text: "Relatório contendo a situação atual dos leitos, com pacientes com COVID-19, a ser utilizado pelo NIR.",
      alt: "Mapa de Leitos (COVID-19)",
      idColor: "text-[#37474f]",
    },
    {
      id: "Atendimentos do PAGO",
      src: images[4],
      text: "Quantidade de atendimentos por período dos Pronto Atendimentos Ginecológico e Obstétrico, Clínico e Pediátrico.",
      alt: "Atendimentos do PAGO",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Beira de Leito - ADULTO",
      src: images[5],
      text: "Identificação para ser inserida na cabeceira do leito de um paciente adulto internado.",
      alt: "Beira de Leito - ADULTO",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Beira de Leito - NEONATAL",
      src: images[6],
      text: "Identificação para ser inserida na cabeceira do leito de um paciente da Unidade Neonatal internado.",
      alt: "Beira de Leito - NEONATAL",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Beira de Leito - PEDIATRIA",
      src: images[7],
      text: "Identificação para ser inserida na cabeceira do leito de um paciente pediátrico internado.",
      alt: "Beira de Leito - PEDIATRIA",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Casos de COVID-19",
      src: images[8],
      text: "Relatório de casos suspeitos de COVID-19 que estão sendo analisados.",
      alt: "Casos de COVID-19",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Métricas BRADEN",
      src: images[9],
      text: "Contagem de controles para utilização na geração de indicadores.",
      alt: "Métricas BRADEN",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Pacientes Admitidos no Mês Anterior",
      src: images[10],
      text: "Lista dos pacientes admitidos no mês anterior à emissão desse relatório.",
      alt: "Pacientes Admitidos no Mês Anterior",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Pacientes Internados + 15 Dias no Mesmo Leito",
      src: images[11],
      text: "Lista com os pacientes internados a mais de 15 dias no mesmo leito.",
      alt: "Pacientes Internados + 15 Dias no Mesmo Leito",
      idColor: "text-[#455A64]",
    },  
    {
      id: "PAGO - Risco por Bairro/Cidade",
      src: images[12],
      text: "Relatório dos Pronto Atendimentos Ginecológicos e Obstétricos com relação ao risco por bairro e cidade dos pacientes.",
      alt: "PAGO - Risco por Bairro/Cidade",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Pentaho Assistencial",
      src: images[13],
      text: "Aplicação para emissão de relatórios do AGHU para a área assistencial.",
      alt: "Pentaho Assistencial",
      idColor: "text-[#455A64]",
    },  
    {
      id: "Termo Transfusional",
      src: images[14],
      text: "Termo de Consentimento Livre e Esclarecido Transfusional.",
      alt: "Termo Transfusional",
      idColor: "text-[#455A64]",
    },    
  ];

  return (
    <div className="flex">
      <Sidebar />
      <Main title="Relatórios">
        <div className="flex flex-wrap justify-center gap-5  px-8">
          {imagesSistemasAssistenciais.map((image) => (
            <Card
              id={image.id}
              text={image.text}
              idColor={image.idColor}
            >
              <Image src={image.src} width={230} height={120} alt={image.alt} />
            </Card>
          ))}
        </div>
      </Main>
    </div>
  )
}

export default Relatorios