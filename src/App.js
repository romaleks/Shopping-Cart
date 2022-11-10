import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Footer from './components/Footer'
import CardPage from './components/CardPage'
import Cart from './components/Cart'

const App = () => {
  const [cartStatus, setCartStatus] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const toggleCart = () => {
    if (!cartStatus) setCartStatus(true)
    else setCartStatus(false)
  }

  const addItem = (title, price, amount, image) => {
    const existingItem = cartItems.findIndex(item => item.title === title)

    if (existingItem !== -1) {
      setCartItems(prevState => {
        prevState[existingItem].amount += amount
        return [...prevState]
      })
    } else {
      const newItem = {
        title,
        amount,
        price,
        image,
      }
      setCartItems(prevState => [...prevState, newItem])
    }
  }

  return (
    <div className='App'>
      <Router>
        <Header toggleCart={toggleCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:title' element={<CardPage addItem={addItem} />} />
        </Routes>
        <Cart status={cartStatus} closeCart={toggleCart} items={cartItems} />
        <Footer />
      </Router>
    </div>
  )
}

export default App
