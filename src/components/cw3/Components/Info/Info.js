import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import PhoneImg from '../../Assets/Phone.png'
import SocialImg from '../../Assets/Social.png'

const Info = () => {
  return (
    <Section>
      <FeatureMain>
        <ResourceContainer>
          <ResourceInfo>
            <Title>Curate your feed from dozens of resources.</Title>
            <TextBody>
              We cover all major platgorms where one could want to curate their
              feed from. Reddit, ProductHunt, IndieHacker, and so mouch more.
            </TextBody>
            <Links href='#'>{`See full list of resources ->`}</Links>
          </ResourceInfo>
          <ResourceImg>
            <img src={SocialImg} alt='' />
          </ResourceImg>
        </ResourceContainer>
        <FeatureContainer>
          <FeatureInfo>
            <Title>Access your feed from the comfort of your phone.</Title>
            <TextBody>
              With native apps for both iOS and Android, accessing your curated
              content has never been easies.
            </TextBody>
            <Links href='#'>{`Sign up for the waitlist ->`}</Links>
          </FeatureInfo>
          <FeatureImg>
            <img src={PhoneImg} alt='' />
          </FeatureImg>
        </FeatureContainer>
      </FeatureMain>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    w-full
    pb-20
    flex
    items-center
    justify-center
  `}
`

const FeatureMain = styled.div`
  ${tw`
    px-8
    lg:px-0
    w-full
    max-w-6xl
  `}
`

const ResourceContainer = styled.div`
  ${tw`
    py-20
    flex
    flex-col-reverse
    md:flex-row
    items-center
    justify-center
  `}
`

const ResourceInfo = styled.div`
  ${tw`
    w-full
  `}
`

const ResourceImg = styled.div`
  ${tw`
    mb-6
    lg:mb-0
    flex
    justify-center
    lg:justify-end
    w-full
  `}

  img {
    ${tw`
      max-w-[26rem]
    `}
  }
`

const FeatureContainer = styled.div`
  ${tw`
    flex
    flex-col-reverse
    md:flex-row-reverse
    justify-center
    items-center
  `}
`

const FeatureInfo = styled.div`
  flex-basis: 60%;

  ${tw`
    lg:w-3/4
  `}
`

const FeatureImg = styled.div`
  flex-basis: 40%;

  ${tw`
    w-full
    mb-16
    lg:mb-0
  `}

  img {
    ${tw`
    `}
  }
`

const Title = styled.h1`
  ${tw`
    text-3xl
    md:text-5xl
    font-semibold
  `}
`

const TextBody = styled.p`
  ${tw`
    md:text-lg
    py-4
  `}
`

const Links = styled.a`
  ${tw`
    font-bold
    text-indigo-600
    hover:ml-2
    transition-all
    duration-200
    ease-in-out
  `}
`

export default Info
