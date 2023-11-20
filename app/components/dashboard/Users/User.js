import React from 'react'
import Link from 'next/link'
import Search from '../Search/Search'
const User = () => {
    const search="nothing"
  return (
    <div>
        <div className="top flex items-center justify-between mt-3">
        <Search placeholder="Search for user.."/>
       
            <button className='bg-indigo-600 rounded-lg p-1 px-2 hover:bg-indigo-500 text-sm '> Add New</button>
       
        </div>
        
    </div>
  )
}

export default User