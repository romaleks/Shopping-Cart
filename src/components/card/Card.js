import React from 'react'

const Card = ({ title, price, image }) => {
  return (
    <div className='card'>
      <img src={image} alt='' className='image' />
      <div className='about'>
        <div className='title'>{title}</div>
        <div className='price'>${price}</div>
      </div>
    </div>
  )
}

export default Card
