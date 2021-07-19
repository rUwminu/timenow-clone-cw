import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Hamburger from '../../Assets/HamMenu.svg'

const Navbar = () => {
  let lastScroll = 0
  const [isActive, setIsActive] = useState(false)
  const [isScroll, setIsScroll] = useState(true)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    if (currentTop <= 0) {
      setIsScroll(true)
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScroll(false)
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    console.log(isActive)
  }, [])

  return (
    <Container>
      <TopNav className={`${isScroll ? 'translate-y-0' : '-translate-y-full'}`}>
        <div>
          To celebrate Spense's launch, we will be waiving all fees for the
          entire month of April.{'  '}
          <span> You will be receving 100% of the earning</span>
        </div>
      </TopNav>
      <BottomNav
        className={` ${
          isScrollTop
            ? 'translate-y-0 py-6 md:py-14'
            : 'fixed top-0 py-6 md:py-3 bg-white'
        }`}
      >
        <NavItemContainer>
          <Navlogo>spense.</Navlogo>
          <NavLinks
            className={`${
              isMobile
                ? isActive
                  ? 'translate-x-0 bg-gray-50'
                  : 'translate-x-full'
                : ''
            }`}
          >
            <Links>Business</Links>
            <Links>Pricing</Links>
            <Links>Features</Links>
            <Links className='md:hidden'>Login</Links>
            <Button className='md:hidden'>Get Started</Button>
          </NavLinks>
          <NavButtons>
            <Links>Login</Links>
            <Button>Get Started</Button>
          </NavButtons>
          <HamSvg onClick={() => setIsActive(!isActive)} src={Hamburger} />
        </NavItemContainer>
      </BottomNav>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    z-10  
  `}
`

const TopNav = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-full
    bg-black
    text-white
    text-base
    md:text-lg
    font-semibold
    text-center
    px-8
    py-4
    transition-all
    duration-500
    ease-in-out
  `}

  div {
    ${tw`
        flex
        flex-wrap
        justify-center
      `}
  }
`
const BottomNav = styled.div`
  ${tw`
    relative
    w-full
    flex
    justify-center
    items-center
    transition-all
    duration-500
    ease-in-out
  `}
`

const NavItemContainer = styled.div`
  ${tw`
    w-full
    px-4
    md:max-w-6xl
    flex
    justify-between
    items-center
  `}
`

const Navlogo = styled.div`
  ${tw`
    text-lg
    font-bold
    z-30
  `}
`

const NavLinks = styled.div`
  ${tw`
    absolute
    top-0
    right-[0px] 
    h-screen
    w-full
    md:h-auto
    flex
    flex-col
    justify-center
    items-center
    md:w-auto
    md:mt-0
    md:relative
    md:flex-row
    z-20
    transition-all
    duration-1000
    ease-in-out
  `}
`

const Links = styled.div`
  ${tw`
    w-32
    px-4
    py-3
    text-center
    font-semibold
    leading-tight
    hover:border-b-4
    border-black
    mb-2
    md:mx-2
    md:mb-0
    transition-all
    duration-100
    ease-in-out
    cursor-pointer
  `}
`

const NavButtons = styled.div`
  ${tw` 
    hidden
    md:inline-flex
    justify-center
    items-center
  `}
`

const Button = styled.div`
  ${tw`
    w-32
    py-3
    text-center
    text-white
    bg-black
    rounded-md
    hover:bg-gray-800
  `}
`

const HamSvg = styled.img`
  ${tw`
    z-30
    md:hidden
  `}
`

export default Navbar
