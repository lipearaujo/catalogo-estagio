'use client';
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { MdPassword } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { HiSearch } from 'react-icons/hi';

type Props = {
  title: string,
  children: React.ReactNode;
}

const Main = ({children, title}: Props) => {
  const currentRoute = usePathname();

  return (
    <main className='rounded-[30px] bg-[#f5f5f5] w-full flex-1 p-5'>
      <header className="flex justify-between items-center">
          <p>{title}</p>
          <div className='flex gap-8'>
            <nav className='flex gap-8'>
              <Link href='/solicitar-alteracao-senha' className='flex gap-1 justify-center items-center'>
                <MdPassword/>
                <span>Esqueci minha senha</span>
              </Link>

              <Link href='/lista-de-ramais' className='flex gap-1 justify-center items-center'>
                <ImPhone/>
                <span>Lista de Ramais</span>
              </Link>
            </nav>
            <form action="" className='flex gap-1 justify-center items-center'>
                <input type="text" name="searchLabel" id="searchLabel" placeholder='Pesquisar...' className='rounded-[999px] bg-slate-300 pl-3'/>
                <HiSearch />
              </form>

          </div>
      </header>
      <p className='border-b-[1px] mt-[18px] mb-8 ml-1 w-full border-[#888888]'></p>
      {children}
    </main>
  )
}

export default Main