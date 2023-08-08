"use client";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Login from "@/components/Login";
import React from "react";

type Props = {};

const Restritos = (props: Props) => {
  return (
    <div className="flex max-lg:flex-col max-lg:h-screen">
      <Sidebar />
      <Main title="Restritos">
        <h1>Pagina Restrita</h1>
      </Main>
    </div>
  );
};

export default Restritos;
