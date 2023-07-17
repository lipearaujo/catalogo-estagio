"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  id: string;
  name: string;
  href: string;
  icon: any;
  //color: string;
  tooltip: string;
};

const SidebarItem = ({ id, name, href, icon, tooltip }: Props) => {
  const currentRoute = usePathname();
  const linkStyle = `w-full text-white tracking-wide flex py-3 pr-[1.25rem] text-sm justify-center items-center gap-8 text-center hover:opacity-75 hover:text-black hover:font-bold  hover:rounded-l-[9999px] hover:bg-[#ccc] ease-in-out duration-200`;
  const activeLinkStyle = `w-full tracking-wide flex py-3 pr-[1.25rem] text-sm justify-center items-center gap-8 text-center text-[#000] font-bold rounded-l-[9999px] bg-[#F1F5F9] ease-in-out duration-200`;

  return (
    <li id={id} key={name} className="mt-2">
      <Link
        href={href}
        className={currentRoute === href ? activeLinkStyle : linkStyle}
        title={tooltip}
      >
        <i className="text-2xl">{icon}</i>
        <p className="w-28 text-left">{name}</p>
      </Link>
      {/* <div className="w-[30px] py-3 relative top-[-48px] right-[-200px] bg-red-500">...</div> */}
    </li>
  );
};

export default SidebarItem;
