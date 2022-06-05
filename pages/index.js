import React from 'react'
import Home from '../components/home/Home'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

const index = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default index