import React from "react";

type Props = {
  id: string,
  text?: string,
  idColor: string,
  children: React.ReactNode
};

const Card = ({id, text, idColor, children }: Props) => {

  const clickedShowMore = () => {
    alert('clicouuuuuuuuuuuuuu');
  }

  return (
    <div className="w-[330px] h-[380px] bg-[#fff] rounded-3xl flex flex-col justify-center gap-5 hover:shadow-lg hover:shadow-black hover:scale-105 ease-in-out duration-300">
      <div className="flex flex-col gap-10 justify-center items-center">
        {children}
        <p className={`text-[20px] ${idColor} font-bold text-center` }>{id}</p>
      </div>

      <div className="rounded-3xl flex flex-col justify-center items-center">
        <p className=" text-center text-sm">{}</p>
      </div>

      
    </div>
  );
};

export default Card;
