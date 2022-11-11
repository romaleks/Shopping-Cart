import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='container nav gap'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
      >
        Home
      </NavLink>
      <NavLink
        to='/shop'
        className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
      >
        Shop
      </NavLink>
      <a href='#' className='nav-item'>
        Contacts
      </a>
    </nav>
  )
}

export default Nav
