"use client";
import React, { useState } from "react";
import Link from "next/link";

import { FaRegQuestionCircle } from "react-icons/fa";

type Props = {
  id: string;
  text: string;
  idColor: string;
  children: React.ReactNode;
};

const Card = ({ id, text, idColor, children }: Props) => {
  const [flip, setFlip] = useState(false);

  const cardClass = 'w-[330px] h-[380px] bg-[#fff] rounded-3xl flex flex-col items-center justify-around  hover:shadow-lg hover:shadow-[#263238] hover:scale-105 ease-in-out duration-300'
  const flipClass = "-rotate-180";

  return (
    <div className={`${cardClass} ${flip ? flipClass : ''}`}>
      <div>
        <button
          onClick={() => setFlip(!flip)}
          className="ml-[280px]  text-[24px]"
        >
          <FaRegQuestionCircle />
        </button>

        <Link href="">
          <div className="flex flex-col gap-[50px] justify-center items-center">
            {children}
            <p className={`text-[20px] ${idColor} font-bold text-center`}>
              {id}
            </p>
          </div>
        </Link>
      </div>

      {/*<div>
        <button onClick={() => setFlip(!flip)}>X</button>
        <p>{text}</p>
  </div>*/}
    </div>
  );
};

export default Card;
