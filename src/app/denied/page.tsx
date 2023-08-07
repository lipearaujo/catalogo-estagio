import Link from "next/link";
import React from "react";

type Props = {};

const Denied = (props: Props) => {
  return (
    <div>
      <h1>Acesso Restrito</h1>
      <h3>Você não tem permissão para acessar esta página !</h3>
      <Link href="/">Voltar</Link>
    </div>
  );
};

export default Denied;
