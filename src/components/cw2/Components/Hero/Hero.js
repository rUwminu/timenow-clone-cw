import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import HeroImg from '../../Assets/hero.png'
import StarIcon from '../../Assets/star.svg'
import Checkmark from '../../Assets/Checkmark.svg'

const Hero = () => {
  return (
    <SectionContainer>
      <HeroContainer>
        <HeroInfo>
          <div className='flex items-center hidden md:inline-flex'>
            <InfoStarImg src={StarIcon} />
            <InfoStarImg src={StarIcon} />
            <InfoStarImg src={StarIcon} />
            <InfoStarImg src={StarIcon} />
            <InfoStarImg src={StarIcon} />
            <p className='font-semibold'>Rated 4.8/5 (243 reviews)</p>
          </div>
          <h1>Create Your portfolio in minutes.</h1>
          <p>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <LinksContainer>
            <button>Start Free Trial</button>
            <a href='#'>View Examples</a>
          </LinksContainer>
          <div className='flex flex-wrap flex-col md:flex-row'>
            <div className='flex items-center mr-4 py-2'>
              <img className='mr-2' src={Checkmark} alt='' />
              <p>No Credit Card Required</p>
            </div>
            <div className='flex items-center py-2'>
              <img className='mr-2' src={Checkmark} alt='' />
              <p>10 Free Templates</p>
            </div>
          </div>
        </HeroInfo>
        <HeroImage>
          <img src={HeroImg} alt='' />
        </HeroImage>
      </HeroContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    w-full
    bg-yellow-50
    flex
    justify-center
    items-center
    pt-20
    pb-10
    px-10
    md:pt-24
    md:pb-44
    lg:px-0
  `}
`

const HeroContainer = styled.div`
  ${tw`
    flex
    flex-col-reverse
    justify-center
    items-center
    md:flex-row
    mx-auto
    w-full
    max-w-6xl
    
  `}
`

const HeroInfo = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    justify-center
    md:items-start
  `}

  h1 {
    ${tw`
      py-6
      text-4xl
      font-semibold
      md:text-5xl
      md:font-bold
    `}
  }

  p {
    ${tw`
      text-lg
    `}
  }
`

const InfoStarImg = styled.img`
  ${tw`
    mr-2
  `}
`

const LinksContainer = styled.div`
  ${tw`
    w-full
    py-4
    flex
    flex-col
    md:flex-row
    justify-center
    md:justify-start
    items-center
  `}

  button {
    ${tw`
      md:mr-8
      py-3
      px-4
      w-full
      md:w-auto
      text-white
      font-semibold
      bg-indigo-700
      rounded-md
      hover:bg-indigo-500
    `}
  }

  a {
    ${tw`
      w-auto
      font-semibold
      text-indigo-700
    `}
  }
`

const HeroImage = styled.div`
  ${tw`
    w-full
    h-full
    flex
    justify-center
    items-center
  `}

  img {
    ${tw`
      w-full
      h-full
      max-w-[24rem]
      max-h-[24rem]
      md:max-w-[38rem]
      md:max-h-[38rem]
    `}
  }
`

export default Hero
