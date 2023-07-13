import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Relatorios = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Relatórios'>Relatórios</Main>
    </div>
  )
}

export default Relatorios