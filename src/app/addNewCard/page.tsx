"use client";
import React from 'react'
import RegisterCardForm from './form';

type Props = {}

const AddNewCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
        <h1 className='font-bold text-3xl text-white'>Registrar Card</h1>
        <RegisterCardForm />
    </div>
  )
}

export default AddNewCard