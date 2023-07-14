import React from "react";

type Props = {
  id: string,
  text?: string,
  children: React.ReactNode
};

const Card = ({id, text, children }: Props) => {

  const clickedShowMore = () => {
    alert('clicouuuuuuuuuuuuuu');
  }

  return (
    <div className="w-[330px] h-[380px] bg-[#fff] rounded-3xl flex flex-col justify-center gap-5 hover:shadow-lg hover:shadow-black ease-in-out duration-300">
      <div className="flex flex-col gap-5 justify-center items-center">
        {children}
        <p className="text-[16px] ">{id}</p>
      </div>

      <p className="border-b-[1px] mx-auto w-11/12 border-[#888888]"></p>

      <div className="rounded-3xl flex flex-col justify-center items-center">
        <p className=" text-center text-sm">{}</p>
      </div>

      <button className="p-2 mx-auto bg-[#263238] text-white rounded-[99px] w-1/2">MAIS</button>
    </div>
  );
};

export default Card;
