import Link from "next/link";
import React from "react";

type Props = {};

const Denied = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-white text-4xl font-bold tracking-wider">
        Acesso Restrito
      </h1>
      <h3 className="text-white text-2xl">
        Você não tem permissão para acessar esta página !
      </h3>
      <Link
        href="/"
        className="flex items-center justify-center w-[80px] h-[40px] rounded bg-white hover:font-bold hover:shadow-lg hover:shadow-[#ababab] ease-in-out duration-300"
      >
        Voltar
      </Link>
    </div>
  );
};

export default Denied;
