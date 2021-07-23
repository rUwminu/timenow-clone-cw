import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../../Assets/Logo.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='Logo'>
        <img src={Logo} alt='' />
      </div>
      <InnerContainer>
        <SliceContainer>
          <FooterMiddle>
            <MiddlePageLinks>
              <Title>Product</Title>
              <ItemLink href='#'>Homepage</ItemLink>
              <ItemLink href='#'>Pricing</ItemLink>
              <ItemLink href='#'>Feature</ItemLink>
            </MiddlePageLinks>
            <MiddleResourceLinks>
              <Title>Help</Title>
              <ItemLink href='#'>Live Chat</ItemLink>
              <ItemLink href='#'>Send Email</ItemLink>
              <ItemLink href='#'>FAQ</ItemLink>
            </MiddleResourceLinks>
            <RightInfo>
              <Title>Company</Title>
              <ItemLink href='#'>About</ItemLink>
              <ItemLink href='#'>Customers</ItemLink>
              <ItemLink href='#'>Blog</ItemLink>
            </RightInfo>
          </FooterMiddle>
          <FooterRight>
            <RightEmploy>
              <Title className='mb-3'>Try TweetNow</Title>
              <div className='email-box'>
                <input type='text' placeholder='Email address' />
                <button>Start Scheduling</button>
              </div>
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
    flex-col
    justify-center
    py-16
    w-full
    bg-white
  `}

  .Logo {
    ${tw`
        px-6
        lg:px-0
        mx-auto
        w-full
        max-w-6xl
    `}
  }

  img {
    ${tw`
        mr-auto
        h-8
        w-8
    `}
  }
`

const InnerContainer = styled.div`
  ${tw`
    flex
    justify-between
    w-full
    mx-auto
    md:pt-4
    md:max-w-6xl
  `}
`

const SliceContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    md:flex-row
    md:items-center
    justify-between
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

const FooterMiddle = styled.div`
  ${tw`
    px-6
    lg:px-0
    w-full
    flex
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
    mr-16
    flex
    flex-col
  `}
`

const FooterRight = styled.div`
  flex-basis: 40%;

  ${tw`
    px-6
    lg:px-0
    mt-8
    flex
    md:mt-0
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
    relative
    flex
    flex-col
  `}

  input {
    ${tw`
        pl-2
        pr-36
        py-3
        border-2
        rounded-md
        focus:outline-none
        cursor-pointer
    `}
  }

  button {
    ${tw`
        absolute
        right-1
        bottom-[2.5px]
        py-3
        px-3
        text-white
        font-semibold
        bg-blue-900
        transition-all
        duration-200
        ease-in-out
        hover:shadow-md
        hover:bg-blue-800
        rounded-md
    `}
  }
`

export default Footer
