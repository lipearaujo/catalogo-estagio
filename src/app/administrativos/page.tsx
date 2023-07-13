import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Administrativo = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Sistemas Administrativos'>Administrativo</Main>
    </div>
  )
}

export default Administrativo