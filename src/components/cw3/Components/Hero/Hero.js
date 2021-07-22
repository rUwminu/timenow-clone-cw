import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Avatars from '../../Assets/Avatars.svg'
import HeroImg from '../../Assets/Feed.png'

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <HeroInfo>
          <h1>
            Your weekly
            <br /> personal feed digest.
          </h1>
          <p>
            With IndieBrew, get personal feeds from resources all around the
            web, including Reddit, HackerNews, IndieHackers, and much more.
          </p>
          <button>Get Started - it's free</button>
          <img src={Avatars} alt='' />
          <p>
            Join <span>32,642</span> IndieBrews in curation their personal
            digest.
          </p>
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
    px-8
    lg:px-0
    pt-40
    pb-20
    h-auto
    md:pb-44
    md:h-screen
    w-full
    bg-gradient-to-br
    from-purple-300
    to-yellow-50
  `}
`

const HeroContainer = styled.div`
  ${tw`
    w-full
    max-w-6xl
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
    mx-auto
  `}
`

const HeroInfo = styled.div`
  ${tw`
    w-full
  `}

  h1 {
    ${tw`
      pb-2
      text-4xl
      md:text-5xl
      font-bold
    `}
  }

  p {
    ${tw`
      py-2
      md:text-lg
    `}
  }

  button {
    ${tw`
      py-2
      px-4
      mt-2
      mb-6
      text-center
      text-white
      bg-indigo-500
      rounded-md
      transition-all
      duration-200
      ease-in-out
      hover:shadow-md
      hover:bg-indigo-600
      focus:bg-indigo-700
    `}
  }

  span {
    ${tw`
      font-semibold
      text-indigo-500
    `}
  }
`

const HeroImage = styled.div`
  ${tw`
    w-full
    pb-10
    md:pb-0
  `}

  img {
    ${tw`
      w-full
      h-full
    `}
  }
`

export default Hero
