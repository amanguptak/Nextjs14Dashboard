import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import Sidebar from '../components/dashboard/sidebar/Sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <div>
        <Sidebar/>
        </div>
        <div>
        <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default Layout