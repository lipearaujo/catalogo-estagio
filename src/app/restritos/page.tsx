"use client"

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";
import Login from "@/components/Login";
import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

type Props = {};

const Restritos = (props: Props) => {

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <p className="text-white">Loading....</p>;
  }

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
