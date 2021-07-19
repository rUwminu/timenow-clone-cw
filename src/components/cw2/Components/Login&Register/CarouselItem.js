import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const CarouselItem = ({ item }) => {
  const { img, title, info } = item

  return (
    <ItemContainer>
      <ImgContainer>
        <Image src={img} alt='' />
      </ImgContainer>
      <TextContainer>
        <h1>{title}</h1>
        <p>{info}</p>
      </TextContainer>
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  min-height: 37.2em;
  max-height: 37.2em;

  ${tw`
    flex
    flex-col
    items-center
    w-full
    max-w-2xl
  `}
`

const ImgContainer = styled.div`
  ${tw`
    w-full
    h-[25rem]
  `}
`

const Image = styled.img`
  ${tw`
    w-full
    h-full
    object-cover
    bg-no-repeat
  `}
`

const TextContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    justify-center
    items-center
  `}

  h1 {
    ${tw`
      text-center
      text-white
      text-4xl
      font-semibold
      mt-4
      py-4
      lg:text-5xl
    `}
  }

  p {
    ${tw`
      pb-2
      text-white
      text-xl
      text-center
    `}
  }
`

export default CarouselItem
