import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-scroll'

import MenuIcon from '../../Assets/Menu.svg'

const Navbar = () => {
  let lastScroll = 0
  const [isActive, setIsActive] = useState(false)
  const [isScroll, setIsScroll] = useState(true)
  const [isScrollTop, setIsScrollTop] = useState(true)
  const [isMobile, setIsMobile] = useState(null)
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
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleLogin = () => {
    history.push('/fiber-clone-cw/user')
  }

  return (
    <Container
      className={`${isScrollTop ? 'py-10' : 'bg-white py-3 shadow-md'}`}
    >
      <NavContainer>
        <Link
          to='home'
          activeClass='active'
          smooth={true}
          duration={1000}
          className='md:text-lg xl:text-xl font-bold z-30 cursor-pointer'
        >
          Fiber
        </Link>
        {isMobile ? (
          <>
            <MobileSidebar
              className={`${isActive ? 'translate-x-0' : 'translate-x-full'}`}
            >
              <LinksContainer className='flex flex-col justify-between items-center'>
                <Link
                  onClick={() => setIsActive(!isActive)}
                  className='mb-4 w-40'
                  to='card'
                  activeClass='active'
                  offset={-100}
                  smooth={true}
                  duration={1000}
                >
                  Community
                </Link>
                <Link
                  onClick={() => setIsActive(!isActive)}
                  className='mb-4 w-40'
                  to='price'
                  activeClass='active'
                  offset={-100}
                  smooth={true}
                  duration={1000}
                >
                  Pricing
                </Link>
                <Link
                  onClick={() => setIsActive(!isActive)}
                  className='mb-4 w-40'
                  to='feature'
                  activeClass='active'
                  offset={-145}
                  smooth={true}
                  duration={1000}
                >
                  Feature
                </Link>
              </LinksContainer>
              <SignInUpContainer className='flex flex-col justify-between items-center'>
                <a onClick={handleLogin} className='mb-6 w-40' href='/user'>
                  Sign in
                </a>
                <button onClick={handleLogin} className='w-40'>
                  Sign Up
                </button>
              </SignInUpContainer>
            </MobileSidebar>
            <Icon onClick={() => setIsActive(!isActive)} src={MenuIcon} />
          </>
        ) : (
          <>
            <LinksContainer>
              <Link to='card' activeClass='active' smooth={true} duration={700}>
                Community
              </Link>
              <Link
                to='price'
                activeClass='active'
                offset={-100}
                smooth={true}
                duration={700}
              >
                Pricing
              </Link>
              <Link
                to='feature'
                activeClass='active'
                offset={-145}
                smooth={true}
                duration={700}
              >
                Feature
              </Link>
            </LinksContainer>
            <SignInUpContainer className='flex justify-center items-center'>
              <a href='#' onClick={handleLogin}>
                Sign in
              </a>
              <button onClick={handleLogin}>Sign Up</button>
            </SignInUpContainer>
          </>
        )}
      </NavContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    transition-all
    duration-700
    ease-in-out
    z-10
  `}
`
const NavContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    px-4
    md:px-0
    w-full
    md:max-w-6xl
    mx-auto
  `}

  h1 {
    ${tw`
        md:text-lg
        xl:text-xl
        font-bold
        z-30
    `}
  }
`

const LinksContainer = styled.div`
  a {
    ${tw`
        py-2
        px-4
        text-center
        xl:text-lg
        font-semibold
        hover:bg-gray-200
        rounded-md
        cursor-pointer
    `}
  }
`

const SignInUpContainer = styled.div`
  a {
    ${tw`
        py-2
        px-4
        mr-2
        text-center
        xl:text-lg
        font-semibold
        hover:bg-gray-200
        rounded-md
        cursor-pointer
    `}
  }
  button {
    ${tw`
        py-2
        px-6
        mr-2
        text-white
        xl:text-lg
        font-semibold
        bg-indigo-700
        hover:bg-indigo-400
        rounded-md
    `}
  }
`

const MobileSidebar = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    flex
    flex-col
    justify-center
    items-center
    w-full
    h-screen
    bg-white
    transition-all
    duration-700
    ease-in-out
    z-20
  `}
`

const Icon = styled.img`
  ${tw`
    px-3
    py-3
    rounded-md
    cursor-pointer
    hover:bg-gray-200
    z-30
  `}
`

export default Navbar
