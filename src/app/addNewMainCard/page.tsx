import React from 'react'
import AddMainCardForm from './form'

type Props = {}

function AddNewMainCard({}: Props) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
    <h1 className="font-bold text-3xl text-white">Registrar Card</h1>
    <AddMainCardForm />
  </div>
  )
}

export default AddNewMainCard;