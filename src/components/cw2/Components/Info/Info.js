import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'

// SVG & img
import TimerSvg from '../../Assets/time.svg'
import CodeSvg from '../../Assets/code.svg'
import AllSizeSvg from '../../Assets/allSizes.svg'
import PageImg from '../../Assets/Page.png'

import UserData from '../../Data/UserReview'

const Info = () => {
  return (
    <SectionContainer>
      <Container id='feature'>
        <TitleContainer>
          <h2>Why Fiber?</h2>
          <h1>A good portfolio means good employability</h1>
        </TitleContainer>
        <FeaturesContainer>
          <Feature>
            <img src={TimerSvg} alt='' />
            <h3>Build in minutes</h3>
            <p>
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </p>
          </Feature>
          <Feature>
            <img src={CodeSvg} alt='' />
            <h3>Build in minutes</h3>
            <p>
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </p>
          </Feature>
          <Feature>
            <img src={AllSizeSvg} alt='' />
            <h3>Build in minutes</h3>
            <p>
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </p>
          </Feature>
        </FeaturesContainer>
        <ProjectContainer id='price'>
          <ProjectInfo>
            <h1>Diversify your portfolio.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quo
              tenetur ex debitis obcaecati odio recusandae in inventore
              cupiditate fugit?
            </p>
            <button>Start Free Trial</button>
          </ProjectInfo>
          <ProjectImg>
            <img src={PageImg} alt='' />
          </ProjectImg>
        </ProjectContainer>
        <UserReviewContainer id='card'>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className='mySwiper'
          >
            {UserData.map((review) => (
              <SwiperSlide
                key={review.id}
                className='px-10 py-6 border-2 rounded-lg '
              >
                <UserInfoContainer>
                  <div className='flex items-center py-4'>
                    <img className='w-16 h-16' src={review.image} alt='' />
                    <UserDetail>
                      <h1>{review.username}</h1>
                      <h2>{review.revenue} in revenue</h2>
                    </UserDetail>
                  </div>
                  <UserReview>
                    <p>{review.review}</p>
                    <button>
                      View {review.username.split(' ').slice(0, -1)}'s Portfolio
                    </button>
                  </UserReview>
                </UserInfoContainer>
              </SwiperSlide>
            ))}
          </Swiper>
        </UserReviewContainer>
      </Container>
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    py-20
    px-10
    lg:px-0
  `}
`

const Container = styled.div`
  ${tw`
    w-full
    md:max-w-6xl
    h-full
    flex
    flex-col
    justify-center
  `}
`

const TitleContainer = styled.div`
  ${tw`

  `}

  h2 {
    ${tw`
      pb-2
      text-lg
      font-bold
      text-indigo-700
    `}
  }

  h1 {
    ${tw`
      w-[65%]
      md:w-[50%]
      pb-4
      text-2xl
      md:text-4xl
      font-bold
    `}
  }
`

const FeaturesContainer = styled.div`
  ${tw`
    pb-14
    flex
    flex-wrap
    items-center
    justify-between
  `}
`

const Feature = styled.div`
  ${tw`
    py-4
    w-[21.2rem]
    flex
    flex-col
    justify-center
  `}

  img {
    ${tw`
      w-8
      h-8
      md:w-10
      md:h-10
    `}
  }

  h3 {
    ${tw`
      pt-2
      pb-3
      font-bold
    `}
  }

  p {
    ${tw`
      text-lg
    `}
  }
`

const ProjectContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    md:flex-row
    items-center
    justify-center
    bg-indigo-700
    rounded-xl
    px-10
    pt-12
  `}
`

const ProjectInfo = styled.div`
  ${tw``}

  h1 {
    ${tw`
      py-2
      text-4xl
      text-white
      font-bold
      md:text-5xl
    `}
  }

  p {
    ${tw`
      pb-4
      text-lg
      text-white
      md:text-xl
    `}
  }

  button {
    ${tw`
      w-full
      md:w-40
      py-3
      mb-4
      font-bold
      text-xl
      text-indigo-700
      bg-white
      rounded-md
      hover:bg-gray-200
    `}
  }
`

const ProjectImg = styled.div`
  ${tw`
    
  `}

  img {
    ${tw`
      h-full
      w-full
      md:max-w-[80rem]
      object-cover
      object-right-bottom
    `}
  }
`

const UserReviewContainer = styled.div`
  ${tw`
    mt-14
    w-full
  `}
`

const UserInfoContainer = styled.div`
  ${tw`
    w-full
  `}
`

const UserDetail = styled.div`
  ${tw`
    ml-4
  `}

  h1 {
    ${tw`
      font-bold
      text-lg
      text-indigo-700
    `}
  }

  h2 {
    ${tw`
      text-base
      font-semibold
      md:text-lg
    `}
  }
`

const UserReview = styled.div`
  ${tw`

  `}

  p {
    ${tw`
      pb-6
      text-base
      font-semibold
      md:text-lg
    `}
  }

  button {
    ${tw`
      py-3
      w-full
      bg-none
      font-bold
      text-indigo-700
      border-2
      rounded-lg
    `}
  }
`

export default Info
