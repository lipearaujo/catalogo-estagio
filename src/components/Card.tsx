import React from "react";

type Props = {
  text: string;
};

const Card = ({ text }: Props) => {
  return (
    <div className="w-[300px] h-[300px] bg-[#fff] rounded-3xl flex flex-col justify-center gap-5">
      <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
        ...
      </div>
      <p className="border-b-[1px] mx-auto w-11/12 border-[#888888]"></p>
      <div className="rounded-3xl flex flex-col justify-center items-center">
        <p className="p-2 text-center text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Card;
