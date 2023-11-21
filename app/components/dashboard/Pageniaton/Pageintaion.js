import React from 'react'

const Pageintaion = () => {
  return (
    <div>
         <div className="page mt-3 flex items-center justify-between [&_button]:bg-orange-400 [&_button]:px-2 [&_button]:border-none [&_button]:rounded-sm">
          <button className='hover:bg-orange-600'>Prev</button>
          <button className='hover:bg-orange-600'>Next</button>
        </div>
    </div>
  )
}

export default Pageintaion