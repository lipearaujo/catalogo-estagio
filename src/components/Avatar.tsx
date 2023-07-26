import React, { useState } from "react";
import Link from "next/link";

import { ImPhone } from "react-icons/im";
import { FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";

type Props = {};

const Avatar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-col justify-center items-center">
      <i className="text-[30px] cursor-pointer" onClick={showMenu}>
        <FaUserCircle />
      </i>
      <div
        className={
          menuOpen === false
            ? "hidden ease-in-out duration-700"
            : "z-50 flex flex-col w-[224px] rounded-xl fixed top-[90px] right-10 bg-white border-2 border-[#dbdbd9] ease-in-out duration-700"
        }
      >
        <div className="h-full p-3">
          <p className="text-base">...</p>
          <p className="text-sm">...</p>
        </div>
        <p className="border-b-[1px]  w-full border-[#ececec]"></p>
        <div className="flex flex-col gap-2 h-full p-3">
          <Link
            href="https://www.gov.br/ebserh/pt-br/hospitais-universitarios/regiao-centro-oeste/hu-ufgd/comunicacao/telefones-uteis"
            className="flex gap-2 justify-start items-center"
            title="Lista de Ramais"
          >
            <i className="text-sm">
              <ImPhone />
            </i>
            <span className="text-base">Lista de Ramais</span>
          </Link>

          <Link
            href="https://servicosti.ebserh.gov.br/#/solicitar-alteracao-senha"
            className="flex gap-2 justify-start items-center"
            title="Esqueci minha senha"
          >
            <i className="text-sm">
              <BiSolidLockAlt />
            </i>
            <span className="text-base">Esqueci Minha Senha</span>
          </Link>
        </div>
        <p className="border-b-[1px]  w-full border-[#ececec]"></p>
        <div className="flex h-full items-center gap-2 p-3">
          <i>
            <FaSignInAlt />
          </i>
          <button>Entrar</button>
        </div>
      </div>
    </nav>
  );
};

export default Avatar;
