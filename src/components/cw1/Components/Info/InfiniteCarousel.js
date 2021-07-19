import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Drib from '../../Assets/Drib.png'
import Facebook from '../../Assets/Facebook.png'
import Google from '../../Assets/Google.png'
import Pinterest from '../../Assets/Pinterest.png'
import Reddit from '../../Assets/Reddit.png'
import Twitter from '../../Assets/Twitter.png'
import Youtube from '../../Assets/Youtube.png'

const InfiniteCarousel = () => {
  return (
    <InfiniteScrollCarousel>
      <InfiniteTrack>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Drib} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Facebook} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Google} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Pinterest} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 h-9 md:40' src={Reddit} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Twitter} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Youtube} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Drib} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Facebook} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Google} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 md:40' src={Pinterest} alt='' />
        </InfiniteSlide>
        <InfiniteSlide>
          <img className='w-36 h-9 md:40' src={Reddit} alt='' />
        </InfiniteSlide>
      </InfiniteTrack>
    </InfiniteScrollCarousel>
  )
}

const InfiniteScrollCarousel = styled.div`
  ${tw`
    bg-white
    h-[100px]
    w-full
    max-w-[960px]
    overflow-hidden
    relative
    m-auto
  `}

  :before, :after {
    content: '';
    z-index: 2;

    ${tw`
      absolute
      w-[150px]
      h-[100px]
      bg-gradient-to-l
      from-transparent
      to-white
    `}
  }

  :before {
    top: 0;
    left: 0;
  }

  :after {
    top: 0;
    right: 0;
    transform: rotateZ(180deg);
  }
`

const InfiniteTrack = styled.div`
  ${tw`
    flex
  `}

  width: calc(250px * 14);
  animation: scroll 40s infinite linear;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-1750px);
    }
  }
`

const InfiniteSlide = styled.div`
  ${tw`
    w-[180px]
    md:w-[250px]
    h-[100px]
    flex
    justify-center
    items-center
  `}

  img {
    ${tw`
      object-contain
    `}
  }
`

export default InfiniteCarousel
