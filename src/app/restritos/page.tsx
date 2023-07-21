import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Login from "@/components/Login";
import React from "react";

type Props = {};

const Restritos = async (props: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <Main title="Restritos">
        <Login />
      </Main>
    </div>
  );
};

export default Restritos;
