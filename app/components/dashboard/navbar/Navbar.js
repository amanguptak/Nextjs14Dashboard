"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";


const Navbar = () => {
  const pathName= usePathname()
  return (
    <div className='bg-indigo-800 p-4 rounded-[10px] flex justify-between items-center'>
      <div>
      <p className='capitalize '>{pathName.split("/").pop()}</p>
  
      </div>
      <div className="flex items-center  lg:gap-2">
        <div className="flex items-center rounded-[10px] bg-indigo-300 p-1">
          <MdSearch  className='mx-1'/>
          <input type="text" placeholder="Search..." className=" focus:border-none bg-transparent border-none w-[50%] lg:w-[100%]" />
        </div>
        <div className="flex lg:gap-3">
          <MdOutlineChat size={20}  />
          <MdNotifications size={20}   />
          <MdPublic size={20}  />
        </div>
      </div>
    </div>
  )
}

export default Navbar