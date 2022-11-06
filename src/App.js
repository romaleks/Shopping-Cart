import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import Footer from './components/Footer'
import CardPage from './components/CardPage'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:title' element={<CardPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
