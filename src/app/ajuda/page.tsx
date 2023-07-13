import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Ajuda = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Ajuda'>Ajuda</Main>
    </div>
  )
}

export default Ajuda