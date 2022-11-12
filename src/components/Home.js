import React from 'react'
import Card from './utils/Card'
import sneak from '../assets/sneakers/sneak1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <div className='home'>
        <div className='content'>
          <h2 className='title'>
            The most <span>beautiful</span> and <span>high-quality</span> sneakers <br />
            in the whole world
          </h2>
          <h3 className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora
            expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum
            optio?
          </h3>
          <Link to='/shop'>
            <button className='btn'>Explore Now</button>
          </Link>
        </div>
        <div className='preview'>
          <Card title='Nike Dunk Low Sesame' price={300} image={sneak} />
        </div>
      </div>
    </main>
  )
}

export default Home
