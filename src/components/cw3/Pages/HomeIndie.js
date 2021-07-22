import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import { Navbar, Hero, Info, Footer } from '../Components/index'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Footer />
    </div>
  )
}

export default Home
