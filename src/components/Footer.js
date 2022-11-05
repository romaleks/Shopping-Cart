import React from 'react'
import { ReactComponent as Github } from '../assets/github.svg'

function Footer() {
  return (
    <footer className='footer'>
      Copyright © 2022 romaleks
      <a href='https://github.com/romaleks' target='_blank' rel='noreferrer'>
        <Github className='icon' />
      </a>
    </footer>
  )
}

export default Footer
