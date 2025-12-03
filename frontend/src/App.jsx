import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Support from './pages/Support'
import Pricing from './pages/Pricing'
import Products from './pages/Products'
import About from './pages/About'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import NotFound from './components/NotFound'
function App() {
  return (

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<Support />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
