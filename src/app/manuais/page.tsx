import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Manuais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Manuais'>Manuais</Main>
    </div>
  )
}

export default Manuais