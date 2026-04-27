import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TripCard from './components/TripCard'
import Experience from './components/experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <TripCard></TripCard>
      <Experience></Experience>
      
    
    </>
  )
}

export default App

