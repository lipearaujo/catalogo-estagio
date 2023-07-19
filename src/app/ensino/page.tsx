import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card';
import React from 'react'

import Image from "next/image";

//importação das imagens Sistemas de Ensino
import PesquisaInovacao from '../../../public/images/ensino/pesquisa-inovacao.png'
import Reservas from '../../../public/images/ensino/reservas.png'
import GerenciaCAA from '../../../public/images/ensino/gerencia-caa.png'
import ControleAcessoAcademicos from '../../../public/images/ensino/controle-acesso-academicos.png'
import EscolaEbserh from '../../../public/images/ensino/escola-ebserh.png'

type Props = {}

const Ensino = (props: Props) => {
  const images = [
    PesquisaInovacao, Reservas, GerenciaCAA, ControleAcessoAcademicos, EscolaEbserh ]
  
  const imagesSistemasAssistenciais = [
    {
      id: "Pesquisa e Inovação em Saúde",
      src: images[0],
      text: "Sistemas voltados para a pesquisa e inovação em saúde.",
      alt: "Pesquisa e Inovação em Saúde",
      idColor: "text-[#283593]",
    },
    {
      id: "Reservas Salas de Aula - GEP",
      src: images[1],
      text: "Agendas de reservas das salas de aula do Setor de Gestão do Ensino.",
      alt: "Reservas Salas de Aula - GEP",
      idColor: "text-[#283593]",
    },
    {
      id: "[ADM] Controle de Acesso Acadêmicos",
      src: images[2],
      text: "Módulo de administração do Sistema de Controle de Acesso aos Acadêmicos (CAAA) no HU-UFGD.",
      alt: "[ADM] Controle de Acesso Acadêmicos",
      idColor: "text-[#455A64]",
    },
    {
      id: "Controle de Acesso Acadêmicos",
      src: images[3],
      text: "Sistema de Controle de Acesso dos Acadêmicos (CAA) que realizam os estágios supervisionados nas dependências do HU-UFGD.",
      alt: "Controle de Acesso Acadêmicos",
      idColor: "text-[#455A64]",
    },
    {
      id: "Escola Ebserh - Nova 3EC",
      src: images[4],
      text: "Plataforma de educação à distância da Escola Ebserh de Educação Corporativa - 3EC.",
      alt: "Escola Ebserh - Nova 3EC",
      idColor: "text-[#455A64]",
    },  
  ];

  return (
    <div className="flex">
      <Sidebar />
      <Main title="Sistemas de Ensino, Pesquisa e Inovação em Saúde">
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

export default Ensino