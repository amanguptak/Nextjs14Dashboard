import React from 'react'
import Card from '../components/dashboard/Card/Card'
import Chart from '../components/dashboard/Chart/Chart'
import Transaction from '../components/dashboard/Transction/Transaction'
const dashboard = () => {
  return (
    <div className='grid lg:grid-cols-12  mt-5 gap-3 '>
    <div className="main col-span-9 p-3 ">
    <div className='flex justify-between gap-3'>
  <Card/>
  <Card/>
  <Card/>
  </div>

  <Transaction/>

  <Chart/>
    </div>
    <div className='col-span-3  h-screen p-3'>
      Rightbar
    </div>
 
     
    
    </div>
  )
}

export default dashboard