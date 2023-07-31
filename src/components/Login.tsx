"use client";

import React, { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [inputText, setInputText] = useState<string>("");

  const getInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
  };

  return (
    <form className="max-lg:w-[100%] m-auto w-[450px] h-[40vh] border border-[#263238] shadow-lg shadow-black rounded-lg bg-[#fff] flex flex-col gap-6 justify-center items-center">
      <input
        type="text"
        placeholder="E-mail..."
        value={inputText}
        onChange={getInputText}
        className="max-[300px]:w-[95%] max-[300px]:focus:w-[95%] max max-lg:focus:w-[20rem] border-0 outline-0 rounded-[999px] bg-slate-300 pl-3 w-[18rem] h-[50px] focus:w-[22rem] focus:border-4 focus:border-slate-500 ease-in-out duration-300"
      />
      <input
        type="password"
        placeholder="Senha..."
        value={inputText}
        onChange={getInputText}
        className="max-[300px]:w-[95%] max-[300px]:focus:w-[95%] max-lg:focus:w-[20rem] border-0 outline-0 rounded-[999px] bg-slate-300 pl-3 w-[18rem] h-[50px] focus:w-[22rem] focus:border-4 focus:border-slate-500 ease-in-out duration-300"
      />
      <div className="flex gap-5">
        <button className="w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-300">Entrar</button>
        <button className="w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-300">Cancelar</button>
      </div>
    </form>
  );
};

export default Login;
