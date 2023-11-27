import React from 'react'
import Products from '@/app/components/dashboard/Products/Products'
import { getAllProducts } from '@/app/lib/data'
const products = async() => {
  const products = await getAllProducts()
  return (
    <div><Products Product={products}/></div>
  )
}

export default products