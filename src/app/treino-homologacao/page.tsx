import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const TreinoHomologacao = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Treinamento e Homologação'>Treino e Homologação</Main>
    </div>
  )
}

export default TreinoHomologacao