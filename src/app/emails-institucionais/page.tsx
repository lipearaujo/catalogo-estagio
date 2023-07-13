import Main from '@/components/Main'
import Sidebar from '@/components/Sidebar'
import React from 'react'

type Props = {}

const EmailsInstitucionais = (props: Props) => {
  return (
    <div className='flex'>
        <Sidebar />
        <Main title='E-mails Institucionais'>E-mails Institucionais</Main>
    </div>
  )
}

export default EmailsInstitucionais