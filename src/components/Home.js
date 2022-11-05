import React from 'react'
import Card from './card/Card'
import sneak from '../assets/sneak1.png'

const Home = () => {
  return (
    <main className='home'>
      <div className='content'>
        <h2 className='title'>
          The most <span>beautifull</span> and <span>high-quality</span> sneackers <br />
          in the whole wolrd
        </h2>
        <h3 className='subtitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora
          expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum
          optio?
        </h3>
        <button className='btn'>Explore Now</button>
      </div>
      <div className='preview'>
        <Card title='Nike Dunk Low Sesame' price={300} image={sneak} />
      </div>
    </main>
  )
}

export default Home
