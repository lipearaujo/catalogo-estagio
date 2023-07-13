import React from 'react'

import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import Card from '@/components/Card'


type Props = {}

const Assistenciais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='Sistemas Assistenciais'>
          <div className='flex flex-wrap justify-center gap-5  px-8'>
            <Card text='O aplicativo de Gestão para Hospitais Universitários - AGHU é um site...'/>
            <Card text='Aquii é outro texto Aquii é outro texto Aquii é outro texto Aquii é outro texto'/>
          </div>
        </Main>
    </div>
  )
}

export default Assistenciais