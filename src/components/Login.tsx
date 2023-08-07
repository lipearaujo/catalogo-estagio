import React, { useState } from "react";
import { LoginButton, LogoutButton, RegisterButton } from "./AuthButtons";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
      </div>
    </>
  );
};

export default Login;
