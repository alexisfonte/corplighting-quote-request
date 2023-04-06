import React from 'react'
import HomeNav from '../components/HomeNav'
import Hero from '../components/Hero'
import GetStarted from '../components/GetStarted'
import Nav from '../components/Nav'


function Home() {
  return (
    <div className=''>
      <Nav/>
      <HomeNav/>
      <Hero/>
      <GetStarted/>
    </div>
    
  )
}

export default Home