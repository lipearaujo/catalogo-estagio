"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  id: string;
  name: string;
  href: string;
  subHref?: string[] | any;
  icon: any;
  color: string;
  tooltip: string;
};

const SidebarItem = ({
  id,
  name,
  href,
  subHref,
  icon,
  color,
  tooltip,
}: Props) => {
  const currentRoute = usePathname();

  const linkStyle = `max-[1023px]:gap-5 max-[1023px]:text-black w-full z-10 text-white tracking-wide flex py-3 pr-[1.25rem] text-sm justify-center items-center gap-8 text-center hover:opacity-75 hover:text-black hover:font-bold hover:rounded-[9999px] hover:bg-[#ccc] ease-in-out duration-200`;
  const activeLinkStyle = `max-[1023px]:rounded-[9999px] max-[1023px]:gap-5 max-[1023px]:bg-[#fff] w-full tracking-wide flex py-3 pr-[1.25rem] text-sm justify-center items-center gap-8 text-center text-[#000] font-bold rounded-l-[9999px] bg-[#F1F5F9] ease-in-out duration-200`;

  var subRoute = false;

  for (var index in subHref) {
    if (subHref[index] === currentRoute) {
      subRoute = true;
    }
  }

  return (
    <li id={id} key={name} className="mt-2 h-[50px]">
      <Link
        href={href}
        className={`${
          currentRoute === href || subRoute === true
            ? activeLinkStyle
            : linkStyle
        }`}
        title={tooltip}
      >
        <i className=" text-2xl">{icon}</i>
        <p className="w-28 text-left">{name}</p>
      </Link>
      {currentRoute === href || subRoute === true ? (
        <>
          <div
            className="w-[3rem] py-3 relative top-[-71px] right-[-200px] rounded-br-[999px] bg-[#f1f5f9] -z-10"
            id="rounded-border"
          ></div>
          <div
            className={`w-[3rem] py-3 relative top-[-96px] right-[-182px] rounded-br-[999px] ${color} -z-10`}
            id="rounded-border"
          ></div>
          <div
            className="w-[3rem] py-3 relative top-[-49px] right-[-200px] rounded-tr-[999px] bg-[#f1f5f9] -z-10"
            id="rounded-border"
          ></div>
          <div
            className={`w-[3rem] py-3 relative top-[-72px] right-[-182px] rounded-tr-[999px] ${color} -z-10`}
            id="rounded-border"
          ></div>
        </>
      ) : (
        ""
      )}
    </li>
  );
};

export default SidebarItem;
