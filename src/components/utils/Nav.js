import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const setActive = e => {
    e.target.classList.add('active')
  }

  return (
    <nav className='container nav gap'>
      <NavLink
        to='/home'
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
