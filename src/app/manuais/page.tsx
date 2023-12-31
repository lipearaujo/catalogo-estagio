import Main from '@/components/Main'
import MainCard from '@/components/MainCard'
import Sidebar from '@/components/Sidebar'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Manuais = async (props: Props) => {
  const allCards = await prisma.mainCard.findMany({
    where: {
      category: "manuais",
    },
  });
  
  return (
    <div className="flex max-lg:flex-col">
        <Sidebar />
        <Main title='Manuais'>
          <div className='flex flex-col gap-5'>
            <MainCard title='Documentos Institucionais' id=''>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64]'>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/acesso-a-informacao/pops-protocolos-e-processos/superintendencia-1'>Documentos Publicados</Link></strong>
                </li>
                <li>
                  Modelos de Documentos Institucionais
                  <ul className='mx-auto w-11/12 list-disc'>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/acesso-a-informacao/pops-protocolos-e-processos/modelos'>Modelos de POP's, Protocolos, Manuais, Regimentos, etc.;</Link></strong>
                    </li>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/comunicacao/documentos-institucionais'>Modelos com Identidade Visual do HU-UFGD.</Link></strong>
                    </li>
                  </ul>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/documentos/Abreviaturas-Siglas-Assistenciais.pdf'>Lista de Abreviaturas e Siglas Assistenciais.</Link></strong>
                </li>
              </ul>
            </MainCard>

            <MainCard title='Certificado Digital' id=''>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64]'>
                  <li className='text-[14px] py-1'>
                    Manuais de solicitação de certificado digital:
                    <ul className='mx-auto w-11/12 list-disc'>
                      <li className='text-[14px] py-1'>
                        <strong><Link href='https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/sou-gov.br/certificado-digital/certificado-digital'>Solicitação pelo SOUGOV.BR;</Link></strong>
                      </li>
                      <li className='text-[14px] py-1'>
                        <strong><Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/Manual-Solicitacao-Certificado-Digital_HU-UFGD-2023.pdf'>SOUGOV.BR + Processo SEI.</Link></strong>
                      </li>
                    </ul>
                  </li>
                  
                  <li className='text-[14px] py-1'>
                    <strong><Link href='https://neoid.estaleiro.serpro.gov.br/downloads/Manual-NeoID.pdf'>Manual do Certificado Digital NeoID;</Link></strong>
                  </li>
                  <li className='text-[14px] py-1'>
                    <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-certificado-digital'>Manual de Uso do Certificado Digital NeoID no AGHU;</Link></strong>
                  </li>
                  <li className='text-[14px] py-1'>
                    <strong><Link href='https://www.youtube.com/watch?v=3hci8lKqdho&ab_channel=HospitalUniversitario-UFGD'>Treinamento do Certificado Digital (YouTube).</Link></strong>
                  </li>
                </ul>
            </MainCard>

            <MainCard title='AGHUX' id=''>
              <p className="text-[14px] text-[#455A64] mx-auto w-11/12">Acesse no menu <strong><Link href='/portais'>Portais</Link></strong>, desse catálogo, o portal do AGHUX contendo os detalhes de cada módulo do sistema. Abaixo você pode acessar os manuais de cada um deles, usados no HU-UFGD:</p>
              <h5 className='text-[20px] mx-auto font-bold w-11/12 mt-3 text-[#455A64]'>Módulos:</h5>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64]'>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-ambulatorio-assistencial-e-administrativo'>Ambulatório Assistencial e Administrativo;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-cirurgia'>Cirurgia;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-controle-de-pacientes-Z7F'>Controle dos Pacientes;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/page/manual-modulo-custos-aghux'>Custos;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-estoque'>Estoque;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-exames'>Exames;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-farmacia'>Farmácia;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-internacao'>Internação;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-pacientes-prontuario-online'>Pacientes/Prontuário Online;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-prescricao-de-enfermagem'>Prescrição de Enfermagem;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-prescricao-medica'>Prescrição Médica:</Link></strong>
                  <ul className='mx-auto w-11/12 list-disc'>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/aghu/prescricao-medica-hemoterapia.pdf'>Prescrição de Hemoterapia;</Link></strong>
                    </li>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/aghu/prescricao-medica-sumario-alta.pdf'>Sumário de Alta.</Link></strong>
                    </li>
                  </ul>
                </li>
                <li className='text-[14px] py-1'>
                  <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/page/manual-modulo-prescricao-multiprofissional-aghux'>Prescrição Multiprofissional;</Link></strong>
                </li>
                <li className='text-[14px] py-1'>
                  Outros Módulos:
                  <ul className='mx-auto w-11/12 list-disc'>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/modulo-certificado-digital'>Certificado Digital;</Link></strong>
                    </li>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/gerencia-de-usuarios'>Gerência de Usuários;</Link></strong>
                    </li>
                    <li className='text-[14px] py-1'>
                      <strong><Link href='https://tidocs.ebserh.gov.br/books/documentacao/chapter/outros'>Outros.</Link></strong>
                    </li>
                  </ul>
                </li>
              </ul>
            </MainCard>

            <MainCard title='SEI!' id=''>
              <p className="text-[14px] text-[#455A64] mx-auto w-11/12">Abaixo você encontra os manuais, disponibilizados pela Ebserh Sede e Enap, o Procedimento Operacional Padrão e os cursos (Ebserh e Enap) do Sistema Eletrônico de Informações (SEI!):</p>
              <h5 className='text-[20px] mx-auto font-bold w-11/12 mt-3 text-[#455A64]'>Manuais e POP:</h5>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64] font-bold'>
                <li className='text-[14px] py-1'>
                  <Link href='https://www.gov.br/economia/pt-br/acesso-a-informacao/sei/publicacoes'>Cartilhas e Manuais;</Link>
                  <ul className='mx-auto w-11/12 list-disc text-[#455A64]'>
                    <li className='text-[14px] py-1'>
                      <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/sei/Cartilha-do-usuario-do-SEI.pdf'>Cartilha do Usuário do SEI!.</Link>
                    </li>
                  </ul>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/sei/Projeto_Manual-Enap-sem-Papel_SEi!.pdf'>Manual (Enap);</Link>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/sei/POP_SEi!Usar_v2.6.pdf'>SEI! Usar - POP.</Link>
                </li>
              </ul>
              <h5 className='text-[20px] mx-auto font-bold w-11/12 mt-3 text-[#455A64]'>Curso Sistema Eletrônico de Informações - SEI! USAR:</h5>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64] font-bold'>
                <li className='text-[14px] py-1'>
                  <Link href='https://www.escolavirtual.gov.br/curso/74'>Enap - Escola Nacional de Administração Pública.</Link>
                </li>
              </ul>
            </MainCard>

            <MainCard title='Informática na Saúde' id=''>
              <ul className='mx-auto w-10/12 list-disc text-[#455A64] font-bold'>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/manual-instalacao-cliente-vpn-windows.pdf'>Manual de Instalação do Cliente VPN;</Link>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/Manual-Microsoft-Teams.pdf'>Manual do Microsoft Teams (SETISD/HU-UFGD);</Link>
                  <ul className='mx-auto w-11/12 list-disc'>
                    <li className='text-[14px] py-1'>
                      <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/Microsoft-Teams_Guia-de-Inicio-Rapido_Microsoft.pdf'>Guia de Início Rápido (Microsoft);</Link>
                    </li>
                    <li className='text-[14px] py-1'>
                      <Link href='https://learn.microsoft.com/pt-br/microsoftteams/get-started-with-teams-quick-start'>Visão Geral (Microsoft);</Link>
                    </li>
                    <li className='text-[14px] py-1'>
                      <Link href='https://support.microsoft.com/pt-br/office/agendar-um-evento-ao-vivo-no-microsoft-teams-7a9ce97c-e1cd-470f-acaf-e6dfc179a0e2'>Como Agendar Um Evento ao Vivo (live) no Teams.</Link>
                    </li>
                  </ul>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/Manual-de-abertura-de-chamado_HelpDesk-SETISD.pdf'>Abertura de Chamado Via Help Desk (SETISD);</Link>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/como-preencher-formulario-acesso-v1.1.pdf'>Preenchimento do Formulário de Acesso;</Link>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/como-fazer-captura-tela-erro-aghu-sistemas-v1.0.pdf'>PRINT SCREEN no Windows;</Link>
                </li>
                <li className='text-[14px] py-1'>
                  <Link href='http://sistemas.hugd.ebserh.gov.br/catalogo/arquivos/setisd/como-adicionar-excecao-certificado-seguranca-firefox-chrome-v1.0.pdf'>Adicionar Exceção de Segurança no Mozilla Firefox/Google Chrome.</Link>
                </li>
              </ul>
            </MainCard>

            {allCards.map((card) => (
            <MainCard
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            >
              {""}
            </MainCard>
          ))}
          </div>
        </Main>
    </div>
  )
}

export default Manuais