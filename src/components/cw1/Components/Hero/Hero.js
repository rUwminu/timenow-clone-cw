import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import HeroImg from '../../Assets/Hero.png'
import Checkmark from '../../Assets/Checkmark.svg'

const Hero = () => {
  let lastScroll = 0
  const [isScroll, setIsScroll] = useState(true)

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
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <SectionContainer className={`${isScroll ? 'mt-18' : 'mt-0'}`}>
      <FlexContainer>
        <HeroImageContainer>
          <HeroImage>
            <img src={HeroImg} alt='' />
          </HeroImage>
          <HeroImageCard>
            <h1>April Earnings</h1>
            <h2>$272.21</h2>
            <button>Withdraw</button>
          </HeroImageCard>
        </HeroImageContainer>
        <HeroInfoContainer>
          <HeroInfo>
            <h1>Share your unfiltered thoughts. Get paid.</h1>
            <p>
              Spense is an open platform for individuals to share their
              unfiltered thoughts. Discuss the topics you love, and get paid for
              doing just that.
            </p>
            <div className='flex flex-col justify-center'>
              <HeroInfoList>
                <img src={Checkmark} alt='' />
                <h3>Receive 99% off the earnings.</h3>
              </HeroInfoList>
              <HeroInfoList>
                <img src={Checkmark} alt='' />
                <h3>Receive 99% off the earnings.</h3>
              </HeroInfoList>
              <HeroInfoList>
                <img src={Checkmark} alt='' />
                <h3>Receive 99% off the earnings.</h3>
              </HeroInfoList>
            </div>
            <HeroEmailContainer>
              <input type='text' placeholder='john@example.com' />
              <button>Get Started</button>
            </HeroEmailContainer>
          </HeroInfo>
        </HeroInfoContainer>
      </FlexContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    bg-gray-200
    w-full
    flex
    justify-center
    items-center
  `}
`

const FlexContainer = styled.div`
  ${tw`
    flex
    flex-col
    pt-48
    pb-4
    px-4
    max-w-6xl
    md:pt-60
    md:flex-row-reverse
  `}
`

const HeroImageContainer = styled.div`
  ${tw`
    relative
    w-full
    h-full
    md:max-w-[40rem]
    max-h-[45rem]
  `}
`

const HeroImage = styled.div`
  ${tw`
    w-full
    h-auto
  `}

  img {
    ${tw`
      w-full
      h-full
    `}
  }
`

const HeroImageCard = styled.div`
  ${tw`
    absolute
    top-[35px]
    left-[35px]
    bg-white
    p-4
    w-48
    flex
    flex-col
    justify-center
    rounded-lg
  `}

  h1 {
    ${tw`
      py-2
      border-b-2
      font-semibold
      md:text-lg
      lg:text-xl
    `}
  }

  h2 {
    ${tw`
      py-2
      font-semibold
      md:text-lg
      lg:text-xl
    `}
  }

  button {
    ${tw`
      py-2
      bg-black
      text-white
      md:py-2
      md:text-lg
      rounded-md
      hover:bg-gray-700
      cursor-pointer
    `}
  }
`

const HeroInfoContainer = styled.div`
  ${tw`
    py-4
    flex
    flex-col
    justify-center
    items-center
  `}
`

const HeroInfo = styled.div`
  ${tw`
    
  `}

  h1 {
    ${tw`
      text-3xl
      font-semibold
      md:text-4xl
    `}
  }

  p {
    ${tw`
      py-2
      md:text-lg
    `}
  }
`

const HeroInfoList = styled.div`
  ${tw`
    flex
    items-center
    py-2
    transform
    motion-safe:hover:scale-105
    transition-all
    duration-75
    ease-in-out
  `}

  img {
    ${tw`
      w-6
      h-6
      md:w-8
      md:h-8
      mr-3
      pointer-events-none
    `}
  }

  h3 {
    ${tw`
      font-semibold
      text-base
      md:text-lg
      pointer-events-none
    `}
  }
`

const HeroEmailContainer = styled.div`
  ${tw`
    flex
    items-center
    pt-4
  `}

  input {
    ${tw`
      border-2
      border-gray-300
      py-3
      px-3
      rounded-md
      mr-4
    `}
  }

  button {
    ${tw`
      flex
      items-center
      justify-center
      py-3
      px-5
      bg-black
      text-white
      text-base
      font-semibold
      rounded-md
      hover:bg-gray-800
    `}
  }
`

export default Hero
