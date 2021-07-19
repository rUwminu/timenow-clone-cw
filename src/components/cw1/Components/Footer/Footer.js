import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <FooterAbout>
          <Title>spense.</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            veritatis repudiandae fugiat consequatur ea, inventore totam fuga
            corporis porro rem?
          </p>
        </FooterAbout>
        <SliceContainer>
          <FooterMiddle>
            <MiddlePageLinks>
              <Title>Sitemap</Title>
              <ItemLink href='#'>Homepage</ItemLink>
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
              <Title>Opportunities</Title>
              <ItemLink href='#'>Jobs</ItemLink>
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
    bg-black
  `}
`

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    justify-between
    py-8
    px-4
    w-full
    md:px-0
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
    text-white
    font-semibold
    md:text-lg
  `}
`

const ItemLink = styled.a`
  ${tw`
    text-white
    py-2
  `}
`

const FooterAbout = styled.div`
  ${tw`
    mr-16
  `}

  p {
    ${tw`
        py-2
        text-white
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
