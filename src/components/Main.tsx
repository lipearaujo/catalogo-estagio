"use client";

import React, { useState, useEffect } from "react";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { IoSearchCircleSharp } from "react-icons/io5";

import ArrowButton from "./ArrowButton";
import AddButton from "./AddButton";
import Avatar from "./Avatar";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Main = ({ children, title }: Props) => {
  const [inputText, setInputText] = useState<string>("");
  const [showArrowButton, setShowArrowButton] = useState<boolean>(false);

  const { data: session } = useSession();
  const currentRoute = usePathname();

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 200) {
        setShowArrowButton(true);
      } else {
        setShowArrowButton(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const getInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
  };

  const search = () => {
    alert("clicouuu!!");
  };

  return (
    <main className="max-lg:rounded-none rounded-[30px] bg-[#F1F5F9] flex-1 px-5 py-7">
      <header className="flex justify-between items-center animate-headerSlidein">
        <h1 className="max-sm:text-[18px] text-[24px]">{title}</h1>
        <div className="flex gap-5 ">
          <div className="hidden md:flex relative rounded-[999px] ">
            <form
              onSubmit={search}
              className="flex justify-center items-center"
            >
              <input
                type="search"
                name="searchLabel"
                id="searchLabel"
                placeholder="Pesquisar..."
                value={inputText}
                onChange={getInputText}
                className="w-[14rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[18rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
              />
              <button className="text-3xl h-[30px] rounded-[999px] flex justify-center items-center absolute right-[5px] top-[5px] bg-slate-300">
                <IoSearchCircleSharp />
              </button>
            </form>
          </div>
          <Avatar />
        </div>
      </header>
      <p className="border-b-[1px] mt-[18px] mb-[25px] ml-1 w-full border-[#888888] opacity-10"></p>
      <div className="animate-slidein">{children}</div>
      <div className="max-md:bottom-7 fixed bottom-10 right-10">
        <ArrowButton show={showArrowButton} />
      </div>

      {session && session?.user?.role === "ADMIN" ? (
        <div
          className={`${
            currentRoute === "/" ||
            currentRoute === "/manuais" ||
            currentRoute === "/ajuda"
              ? "static mt-2"
              : "max-2xl:static max-2xl:mt-2 fixed bottom-10"
          }`}
        >
          <AddButton />
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Main;
