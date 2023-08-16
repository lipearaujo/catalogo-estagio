"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

const UpdateMainCardForm = ({ id }: Props) => {
  let [loading, setLoading] = useState<boolean>(false);
  let [title, setTitle] = useState<string>("");
  let [subtitle, setSubTitle] = useState<string>("");
  let [text, setText] = useState<string>("");
  let [category, setCategory] = useState<string>("");

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/updateMainCard`, {
        method: "PUT",
        body: JSON.stringify({ id, title, subtitle, text, category }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      router.push("/");
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
      <label htmlFor="title">Título do Card</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setTitle(e.target.value)
        }
      />
      <label htmlFor="subtitle">Subtítulo (se tiver)</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="subtitle"
        value={subtitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setSubTitle(e.target.value)
        }
      />

      <label htmlFor="infos"></label>
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

      <label htmlFor="category">Categoria</label>
      <input
        className="w-[18rem] h-[40px] border-[5px] border-slate-300 outline-0 rounded-[999px] bg-slate-300 pl-3 focus:w-[22rem] focus:border-5 focus:border-slate-500 ease-in-out duration-300"
        required
        type="text"
        name="category"
        value={category}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setCategory(e.target.value)
        }
      />
      <button
        className={`${
          loading ? "bg-[#ccc]" : "bg-[#3446eb]"
        } text-white p-4 cursor-pointer rounded-[10px]`}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Atualizar"}
      </button>
    </form>
  );
};

export default UpdateMainCardForm;
