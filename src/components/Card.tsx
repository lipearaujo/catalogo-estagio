"use client";
import React, { useState } from "react";
import Link from "next/link";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillQuestionCircleFill, BsFillTrashFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi2";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Props = {
  id: string;
  name: string;
  text: string;
  idColor: string;
  href: string;
  children: React.ReactNode;
};

const Card = ({ id, name, text, idColor, href, children }: Props) => {
  const [flip, setFlip] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();
  const currentRoute = usePathname();

  const cardClass =
    "w-[300px] h-[332px] border border-[#dbdbd9] bg-[#fff] rounded-3xl flex hover:shadow-lg hover:shadow-[#ababab] ease-in-out duration-300";
  const flipClass = "[transform-style:preserve-3d] [transform:rotateY(180deg)]";

  const deleteCard = async (id: string) => {
    try {
      const res = await fetch("/api/deleteCard", {
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

  const Front = () => {
    return (
      <div className="w-full flex flex-col gap-6 ">
        <div
          className={`${
            session && session?.user?.role === "ADMIN"
              ? "w-full flex justify-between"
              : "w-full flex justify-end"
          }`}
        >
          {session && session?.user?.role === "ADMIN" ? (
            <div className="mt-[30px] ml-[30px] flex gap-2">
              <Link href={`/updateCard/${id}`}>
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
          ) : (
            ""
          )}
          <span className="text-[24px] mt-[30px] mr-[30px]">
            <BsFillQuestionCircleFill
              className="cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Link href={href}>
            <div className="flex flex-col gap-[30px] px-1 justify-center items-center">
              {children}
              <p className={`text-[20px] ${idColor} font-bold text-center`}>
                {name}
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  };

  const Back = () => {
    return (
      <div className="w-full max-h-[320px] flex flex-col gap-5 [transform:rotateY(180deg)] px-2">
        <button
          className="mt-[30px] mr-[30px] text-[26px] flex justify-end"
          onClick={() => setFlip(!flip)}
        >
          <AiFillCloseCircle />
        </button>
        <p className="line-clamp-[11] text-center text-sm">{text}</p>
      </div>
    );
  };

  const SwitchSides = () => {
    if (flip === false) {
      return <Front />;
    }

    if (flip === true) {
      return <Back />;
    }
  };

  return (
    <div className={`${cardClass} ${flip ? flipClass : ""}`}>
      <SwitchSides />
    </div>
  );
};

export default Card;
