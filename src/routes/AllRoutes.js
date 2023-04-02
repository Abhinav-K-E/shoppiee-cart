import React from 'react'

import { Route  , Routes} from 'react-router-dom';

import {Home , Cart} from '../pages'

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}
