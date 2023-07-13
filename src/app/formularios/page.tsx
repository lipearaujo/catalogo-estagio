import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Formularios = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Formulários'>Formulários</Main>    
    </div>
  )
}

export default Formularios