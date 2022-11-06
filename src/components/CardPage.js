import React from 'react'
import { useParams } from 'react-router-dom'
import { mainSneakers, otherSneakers } from '../data/sneakers'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Minus } from '../assets/minus.svg'

const CardPage = () => {
  const { title } = useParams()
  const allSneakers = [...mainSneakers, ...otherSneakers]
  const sneaker = allSneakers.find(sneaker => sneaker.title === title)

  return (
    <main>
      <div className='card-page'>
        <img src={sneaker.image} alt='' className='image' />
        <div className='content'>
          <div className='about'>
            <h2 className='title'>{sneaker.title}</h2>
            <div className='price'>${sneaker.price}</div>
          </div>
          <div className='desctiption'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum
            explicabo veniam maxime earum sunt praesentium debitis optio eaque deleniti!
            Quia aspernatur minima illo laboriosam.
          </div>
          <div className='color-picker'></div>
          <div className='size-picker'></div>
          <div className='buttons'>
            <div className='amount-btn'>
              <Minus />
              0
              <Plus />
            </div>
            <div className='cart-btn'>add to cart</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardPage
