import Link from 'next/link'
import React from 'react'

type Props = {
    id: string, 
    name: string,
    href: string,
    icon: any,
    color?: string
}

const SidebarItem = ({ id, name, href, icon, color }: Props) => {
  return (
    <nav className="w-full ">
        <ul className="list-none p-0">
            <li id={id} key={name}>
                <Link className={`w-full text-white flex py-4 text-sm justify-center items-center gap-8 text-center hover:text-black hover:font-bold hover:opacity-75 hover:rounded-[9999px] hover:bg-[#ccc] ease-in-out duration-200 active:bg-violet-700`} href={href}>
                    <i className='text-2xl'>{icon}</i>
                    <p className='w-28 text-left'>{name}</p>
                </Link>
            </li>    
        </ul>
    </nav>
  )
}

export default SidebarItem