import React from 'react'
import Hero from './components/Hero'
import PropertyDetails from './components/PropertyDetails'
import Availability from './components/Availability'
import About from './components/About'
import Reviews from './components/Reviews'
import Policies from './components/Policies'
import Suggestions from './components/Suggestions'

const homapage = () => {
  return (
    <div>
      <Hero />
      <PropertyDetails />
      <Availability />
      <About />
      <Reviews />
      <Policies />
      <Suggestions />
    </div>
  )
}

export default homapage
