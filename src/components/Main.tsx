"use client";

import React, { useState } from "react";

import { IoSearchCircleSharp } from "react-icons/io5";

import Avatar from "./Avatar";

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
    <main className="rounded-[30px] bg-[#F1F5F9] flex-1 px-5 py-7">
      <header className="flex justify-between items-center">
        <h1 className="text-[24px]">{title}</h1>
        <div className="flex gap-5">
          <div className="hidden lg:flex relative rounded-[999px] ">
            <form action="" className="flex justify-center items-center">
              <input
                type="text"
                name="searchLabel"
                id="searchLabel"
                placeholder="Pesquisar..."
                value={inputText}
                onChange={getInputText}
                className="w-[14rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[18rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
              />
            </form>
            <div className="text-3xl  h-[30px] rounded-[999px] flex justify-center items-center absolute right-[5px] top-[5px] bg-slate-300">
              <i onClick={search}>
                <IoSearchCircleSharp />
              </i>
            </div>
          </div>

          <Avatar />
        </div>
      </header>
      <p className="border-b-[1px] mt-[18px] mb-[25px] ml-1 w-full border-[#888888] opacity-10"></p>
      {children}
    </main>
  );
};

export default Main;
