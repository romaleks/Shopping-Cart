import React from 'react'
import Nav from './utils/Nav'
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
      <Nav />
      <div className='container gap'>
        <Shop className='icon' />
        <Magnify className='icon' />
        <button className='btn'>Log in</button>
      </div>
    </header>
  )
}

export default Header
