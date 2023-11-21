import React from 'react'
import Link from 'next/link'
import Search from '../Search/Search'
const User = () => {
    const search="nothing"
  return (
    <div className=' mt-4 p-3 bg-indigo-900 rounded-xl'>
        <div className="top flex items-center justify-between ">
        <Search placeholder="Search for user.."/>
       
            <button className='bg-indigo-600 text-sm rounded-sm p-1 px-2 hover:bg-indigo-800 '> Add New</button>
       
        </div>

        <div className="bottom">
          <table className='w-full mt-2 [&_td]:p-2'>
            <thead>
              <tr>
                <td className='p-3'>Name</td>
                <td className='p-3'>Email</td>
                <td className='p-3'>Role</td>
                <td className='p-3'>Created At</td>
                <td className='p-3'>Action</td>
              </tr>
            </thead>
            <tbody className='[&_td]:text-sm'>
              <tr>
              <td className='flex items-center gap-2'> <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>Aman Gupta </span>
            </td>
                <td className='p-3'>aman@gmail.com</td>
                <td className='p-3'>Admin</td>
                <td className='p-3'>
                 <span>10/12/2023</span>
                </td>
                <td className='[&_button]:rounded-sm [&_button]:px-2 [&_button]:p-1 [&_button]:mx-1 [&_button]:border-none'>
                  <button className=' bg-green-400 hover:bg-green-600'>View</button>
                  <button className=' bg-red-500 hover:bg-red-600'>Delete</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        
        <div className="page mt-3 flex items-center justify-between [&_button]:bg-orange-400 [&_button]:px-2 [&_button]:border-none [&_button]:rounded-sm">
          <button className='hover:bg-orange-600'>Prev</button>
          <button className='hover:bg-orange-600'>Next</button>
        </div>
    </div>
  )
}

export default User