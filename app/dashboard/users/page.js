import React from 'react'
import User from '@/app/components/dashboard/Users/User'
import { getAllUsers } from '@/app/lib/data'
const Users = async() => {
  const users = await getAllUsers()

  return (
    <div><User Users={users}/></div>
  )
}

export default Users