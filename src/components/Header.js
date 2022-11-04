import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Shop } from '../assets/shop.svg'
import { ReactComponent as Magnify } from '../assets/magnify.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Logo className='icon' />
        <h1 className='title'>SneakShop</h1>
      </div>
      <nav>
        <ul className='container nav gap'>
          <li className='nav-item active'>Home</li>
          <li className='nav-item'>Shop</li>
          <li className='nav-item'>Contacts</li>
        </ul>
      </nav>
      <div className='container gap'>
        <Shop className='icon' />
        <Magnify className='icon' />
        <button className='btn'>Log in</button>
      </div>
    </header>
  )
}

export default Header
