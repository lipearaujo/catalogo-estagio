"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export const RegisterUserForm = () => {
  let [loading, setLoading] = useState(false);
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-3 w-[450px] p-3 rounded-lg border border-[#dbdbd9] bg-[#F1F5F9]"
    >
      <label htmlFor="name">Nome</label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
      />
      <label htmlFor="password">Senha</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
      />
      <label htmlFor="role">Role</label>
      <input
        required
        type="text"
        name="role"
        value={formValues.role}
        onChange={handleChange}
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
      />
      <button
        className={`${
          loading ? "bg-[#ccc]" : "bg-[#3446eb]"
        } text-white p-4 cursor-pointer rounded-[10px]`}
        disabled={loading}
      >
        {loading ? "carregando..." : "Cadastrar"}
      </button>
    </form>
  );
};
