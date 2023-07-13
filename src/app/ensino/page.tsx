import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Ensino = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Sistemas de Ensino, Pesquisa e Inovação em Saúde'>Ensino</Main>
    </div>
  )
}

export default Ensino