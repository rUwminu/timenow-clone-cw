import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../../Assets/Logo.svg'
import MenuIcon from '../../Assets/Menu.svg'

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

  useEffect(() => {
    handleCheckWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavContainer
      className={`${isScrollTop ? 'py-10' : 'py-2 bg-white shadow-md'}`}
    >
      <NavInner>
        <NavLeft>
          <img
            onClick={() => history.push('/timenow-clone-cw')}
            src={Logo}
            alt=''
          />
          <NavLink to='/timenow-clone-cw' className={`${isMobile && 'hidden'}`}>
            Features
          </NavLink>
          <NavLink
            to='/timenow-clone-cw/plan'
            className={`${isMobile && 'hidden'}`}
          >
            Pricing
          </NavLink>
        </NavLeft>
        <NavRight>
          <Button className={`${isMobile && 'hidden'}`}>
            Start Scheduling
          </Button>
          <img
            onClick={() => setIsActive(!isActive)}
            className={`${isMobile ? 'inline-flex' : 'hidden'}`}
            src={MenuIcon}
            alt=''
          />
        </NavRight>
        {isMobile && (
          <>
            <ActiveBg
              className={`${isActive ? 'opacity-50' : 'opacity-0 hidden'}`}
            ></ActiveBg>
            <AbsoluteNav
              className={`${
                isActive ? 'translate-x-0 shadow-md' : 'translate-x-full'
              }`}
            >
              <NavLink to='/timenow-clone-cw'>Features</NavLink>
              <NavLink to='/timenow-clone-cw/plan'>Pricing</NavLink>
              <Button>Start Scheduling</Button>
            </AbsoluteNav>
          </>
        )}
      </NavInner>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  ${tw`
    w-full
    fixed
    top-0
    left-0
    px-6
    lg:px-0
    transition-all
    duration-500
    ease-in-out
    z-10
  `}
`

const NavInner = styled.div`
  ${tw`
    w-full
    md:max-w-6xl
    mx-auto
    flex
    items-center
    justify-between
  `}
`

const NavLeft = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
        w-full
        h-full
        mr-16
        cursor-pointer
        z-30
      `}
  }
`

const NavRight = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
        w-full
        h-full
        py-3
        px-3
        hover:bg-gray-200
        rounded-md
        cursor-pointer
        z-30
    `}
  }
`

const NavLink = styled(Link)`
  ${tw`
    mr-10
    font-semibold
    cursor-pointer
  `}
`

const Button = styled.button`
  ${tw`
    py-3
    px-6
    font-semibold
    text-white
    bg-blue-900
    rounded-md
    transition-all
    duration-200
    ease-in-out
    hover:bg-blue-800
    hover:shadow-md
  `}
`

const AbsoluteNav = styled.div`
  ${tw`
    absolute
    top-0
    right-0
    pt-24
    px-10
    w-[70%]
    max-w-sm
    h-screen
    bg-white
    flex
    flex-col
    items-center
    transition-all
    duration-500
    ease-in-out
    z-20
  `}

  a {
    ${tw`
        py-3
        mr-0
        mb-4
        w-full
        text-center
        rounded-md
        hover:bg-gray-200
    `}
  }

  button {
    ${tw`
        w-full
    `}
  }
`

const ActiveBg = styled.div`
  .bg-top {
    z-index: 1;
  }

  .bg-bottom {
    z-index: -1;
  }

  ${tw`
    absolute
    top-0
    right-0
    h-screen
    w-screen
    bg-gray-200
    transition-all
    duration-500
    ease-in-out
  `}
`

export default Navbar
