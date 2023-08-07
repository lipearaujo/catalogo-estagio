"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-300"
      onClick={() => signIn()}
    >
      Entrar
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      href={"/cadastrar"}
      className="flex justify-center items-center w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-300"
    >
      Cadastrar
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="w-[100px] h-[50px] rounded-lg border-2 border-[#263238] hover:font-bold hover:shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-300"
      onClick={() => signOut()}
    >
      Sair
    </button>
  );
};
