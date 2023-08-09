"use client";
import React, { ChangeEvent, useState } from "react";

type Props = {};

const RegisterCardForm = (props: Props) => {
  let [loading, setLoading] = useState(false);
  let [name, setName] = useState<string>("");
  let [text, setText] = useState<string>("");
  let [src, setSrc] = useState<string>("");
  let [href, setHref] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/newCard", {
        method: "POST",
        body: JSON.stringify({ name, text, src, href }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }
    } catch (error: any) {
      setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-3 w-[450px] p-3 rounded-lg border border-[#dbdbd9] bg-[#F1F5F9]"
    >
      <label htmlFor="name">Nome</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setName(e.target.value)
        }
      />

      <label htmlFor="infos">Informações</label>
      <textarea
        className="resize-none w-[18rem] border-[5px] border-slate-300 outline-0 rounded-[10px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        name="infos"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
          setText(e.target.value)
        }
        rows={10}
        cols={30}
      ></textarea>

      <label htmlFor="imageSrc">Link Imagem</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="imageSrc"
        value={src}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setSrc(e.target.value)
        }
      />

      <label htmlFor="href">Rota</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="href"
        value={href}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setHref(e.target.value)
        }
      />

      <div className="flex gap-2">
        <label htmlFor="favorite">Favorito</label>
        <input type="radio" name="favorite" value="true" />
      </div>

      <button
        className={`${
          loading ? "bg-[#ccc]" : "bg-[#3446eb]"
        } text-white p-4 cursor-pointer rounded-[10px]`}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Cadastrar"}
      </button>
    </form>
  );
};

export default RegisterCardForm;
