import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../asset/images/logo.png'
import Burger from '../asset/images/menu.png'

const Navbar = () => {
  let lastScroll = 0
  const [isMobile, setIsMobile] = useState(false)
  const [isScroll, setIsScroll] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const handleScroll = () => {
    const currentTop = window.scrollY

    console.log(currentTop)

    if (currentTop <= 0) {
      setIsScroll(true)
    }
    if (currentTop > lastScroll) {
      setIsScroll(false)
    }
    if (currentTop < lastScroll) {
      setIsScroll(true)
    }

    lastScroll = currentTop
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarContainer
      className={`${isScroll ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <LogoImg src={Logo} />
      <NavLinks>
        <ul
          className={`${
            isMobile ? `${isActive ? 'translate-x-0' : 'translate-x-full'}` : ''
          }`}
        >
          <li>
            <a href='#'>Game Controller</a>
          </li>
          <li>
            <a href='#'>VR Accessories</a>
          </li>
          <li>
            <a href='#'>Media Remote</a>
          </li>
          <li>
            <a href='#'>Others</a>
          </li>
        </ul>
      </NavLinks>
      <MenuImg src={Burger} onClick={() => setIsActive(!isActive)} />
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  ${tw`
    sticky
    top-0
    flex
    items-center
    py-4
    px-4
    w-full
    bg-white
    shadow-md
    z-10
    transition-all
    duration-75
    ease-in-out
  `}
`

const LogoImg = styled.img`
  ${tw`
    w-12
    cursor-pointer
    mx-4
  `}
`

const NavLinks = styled.nav`
  ${tw`
    flex-1
    text-right
    z-10
  `}

  ul {
    transition: all 0.5s ease-in-out;
    ${tw`
        absolute
        top-[68px]
        right-0
        w-full
        h-screen
        bg-gradient-to-b
        from-pink-500
        to-red-400
        md:w-auto
        md:h-auto
        md:relative
        md:top-0
        md:bg-none
      `}
    li {
      ${tw`
        block
        my-8
        md:my-0
        md:inline-block
        mr-8
        `}

      a {
        ${tw`
            text-white
            md:text-black
            font-semibold
            hover:text-indigo-400
        `}
      }
    }
  }
`

const MenuImg = styled.img`
  ${tw`
    w-6
    cursor-pointer
    md:hidden
  `}
`

export default Navbar
