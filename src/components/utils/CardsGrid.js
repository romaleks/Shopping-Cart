import React from 'react'
import Card from './Card'
import sneak1 from '../../assets/sneakers/sneak1.png'
import sneak2 from '../../assets/sneakers/sneak2.png'
import sneak3 from '../../assets/sneakers/sneak3.png'
import sneak4 from '../../assets/sneakers/sneak4.png'
import sneak5 from '../../assets/sneakers/sneak5.png'
import sneak6 from '../../assets/sneakers/sneak6.png'
import sneak7 from '../../assets/sneakers/sneak7.png'
import sneak8 from '../../assets/sneakers/sneak8.png'
import sneak9 from '../../assets/sneakers/sneak9.png'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'

const CardsGrid = () => {
  return (
    <div className='grid'>
      <Card title='Nike Dunk Low Sesame' price={300} image={sneak1} />
      <Card title='Nike Dunk High Lakers' price={180} image={sneak5} />
      <Card title='Nike Dunk Low Patent Halloween' price={140} image={sneak3} />
      <Card title='Nike Air Max 90 Flyleather Ruohan' price={235} image={sneak4} />
      <Card title='Air Jordan 1 Low SE Red Quilt' price={280} image={sneak8} />
      <Card title='Nike Dunk Low Arizona State' price={180} image={sneak2} />
      {/* <Card title='Nike Dunk High White Green' price={165} image={sneak6} />
      <Card title='Air Jordan 1 Low SE Paint Drip' price={405} image={sneak7} />
      <Card title='Air Jordan 1 High OG Heritage' price={200} image={sneak9} /> */}
      <div className='more'>
        See More <Arrow />
      </div>
    </div>
  )
}

export default CardsGrid
