import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Portais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Portais'>Portais</Main>
    </div>
  )
}

export default Portais