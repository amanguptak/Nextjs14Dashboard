import React from 'react'

const Search = ({placeholder}) => {
  return (
    <div className='container w-full lg:flex flex-1 items-center rounded-lg'>
        <input className="search border-none p-1 px-2 bg-indigo-700 rounded-lg placeholder-orange-200"  placeholder={placeholder}/>
    </div>
  )
}

export default Search