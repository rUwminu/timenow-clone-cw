import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import UserData from '../../Data/UserReview'

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <FooterAbout>
          <Title>Fiber</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veritatis repudiandae fugiat consequatur ea, inventore totam fuga
            corporis porro rem?
          </p>
          <p>
            Made with <span>&#9829;</span> in the Netherlands.
          </p>
        </FooterAbout>
        <SliceContainer>
          <FooterMiddle>
            <MiddlePageLinks>
              <Title>Sitemap</Title>
              <ItemLink href='#'>Homepage</ItemLink>
              <ItemLink href='#'>Pricing</ItemLink>
              <ItemLink href='#'>Testimonials</ItemLink>
              <ItemLink href='#'>Features</ItemLink>
            </MiddlePageLinks>
            <MiddleResourceLinks>
              <Title>Resources</Title>
              <ItemLink href='#'>Support</ItemLink>
              <ItemLink href='#'>Contact</ItemLink>
              <ItemLink href='#'>FAQ</ItemLink>
            </MiddleResourceLinks>
          </FooterMiddle>
          <FooterRight>
            <RightInfo>
              <Title>Company</Title>
              <ItemLink href='#'>About</ItemLink>
              <ItemLink href='#'>Customers</ItemLink>
              <ItemLink href='#'>Blog</ItemLink>
            </RightInfo>
            <RightEmploy>
              <Title>Portfolios</Title>
              {UserData.slice(0, 3).map((user) => (
                <ItemLink href='#'>{user.username}</ItemLink>
              ))}
            </RightEmploy>
          </FooterRight>
        </SliceContainer>
      </InnerContainer>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-full
    bg-yellow-50
  `}
`

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
    py-8
    px-10
    w-full
    lg:px-0
    md:max-w-6xl
  `}
`

const SliceContainer = styled.div`
  ${tw`
    flex-grow
    flex
    flex-col
    mt-8
    md:flex-row
    lg:mt-0
    lg:justify-around
  `}
`

const Title = styled.h1`
  ${tw`
    text-black
    font-bold
    md:text-lg
  `}
`

const ItemLink = styled.a`
  ${tw`
    text-black
    py-2
    font-semibold
    hover:text-indigo-700
  `}
`

const FooterAbout = styled.div`
  ${tw`
    mr-16
  `}

  p {
    ${tw`
        py-2
        text-black
        max-w-[320px]
    `}
  }
`

const FooterMiddle = styled.div`
  ${tw`   
    flex
    md:justify-between
    mr-16
    lg:mr-0
  `}
`

const MiddlePageLinks = styled.div`
  ${tw`
    mr-16
    flex
    flex-col
  `}
`

const MiddleResourceLinks = styled.div`
  ${tw`
    flex
    flex-col
  `}
`

const FooterRight = styled.div`
  ${tw`
    mt-8
    flex
    md:mt-0
    md:justify-between
  `}
`

const RightInfo = styled.div`
  ${tw`
    flex
    flex-col
    mr-16
  `}
`

const RightEmploy = styled.div`
  ${tw`
    flex
    flex-col
  `}
`

export default Footer
