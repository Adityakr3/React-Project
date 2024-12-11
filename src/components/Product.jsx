import React from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
 let data = useParams()
  return (
    <div>
        <h1>THIS IS PRODUCT PAGE</h1>
        {data.id}
    </div>
  )
}

export default Product
