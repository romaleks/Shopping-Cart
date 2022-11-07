import React, { useState } from 'react'

const SizePicker = () => {
  const [active, setActive] = useState(42)
  const sizes = [39, 40, 41, 42, 43, 44, 45]

  return (
    <div className='size-picker'>
      <h3 className='title'>choose size</h3>
      <div className='sizes'>
        {sizes.map((size, index) => (
          <div
            key={index}
            className={`size ${active === size && 'active'}`}
            onClick={() => setActive(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SizePicker
