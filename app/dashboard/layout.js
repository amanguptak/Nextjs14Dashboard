import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import Sidebar from '../components/dashboard/sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div className='grid grid-cols-12 md:grid-cols-12 lg:grid-cols-12  text-white bg-indigo-800 h-full'>
        <div className=' bg-orange-400 p-5 col-span-12 md:col-span-3 lg:col-span-3'>
        <Sidebar/>
        </div>
        <div className='p-5 col-span-12 md:col-span-3 lg:col-span-9 '>
        <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout