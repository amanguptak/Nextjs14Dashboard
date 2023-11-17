import React from 'react'

const Transaction = () => {
  return (
    <div className='bg-indigo-900 p-3 rounded-md mt-3'>

    <div className="title text-2xl mb-3 font-light">Latest Transaction</div>
      <table className="data w-full table-auto [&_td]:p-3">
        <thead>
          <tr className='font-bold'>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className='text-sm'>
          <tr className=''>
            <td className='flex items-center gap-2'> <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>Aman Gupta </span>
            </td>
            <td className=''><span className='bg-green-600 rounded-lg p-1  text-sm'>Done</span></td>
            <td>2020-01-01</td>
            <td>100</td>
          </tr>
          <tr>
          <td className='flex items-center gap-2'> <img
              className="h-6 w-6 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>Aman Gupta </span>
            </td>
            <td className=''><span className='bg-orange-500 rounded-lg p-1 text-sm'>Pending</span></td>
            <td>2020-01-01</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction