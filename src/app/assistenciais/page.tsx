import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const Assistenciais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Sistemas Assistenciais'>Assistenciais</Main>
    </div>
  )
}

export default Assistenciais