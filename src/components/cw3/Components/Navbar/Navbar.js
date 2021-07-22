import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'

import LogoImg from '../../Assets/Logo.svg'
import BurgerImg from '../../Assets/Menu.svg'

const Navbar = () => {
  let lastScroll = 0

  const [isActive, setIsActive] = useState(false)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState()
  const history = useHistory()

  const handleCheckWidth = () => {
    let windowWidth = window.innerWidth

    console.log(windowWidth)

    if (windowWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

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
      setIsScrollTop(true)
    }
    if (currentTop > lastScroll) {
      setIsScrollTop(false)
    }

    lastScroll = currentTop
  }

  const handleHome = () => {
    history.push('/indiebrew-clone-cw')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    history.push('/indiebrew-clone-cw/user')
  }

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavbarMain
      className={`${isScrollTop ? 'py-12' : 'py-3 bg-white shadow-md'}`}
    >
      <NavContainer>
        <img onClick={handleHome} src={LogoImg} alt='' />
        {isMobile ? (
          <>
            <AbsoluteNav
              className={`${isActive ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <Link href='#' className='w-full'>
                Pricing
              </Link>
              <Link href='#' className='w-full'>
                Support
              </Link>
              <Button onClick={(e) => handleLogin(e)}>
                <span className='bold'>Get Started -</span>{' '}
                <span className='thin'>it's free</span>
              </Button>
            </AbsoluteNav>
            <img
              onClick={() => setIsActive(!isActive)}
              className='cursor-pointer py-3 px-3 hover:bg-gray-100 rounded-md'
              src={BurgerImg}
              alt=''
            />
          </>
        ) : (
          <NavLinks>
            <Link href='#'>Pricing</Link>
            <Link href='#'>Support</Link>
            <Button onClick={(e) => handleLogin(e)}>
              <span className='bold'>Get Started -</span>{' '}
              <span className='thin'>it's free</span>
            </Button>
          </NavLinks>
        )}
      </NavContainer>
    </NavbarMain>
  )
}

const NavbarMain = styled.div`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    transition-all
    duration-1000
    ease-in-out
  `}
`

const NavContainer = styled.div`
  ${tw`
    px-6
    lg:px-0
    mx-auto
    w-full
    max-w-6xl
    flex
    items-center
    justify-between
  `}

  img {
    ${tw`
      cursor-pointer
      z-30
    `}
  }
`

const NavLinks = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}
`

const Link = styled.a`
  ${tw`
    mb-4
    md:mb-0
    md:mr-8
    py-2
    text-center
    font-semibold
    cursor-pointer
    hover:px-8
    hover:bg-gray-100
    rounded-md
    transition-all
    duration-200
    ease-in-out
  `}
`

const Button = styled.button`
  ${tw`
    w-full
    py-2
    px-5
    text-white
    bg-indigo-500
    hover:bg-indigo-600
    focus:bg-indigo-700
    hover:shadow-md
    transition-all
    duration-200
    ease-in-out
    rounded-md
  `}

  .bold {
    ${tw`
      font-semibold
    `}
  }

  .thin {
    ${tw`
      text-gray-100
    `}
  }
`

const AbsoluteNav = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    h-screen
    w-full
    bg-white
    px-20
    flex
    flex-col
    items-center
    justify-center
    transition-all
    duration-1000
    ease-in-out
    z-20
  `}
`

export default Navbar
