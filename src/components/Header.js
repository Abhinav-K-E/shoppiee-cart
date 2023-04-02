import React from 'react'

import { Link , NavLink } from 'react-router-dom'

import './Header.css'

export const Header = () => {
  return (
    <header>
      <Link>
        <span>Shopping Cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/cart' className='link' > Cart</NavLink>
      </nav>
      <Link to='/cart' className='items'>
        <span>Cart : 2</span>
      </Link>
    </header>
  )
}
