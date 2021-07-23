import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import UserAvatar1 from '../../Assets/UA1.png'
import UserAvatar2 from '../../Assets/UA2.png'
import UserAvatar3 from '../../Assets/UA3.png'
import UserAvatar4 from '../../Assets/UA4.png'
import UserAvatar5 from '../../Assets/UA5.png'
import UserAvatar6 from '../../Assets/UA6.png'
import UserAvatar7 from '../../Assets/UA7.png'
import UserAvatar8 from '../../Assets/UA8.png'

const Info = () => {
  return (
    <Section>
      <IntroContainer>
        <div className='top-user'>
          <h1>TimeNow is used by the most influential people.</h1>
          <div className='user-img'>
            <img src={UserAvatar1} alt='' />
            <img src={UserAvatar2} alt='' />
            <img src={UserAvatar3} alt='' />
            <img src={UserAvatar4} alt='' />
            <img src={UserAvatar5} alt='' />
            <img src={UserAvatar6} alt='' />
            <img src={UserAvatar7} alt='' />
            <img src={UserAvatar8} alt='' />
          </div>
        </div>
        <div className='info-text'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            modi perspiciatis. Rerum expedita asperiores in voluptate cum
            recusandae. Porro, deleniti sint. Officiis dignissimos repellat
            inventore eum incidunt nesciunt unde qui.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            pariatur.
          </p>
        </div>
      </IntroContainer>
      <FeatureContainer>
        <FeatureBgColor></FeatureBgColor>
        <FeatureFlexContainer>
          <FeatureCard>
            <h3>Unified Dashboard</h3>
            <h1>Customizable dashboard for all plaforms.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              ullam dolorum maxime. Temporibus illum tempore odit animi, ducimus
              repellat blanditiis perferendis a sequi praesentium. Alias
              incidunt corrupti vero et dolores.
            </p>
            <button>Start Scheduling</button>
          </FeatureCard>
          <FeatureCard className='md:pl-28'>
            <h3>Unified Dashboard</h3>
            <h1>Customizable dashboard for all plaforms.</h1>
            <p className='pb-9'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              ullam dolorum maxime. Temporibus illum tempore odit animi, ducimus
              repellat blanditiis perferendis a sequi praesentium. Alias
              incidunt corrupti vero et dolores.
            </p>
            <a href='#'>{`View Live Demo ->`}</a>
          </FeatureCard>
        </FeatureFlexContainer>
      </FeatureContainer>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
  `}
`

const IntroContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    justify-center
    w-full
    max-w-6xl
    mx-auto
    py-10
    md:py-20
    px-6
    lg:px-0
  `}

  .top-user {
    ${tw`
      h-full
      w-full
    `}

    h1 {
      ${tw`
        mb-8
        text-2xl
        md:text-4xl
        text-blue-900
        font-bold
      `}
    }
  }

  .user-img {
    ${tw`
      h-full
      w-full
      flex
      flex-wrap
      items-center
    `}

    img {
      ${tw`
        w-12
        h-12
        mr-4
        mb-2
      `}
    }
  }

  .info-text {
    ${tw`
      w-full
    `}

    p {
      ${tw`
        md:pl-20
        md:text-lg
      `}
    }

    p:nth-child(1) {
      ${tw`
        pt-4
        md:pt-0
        mb-4
      `}
    }
  }
`

const FeatureContainer = styled.div`
  ${tw`
    relative
    w-full
    px-6
    lg:px-0
    z-0
  `}
`

const FeatureBgColor = styled.div`
  z-index: -1;

  ${tw`
    absolute
    top-0
    bottom-0
    left-0
    right-0
    bg-blue-300
  `}
`

const FeatureFlexContainer = styled.div`
  z-index: 1;

  ${tw`
    mx-auto
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
  `}
`

const FeatureCard = styled.div`
  ${tw`
    py-6
    md:py-12
    w-full
    h-full
  `}

  h3 {
    ${tw`
      text-blue-800
      font-semibold
    `}
  }

  h1 {
    ${tw`
      py-4
      text-2xl
      md:text-3xl
      lg:text-4xl
      text-green-900
      font-bold
    `}
  }

  p {
    ${tw`
      pb-4
      md:text-lg
    `}
  }

  button {
    ${tw`
      py-3
      px-4
      text-white
      font-semibold
      bg-blue-900
      rounded-md
      transition-all
      duration-200
      ease-in-out
      hover:shadow-md
      hover:bg-blue-800
    `}
  }

  a {
    ${tw`
      -mt-2
      font-bold
      text-lg
      transition-all
      duration-200
      ease-in-out
      border-black
      hover:border-l-4
      hover:pl-2
    `}
  }
`

export default Info
