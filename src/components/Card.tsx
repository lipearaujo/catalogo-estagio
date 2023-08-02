"use client";
import React, { useState } from "react";
import Link from "next/link";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";

type Props = {
  id: string;
  text: string;
  idColor: string;
  href: string;
  children: React.ReactNode;
};

const Card = ({ id, text, idColor, href, children }: Props) => {
  const [flip, setFlip] = useState<boolean>(false);

  //const cardClass = `w-[300px] h-[332px] border border-[#dbdbd9] bg-[#fff] rounded-3xl flex hover:border-[#d40f08] ease-in duration-300`
  const cardClass = "w-[300px] h-[332px] border border-[#dbdbd9] bg-[#fff] rounded-3xl flex hover:shadow-lg hover:shadow-[#ababab] ease-in-out duration-300";
  const flipClass = "[transform-style:preserve-3d] [transform:rotateY(180deg)]";

  const Front = () => {
    return (
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-end">
          <span className="text-[24px] mt-[30px] mr-[30px]">
            <BsFillQuestionCircleFill
              className="cursor-pointer"
              onClick={() => setFlip(!flip)}
            />
          </span>
        </div>

        <div className="">
          <Link href={href}>
            <div className="flex flex-col gap-[30px] px-1 justify-center items-center">
              {children}
              <p className={`text-[20px] ${idColor} font-bold text-center`}>
                {id}
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
