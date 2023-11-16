import React from 'react'
import Image from 'next/image'
const Card = () => {
  return (
    <div className="container rounded-[10px] hover:bg-indigo-900  p-5 cursor-pointer text-sm leading-1 ">
        <div className="texts flex flex-col gap-1">
   
            <span>Total User</span>
            <span className="style">10.273</span>
           <span className=''> 
           <span className="number text-green-600 mr-1">
                12%
            </span>
            <span>more than previous</span></span>
        </div>
    </div>
  )
}

export default Card