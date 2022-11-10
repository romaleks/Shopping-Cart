import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { mainSneakers, otherSneakers } from '../data/sneakers'
import ColorPicker from './utils/ColorPicker'
import SizePicker from './utils/SizePicker'
import AmountBtn from './utils/AmountBtn'
import { ReactComponent as Arrow } from '../assets/arrow.svg'

const CardPage = ({ addItem }) => {
  const { title } = useParams()
  const allSneakers = [...mainSneakers, ...otherSneakers]
  const { price, image } = allSneakers.find(sneaker => sneaker.title === title)
  const [amount, setAmount] = useState(1)

  return (
    <main>
      <div className='card-page'>
        <img src={image} alt='sneaker' className='image' />
        <div className='content'>
          <div className='about'>
            <h2 className='title'>{title}</h2>
            <div className='price'>${price}</div>
          </div>
          <div className='description'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum
            explicabo veniam maxime earum sunt praesentium debitis optio eaque deleniti!
            Quia aspernatur minima illo laboriosam.
          </div>
          <ColorPicker />
          <SizePicker />
          <div className='buttons'>
            <AmountBtn amount={amount} setAmount={setAmount} />
            <div
              className='cart-btn btn'
              onClick={() => {
                addItem(title, price, amount, image)
                setAmount(1)
              }}
            >
              add to cart
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CardPage
