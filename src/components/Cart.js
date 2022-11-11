import React from 'react'

const Cart = ({ status, closeCart, items }) => {
  const computeTotal = () => {
    return items.reduce(
      (currentPrice, item) => currentPrice + item.price * item.amount,
      0
    )
  }

  return (
    <>
      <div className={`overlay ${status ? 'active' : ''}`} onClick={closeCart}></div>
      <div className={`cart ${status ? 'active' : ''}`}>
        <div className='close-btn' onClick={closeCart}></div>
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
          <div className='total-price'>${computeTotal()}</div>
        </div>
        <div className='checkout-btn btn'>checkout</div>
      </div>
    </>
  )
}

export default Cart
