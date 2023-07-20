"use client";

import React from 'react'
import { signIn, signOut } from "next-auth/react";

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
        <button className='w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:bg-[#ececec] hover:font-bold' onClick={() => signIn()}>
            Entrar
        </button>
    </div>
  )
}

export default Login