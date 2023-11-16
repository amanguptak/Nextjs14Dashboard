"use client"
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Menu = ({item}) => {
    const pathName = usePathname()
  return (
    <Link href={item.path} className={`flex items-center gap-10 m-2 rounded-[8px] p-3 hover:bg-orange-200 ${pathName === item.path && "bg-orange-200 text-gray-800"}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}

export default Menu