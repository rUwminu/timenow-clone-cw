import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import InfiniteCarousel from './InfiniteCarousel'

import PhoneImg from '../../Assets/Phone.png'
import EditorImg from '../../Assets/Editor.png'

const InfoSection = () => {
  return (
    <SectionContainer>
      <InfiniteCarousel />
      <InfoContainer>
        <h1>Secure your money with Escrow</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          esse consequuntur maiores ducimus perferendis dolor minus tempora, non
          eveniet ex?
        </p>
      </InfoContainer>
      <IntroContainer>
        <EditorImgContainer>
          <EditorImg1 src={EditorImg} />
        </EditorImgContainer>
        <EditorIntro>
          <h1>A text editor like no other.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            corrupti laboriosam veritatis repellat quaerat inventore minima
            praesentium perspiciatis voluptatibus quia.
          </p>
        </EditorIntro>
      </IntroContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    items-center
    py-5
  `}
`

const InfoContainer = styled.div`
  ${tw`
    mt-4
    mx-4
    max-w-6xl
    bg-gray-200
    py-12
    px-12
    rounded-md
    md:mx-0
  `}

  h1 {
    ${tw`
      text-2xl
      md:text-4xl
      font-semibold
      md:font-bold
    `}
  }

  p {
    ${tw`
      text-base
      md:text-lg
      py-2
    `}
  }
`

const IntroContainer = styled.div`
  ${tw`
    pt-10
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    justify-center
    items-center
  `}
`

const EditorImgContainer = styled.div`
  ${tw`
    flex-grow
    w-full
    h-full
  `}
`

const EditorImg1 = styled.img`
  ${tw`
    w-full
    h-full
  `}
`

const EditorIntro = styled.div`
  flex-basis: 70%;

  ${tw`
    h-full
  `}

  h1 {
    ${tw`
      text-3xl
      text-center
      font-semibold
      md:text-5xl
      md:text-left
    `}
  }

  p {
    ${tw`
      py-4
      px-4
      text-lg
      text-center
      md:px-0
      md:text-xl
      md:text-left
    `}
  }
`

export default InfoSection
