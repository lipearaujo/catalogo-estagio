import React, { ReactNode } from 'react'

type Props = {
  title: string,
  subtitle?: string,
  text?: string,
  children: React.ReactNode, 
}

const MainCard = ({title, subtitle, text, children}: Props) => {
  return (
    <div className="w-full py-5 border border-[#dbdbd9] bg-[#fff] rounded-3xl flex flex-col gap-1 hover:shadow-lg hover:shadow-black ease-in-out duration-300">
      <div className="">
        <h1 className='text-[#455A64] text-[34px] mx-auto w-11/12 font-bold'>{title}</h1>
        <p className="border-b-[1px] w-11/12 mx-auto border-[#888888] opacity-10"></p>
        <h5 className='text-[20px] mt-3 mx-auto w-11/12'>{subtitle}</h5>
        <p className={`text-[14px]  mt-3 mx-auto w-11/12` }>{text}</p>
      </div>

      <div>
        {children}
      </div>
    </div>
  )
}

export default MainCard;