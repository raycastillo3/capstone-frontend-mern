import {Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
// import { LandingPageImg } from '../components/LandingPageImg'
// import { Category } from '../components/Category'
// import { Gallery } from '../components/Gallery'
// import { Discover } from '../components/Discover'
// import HomePage from '../pages/HomePage'


function App() {

  return (
    <div className='main-container'>    
      {/* <Navbar />  */}
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes> */}
      <Footer />
    </div> 
  )
}

export default App
