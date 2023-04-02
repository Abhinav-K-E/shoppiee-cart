import React from 'react'

import { CardCart } from '../components'

import { useTitle } from '../hooks/useTitle';

export const Cart = () => {

  useTitle('Cart');

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/1001.png"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/1002.png"},
  ];

  return (
    <main>
      <section className='cart'> 
        <h1>My cart items : {products.length}</h1>
        {
          products.map((product) =>(
            <CardCart key={product.id} product={product}/>
          ))
        }
       
      </section>
    </main>
  )
}
