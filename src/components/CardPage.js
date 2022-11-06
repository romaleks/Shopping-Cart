import React from 'react'
import { useParams } from 'react-router-dom'
import { mainSneakers, otherSneakers } from '../data/sneakers'

const CardPage = () => {
  const { title } = useParams()
  const allSneakers = [...mainSneakers, ...otherSneakers]
  const sneaker = mainSneakers.find(sneaker => (sneaker.title = title))

  return (
    <main>
      <h2>{sneaker.title}</h2>
      <img src={sneaker.image} alt='' />
    </main>
  )
}

export default CardPage
