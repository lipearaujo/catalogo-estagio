import Main from '@/components/Main'
import MainCard from '@/components/MainCard'
import Sidebar from '@/components/Sidebar'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Manuais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Manuais'>
          <div className='flex flex-col gap-5'>
            <MainCard title='Documentos Institucionais'>
              <ul className='mx-auto w-10/12 list-disc'>
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

            <MainCard title='Certificado Digital'>
              <ul className='mx-auto w-10/12 list-disc'>
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

            <MainCard title='AGHUX'>
              <p className="text-[14px] mx-auto w-11/12">Acesse no menu <strong><Link href='/portais'>Portais</Link></strong>, desse catálogo, o portal do AGHUX contendo os detalhes de cada módulo do sistema. Abaixo você pode acessar os manuais de cada um deles, usados no HU-UFGD:</p>
              <h5 className='text-[20px] mx-auto font-bold w-11/12 mt-3'>Módulos:</h5>
              <ul className='mx-auto w-10/12 list-disc'>
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

            <MainCard title='SEI!'>

            </MainCard>

            <MainCard title='Informática na Saúde'>

            </MainCard>
          </div>
        </Main>
    </div>
  )
}

export default Manuais