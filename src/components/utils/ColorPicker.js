import React from 'react'

const ColorPicker = () => {
  return (
    <div className='color-picker'>
      <h3 className='title'>choose color</h3>
      <div className='colors'>
        <div className='color w'></div>
        <div className='color o active'></div>
        <div className='color r'></div>
        <div className='color b'></div>
        <div className='color g'></div>
      </div>
    </div>
  )
}

export default ColorPicker
