import React from 'react'

const Cart = ({ status, items }) => {
  return (
    <div className={`cart ${status ? 'active' : ''}`}>
      <div className='title'>Cart</div>
      <div className='items'>
        {items.map((item, index) => {
          const { title, price, image, amount } = item

          return (
            <div key={index} className='item'>
              <div className='image'>
                <img src={image} alt='' />
                <div className='amount'>{amount}</div>
              </div>
              <div className='info'>
                <div className='item-title'>{title}</div>
                <div className='price'>${price}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='total'>
        <div className='total-title'>Total:</div>
        <div className='total-price'>$1000</div>
      </div>
      <div className='checkout-btn btn'>checkout</div>
    </div>
  )
}

export default Cart
