import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Restritos = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Restritos'>Restritos</Main>
    </div>
  )
}

export default Restritos