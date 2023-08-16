"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsFillTrashFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";

type Props = {
  id: string;
  title: string;
  subtitle?: string | null;
  text?: string;
  children: React.ReactNode;
};

const MainCard = ({ id, title, subtitle, text, children }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  const currentRoute = usePathname();

  const deleteCard = async (id: string) => {
    try {
      const res = await fetch("/api/deleteMainCard", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      router.push(currentRoute);
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="w-full py-5 border border-[#dbdbd9] bg-[#fff] rounded-3xl flex flex-col gap-1 hover:shadow-lg hover:shadow-[#ababab] ease-in-out duration-300">
      {session && session?.user?.role === "ADMIN" ? (
        <div className="mb-2 w-11/12 mx-auto">
          <div className="flex gap-2">
            <Link href={`/updateMainCard/${id}`}>
              <i className="text-[20px]">
                <HiPencilSquare />
              </i>
            </Link>
            <button onClick={() => deleteCard(id)}>
              <i className="text-[20px]">
                <BsFillTrashFill />
              </i>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="">
        <h1 className="text-[#455A64] text-[34px] mx-auto w-11/12 font-bold">
          {title}
        </h1>
        <p className="border-b-[1px] w-11/12 mx-auto border-[#888888] opacity-10"></p>
        <h5 className="text-[20px] mt-3 mx-auto w-11/12">{subtitle}</h5>
        <p className={`text-[14px]  mt-3 mx-auto w-11/12`}>{text}</p>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default MainCard;
