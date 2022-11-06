import React, { useState } from 'react'
import Card from './Card'
import { mainSneakers, otherSneakers } from '../../data/sneakers'
import { ReactComponent as Plus } from '../../assets/plus.svg'
import { ReactComponent as Minus } from '../../assets/minus.svg'

const CardsGrid = () => {
  const [sneakers, setSneakers] = useState(mainSneakers)
  const [status, setStatus] = useState('See More')
  const [icon, setIcon] = useState(<Plus />)

  const changeStatus = () => {
    if (status === 'See More') {
      setStatus('See Less')
      setIcon(<Minus />)
      setSneakers([...mainSneakers, ...otherSneakers])
    } else {
      setStatus('See More')
      setIcon(<Plus />)
      setSneakers(mainSneakers)
    }
  }

  return (
    <div className='grid'>
      {sneakers.map((sneaker, index) => {
        return (
          <Card
            key={index}
            index={index + 1}
            title={sneaker.title}
            price={sneaker.price}
            image={sneaker.image}
          />
        )
      })}
      <div className='more' onClick={changeStatus}>
        {status} {icon}
      </div>
    </div>
  )
}

export default CardsGrid
