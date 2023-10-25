import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  //tailwind styling used here
  return (
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-700'> 
        <AddToCart />
    </div>
  )
}

export default ProductCard