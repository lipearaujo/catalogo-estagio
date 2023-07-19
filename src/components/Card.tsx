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

  const cardClass = 'w-[330px] h-[380px] bg-[#fff] rounded-3xl flex  hover:shadow-lg hover:shadow-[#263238] ease-in-out duration-300'
  const flipClass = "[transform-style:preserve-3d] [transform:rotateY(180deg)]";

  return (
    <div className={`${cardClass} ${flip ? flipClass : ''}`}>
      <div className="w-full flex flex-col  gap-12">
        <div className="w-full flex justify-end">
          <span
            className="text-[24px] mt-[30px] mr-[30px]"
          >
            <FaRegQuestionCircle className="cursor-pointer" onClick={() => setFlip(!flip)}/>
          </span>
        </div>

        <div className="">
          <Link href="">
            <div className="flex flex-col gap-[50px] justify-center items-center">
              {children}
              <p className={`text-[20px] ${idColor} font-bold text-center`}>
                {id}
              </p>
            </div>
          </Link>
        </div>
      </div>

{/*       <div className="relative inset-0">
        <button onClick={() => setFlip(!flip)}>X</button>
        <p className="w-[330px] h-[370px]">{text}</p>
      </div> */}
    </div>
  );
};

export default Card;
