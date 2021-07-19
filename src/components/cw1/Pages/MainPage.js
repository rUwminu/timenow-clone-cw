import React from 'react'

import { Navbar, Hero, InfoSection, Footer } from '../Components'

const MainPage = () => {
  return (
    <div className='flex flex-col  justify-center'>
      <Navbar />
      <Hero />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default MainPage
