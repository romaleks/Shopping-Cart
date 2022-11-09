import React from 'react'
import Nav from './utils/Nav'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Cart } from '../assets/cart.svg'
import { ReactComponent as Magnify } from '../assets/magnify.svg'

const Header = ({ toggleCart }) => {
  return (
    <header>
      <div className='container'>
        <Logo className='icon' />
        <h1 className='title'>SneakShop</h1>
      </div>
      <Nav />
      <div className='container gap'>
        <div className='cart' onClick={toggleCart}>
          <Cart className='icon' />
        </div>
        <Magnify className='icon' />
        <button className='btn'>Log in</button>
      </div>
    </header>
  )
}

export default Header
