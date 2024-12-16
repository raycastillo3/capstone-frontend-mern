import { useState } from 'react'
import './App.css'
import { Navbar } from '../components/Navbar'
import { LandingPageImg } from '../components/LandingPageImg'
import { Category } from '../components/Category'
import { Gallery } from '../components/Gallery'
import { Footer } from '../components/Footer'


function App() {

  return (
    <div className='container'>    
      <Navbar /> 
      <LandingPageImg />
      <Gallery />
      <Category />
      <Footer />
    </div>
  )
}

export default App
