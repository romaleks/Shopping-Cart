import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className='container nav gap'>
        <Link to='/'>
          <li className='nav-item active'>Home</li>
        </Link>
        <Link to='/shop'>
          <li className='nav-item'>Shop</li>
        </Link>
        <li className='nav-item'>Contacts</li>
      </ul>
    </nav>
  )
}

export default Nav
