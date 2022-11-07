import React, { useState } from 'react'

const ColorPicker = () => {
  const [active, setActive] = useState('o')
  const colors = ['w', 'o', 'r', 'p', 'g']

  return (
    <div className='color-picker'>
      <h3 className='title'>choose color</h3>
      <div className='colors'>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color ${color} ${active === color ? 'active' : ''}`}
            onClick={() => setActive(color)}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
