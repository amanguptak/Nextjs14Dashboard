import React from 'react'
import moment from 'moment';
import Search from '../Search/Search'
import Pageintaion from '../Pageniaton/Pageintaion'
import Link from 'next/link'
const Products = ({Product}) => {
   
  return (
    <div className=' mt-4 p-3 bg-indigo-900 rounded-xl'>
        <div className="top flex items-center justify-between ">
        <Search placeholder="Search for user.."/>
        <Link href="/dashboard/products/addproducts">
            <button className='bg-indigo-600 text-sm rounded-sm p-1 px-2 hover:bg-indigo-800 '> Add New</button>
            </Link>
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
              {
                Product?.map((product ,index) =>(
                  <tr key={index}>
              <td className='flex items-center gap-2'> <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>{product.title} </span>
            </td>
                <td className='p-3'>{product.about}</td>
                <td className='p-3'>{product.price}</td>
                <td className='p-3'>
                 <span>{moment(product.createdAt).format("MMM Do YY")}</span>
                </td>
                <td className='p-3'>
                 <span className='text-green-400'>{product.stock}</span>
                </td>
                <td className='[&_button]:rounded-sm [&_button]:px-2 [&_button]:p-1 [&_button]:mx-1 [&_button]:border-none'>
                  <button className=' bg-green-400 hover:bg-green-600'>View</button>
                  <button className=' bg-red-500 hover:bg-red-600'>Delete</button>
                </td>
              </tr>
                ))
              }
              
            </tbody>
          </table>
        </div>
        
       <Pageintaion/>
    </div>
  )
}

export default Products