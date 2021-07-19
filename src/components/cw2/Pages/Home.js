import React from 'react'

import { Hero, Info, Navbar, Footer } from '../Components'

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </div>
  )
}

export default Home
