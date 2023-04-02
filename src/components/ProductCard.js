import React from 'react'

import './ProductCard.css'

export const ProductCard = ({product}) => {

  const {name,price,image} = product;

  return (
    <div className='productCard'>
      <img src={image} alt=''/>
      <p className='name'>{name}</p>
      <div className='row'>
        <p>$ {price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  )
}
