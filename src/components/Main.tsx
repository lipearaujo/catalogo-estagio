"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MdPassword } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { HiSearch } from "react-icons/hi";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Main = ({ children, title }: Props) => {
  const [inputText, setInputText] = useState<string>("");

  const getInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
  };

  const search = () => {
    alert("clicouuu!!");
  };

  return (
    <main className="rounded-[30px] bg-[#F1F5F9] w-full flex-1 p-5">
      <header className="flex justify-between items-center">
        <p>{title}</p>
        <div className="flex">
          <form action="" className="flex justify-center items-center">
            <input
              type="text"
              name="searchLabel"
              id="searchLabel"
              placeholder="Pesquisar..."
              value={inputText}
              onChange={getInputText}
              className="border-0 outline-0 rounded-[999px] bg-slate-300 pl-3 w-[14rem] h-[40px] focus:w-[18rem] focus:border-4 focus:border-slate-500 ease-in-out duration-300"
            />
            <i
              className="text-2xl h-[40px] flex justify-center items-center relative inset-y-0 right-10"
              onClick={search}
            >
              <HiSearch />
            </i>
          </form>
          <nav className="flex gap-6">
            <Link
              href="/solicitar-alteracao-senha"
              className="flex gap-1 justify-center items-center"
            >
              <i className="text-2xl">
                <MdPassword />
              </i>
              <span>Esqueci minha senha</span>
            </Link>

            <Link
              href="/lista-de-ramais"
              className="flex gap-1 justify-center items-center"
            >
              <i className="text-2xl">
                <ImPhone />
              </i>
              <span>Lista de Ramais</span>
            </Link>
          </nav>
        </div>
      </header>
      <p className="border-b-[1px] mt-[18px] mb-8 ml-1 w-full border-[#888888]"></p>
      {children}
    </main>
  );
};

export default Main;
