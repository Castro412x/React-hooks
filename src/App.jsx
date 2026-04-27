import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TripList from './components/Triplist'
import Destinations from './components/Destination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <TripList></TripList>
      <Destinations></Destinations>

      
    
    </>
  )
}

export default App

