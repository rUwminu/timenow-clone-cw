import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import HeroImg from '../../Assets/Mockup.png'
import Checkmark from '../../Assets/Checkmark.svg'

const Hero = () => {
  return (
    <Section>
      <HeroBgColor className={`hidden md:inline-flex`}>
        <div className='left'></div>
        <div className='right'></div>
      </HeroBgColor>

      <HeroContainer>
        <HeroInfo>
          <h1>Post when your audience is most active.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nihil distinctio quia ratione hic reiciendis error odio natus ut
            quas.
          </p>
          <ButtonContainer>
            <button>Start Scheduling</button>
            <a href='#'>View Demo</a>
          </ButtonContainer>
          <SecureContainer>
            <img src={Checkmark} alt='' />
            <p>
              TimeNow does not sell your data. <span>Learn More</span>
            </p>
          </SecureContainer>
        </HeroInfo>
        <HeroImage>
          <img src={HeroImg} alt='' />
        </HeroImage>
      </HeroContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    relative 
    mx-auto
    w-full
    md:h-screen
    pt-32
    md:pt-0
    z-0
  `}
`

const HeroBgColor = styled.div`
  ${tw`
    absolute
    top-0
    h-full
    w-full
    flex
    items-center
    justify-center
  `}

  .left {
    ${tw`
      w-full
      h-full
    `}
  }

  .right {
    ${tw`
      w-full
      h-full
      bg-blue-400
    `}
  }
`

const HeroContainer = styled.div`
  ${tw`
    relative
    h-full
    w-full
    max-w-6xl
    mx-auto
    md:pt-16
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
    z-10
  `}
`

const HeroInfo = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    justify-center
    px-6
    lg:px-0
  `}

  h1 {
    ${tw`
      text-4xl
      lg:text-5xl
      font-semibold
    `}
  }

  p {
    ${tw`
      md:w-[80%]
      py-4
      text-base
      md:text-lg
    `}
  }
`

const HeroImage = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    items-center
    justify-center
    bg-blue-400
    py-10
    px-6
    md:py-0
    lg:px-0
  `}

  img {
    ${tw`
      lg:mr-[-10rem]
      w-full
      max-w-xl
    `}
  }
`

const ButtonContainer = styled.div`
  ${tw`
      w-full
      flex
      md:flex-col
      lg:flex-row
      md:justify-center
      lg:justify-start
      items-center
      md:items-start
      lg:items-center
  `}

  button {
    ${tw`
      py-3
      px-6
      w-auto
      font-semibold
      text-lg
      text-white
      bg-blue-900
      rounded-md
      transition-all
      duration-200
      ease-in-out
      hover:bg-blue-800
      hover:shadow-md
    `}
  }

  a {
    ${tw`
      ml-8
      md:ml-0
      md:mt-4
      lg:mt-0
      lg:ml-8
      px-4
      text-lg
      font-semibold
      cursor-pointer
      hover:border-b-4
      border-black
      transition-all
      duration-75
      ease-in-out
    `}
  }
`

const SecureContainer = styled.div`
  ${tw`
    flex
    items-center
    pb-4
    md:pb-0
  `}

  p {
    ${tw`
      ml-4
    `}
  }
`

export default Hero
