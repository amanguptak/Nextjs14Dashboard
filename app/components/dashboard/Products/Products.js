import React from 'react'
import Link from 'next/link'
import Search from '../Search/Search'
import Pageintaion from '../Pageniaton/Pageintaion'
const Products = () => {
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
                <td className='p-3'>Title</td>
                <td className='p-3'>About</td>
                <td className='p-3'>Price</td>
                <td className='p-3'>Created At</td>
                <td className='p-3'>Stock</td>
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
            <span>Itachi T-shirts </span>
            </td>
                <td className='p-3'>Best quality product by AnimeUchicha</td>
                <td className='p-3'>600Rs</td>
                <td className='p-3'>
                 <span>10/12/2023</span>
                </td>
                <td className='p-3'>
                 <span className='text-green-400'>20</span>
                </td>
                <td className='[&_button]:rounded-sm [&_button]:px-2 [&_button]:p-1 [&_button]:mx-1 [&_button]:border-none'>
                  <button className=' bg-green-400 hover:bg-green-600'>View</button>
                  <button className=' bg-red-500 hover:bg-red-600'>Delete</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        
       <Pageintaion/>
    </div>
  )
}

export default Products