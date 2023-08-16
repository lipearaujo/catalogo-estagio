"use client";
import React from "react";
import UpdateMainCardForm from "./form";
import { usePathname } from "next/navigation";
type Props = {};

const UpdateCard = (props: Props) => {
  const currentRoute = usePathname().toString().split("/");
  const id = currentRoute[2];

  console.log(id);
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="font-bold text-3xl text-white">Atualizar Card</h1>
      <UpdateMainCardForm id={id} />
    </div>
  );
};

export default UpdateCard;
