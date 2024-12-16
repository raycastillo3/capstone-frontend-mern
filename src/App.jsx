import { useState } from 'react'
import './App.css'
import { Navbar } from '../components/Navbar'
import { LandingImage } from '../components/LandingImage'
import { Category } from '../components/Category'
import { Gallery } from '../components/Gallery'
import { Footer } from '../components/Footer'


function App() {

  return (
    <>    
      <Navbar /> 
      <LandingImage />
      <Gallery />
      <Category />
      <Footer />
    </>
  )
}

export default App
