import React from 'react'
import User from '@/app/components/dashboard/Users/User'
import { getAllUsers } from '@/app/lib/data'
const Users = async() => {
  const users = await getAllUsers()
  console.log(users)
  return (
    <div><User/></div>
  )
}

export default Users