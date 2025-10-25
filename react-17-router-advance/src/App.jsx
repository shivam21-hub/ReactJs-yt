import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Home } from 'lucide-react'
import Product from './pages/Product'

const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar/>
     
      <Footer/>
    </div>
  )
}

export default App
