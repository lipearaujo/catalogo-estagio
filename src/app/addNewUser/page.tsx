import React from "react";
import { RegisterUserForm } from "./form";

type Props = {};

const AddNewUser = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <h1 className="font-bold text-3xl text-white">Registrar Usuário</h1>
      <RegisterUserForm />
    </div>
  );
};

export default AddNewUser;
