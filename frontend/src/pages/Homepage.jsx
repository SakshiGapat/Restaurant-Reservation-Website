import React from 'react'
import Hero from '../components/Hero'
import Menu from '../Components/Menu'
import ReservationForm from '../Components/ReservationForm'

const Homepage = () => {
  return (
    <div>
      <div>
        <Hero />
        <Menu />
        <ReservationForm />
      </div>
    </div>
  )
}

export default Homepage