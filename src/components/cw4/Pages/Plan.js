import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import data from '../Data/data'

import Checkmark from '../Assets/Checkmark.svg'

const Plan = () => {
  let typeSelect = 'month'
  const [typeBill, setTypeBill] = useState(true)
  const [product, setProduct] = useState([])

  const handleType = () => {
    setTypeBill(!typeBill)

    // typeBill status is getting the old value, setTypeBill is called but the line below run first before new states is assign
    if (typeBill === true) {
      typeSelect = 'year'
    } else {
      typeSelect = 'month'
    }

    getProduct()
  }

  const getProduct = () => {
    const listProduct = data.filter((item) => {
      return item.type.includes(typeSelect)
    })

    setProduct(listProduct)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <Section>
      <Container>
        <h1>Flexible Plans for Everyone.</h1>
        <p>
          Our plans are made for everyone. Whether you're just starting out on
          social media, or have been on there for a long time, we have a plan
          that's right for you.
        </p>
        <SelectionContainer>
          <h2 className={`${typeBill && 'font-bold'}`}>Billed Monthly</h2>
          <SelectBar className={`${typeBill ? 'bg-blue-400' : 'bg-red-400'}`}>
            <SelectBtn
              onClick={handleType}
              className={`${
                typeBill
                  ? 'translate-x-0 border-blue-400'
                  : 'translate-x-full border-red-400'
              }`}
            />
          </SelectBar>
          <h2 className={`${!typeBill && 'font-bold'}`}>Billed Yearly</h2>
        </SelectionContainer>
        <CardContainer>
          {product.map((item) => {
            const { id, price, info, feature } = item
            return (
              <PlanCard key={id}>
                <h1>
                  ${price}
                  <span>{typeBill ? '/mo' : '/year'}</span>
                </h1>
                <p>{info}</p>
                <BenefitList>
                  {feature.map((item, index) => (
                    <Benefit key={index}>
                      <img src={Checkmark} alt='' />
                      <p>{item}</p>
                    </Benefit>
                  ))}
                </BenefitList>
                <button>Subscribe Now</button>
              </PlanCard>
            )
          })}
        </CardContainer>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  ${tw`
    w-full
    flex
    items-center
    justify-center
    pt-28
    md:pt-36
  `}
`

const Container = styled.div`
  ${tw` 
    flex
    flex-col
    items-center
    justify-center
    w-full
    max-w-6xl
    mx-auto
  `}

  h1 {
    ${tw`
        text-3xl
        md:text-4xl
        lg:text-5xl
        font-bold
    `}
  }

  p {
    ${tw`
        py-3
        w-full
        max-w-sm
        md:max-w-md
        lg:max-w-2xl
        text-center
    `}
  }
`

const SelectionContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-around
  `}

  h2 {
    ${tw`
      w-32
      text-center
      transition-all
      duration-75
      ease-in-out
    `}
  }
`

const SelectBar = styled.div`
  ${tw`
    relative
    flex
    items-center
    h-8
    pl-1
    pr-8
    mx-2
    rounded-full
  `}
`

const SelectBtn = styled.div`
  ${tw`
    w-7
    h-7
    bg-white
    border-2
    rounded-full
    cursor-pointer
    transition-all
    duration-300
    ease-in-out
  `}
`

const CardContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-wrap
    md:flex-row
    justify-around
    pt-10
  `}
`

const PlanCard = styled.div`
  ${tw`
    flex
    flex-col
    p-7
    border-2
    h-auto
    w-full
    max-w-[19rem]
    rounded-md
    mb-6
    md:mb-0
  `}

  span {
    ${tw`
        text-lg
        md:text-xl
        font-normal
    `}
  }

  p {
    ${tw`
        pb-4
        text-left
        border-b-2
    `}
  }

  button {
    ${tw`
        mt-auto
        py-3
        w-full
        text-lg
        text-white
        font-semibold
        bg-blue-900
        rounded-md
        hover:bg-blue-800
        hover:shadow-md
        transition-all
        duration-300
        ease-in-out
    `}
  }

  :nth-child(3) {
    ${tw`
        md:max-w-[45rem]
        lg:max-w-[19rem]
        md:mt-6
        lg:mt-0
        flex-grow
    `}
  }
`

const BenefitList = styled.div`
  ${tw`
    py-6
  `}
`

const Benefit = styled.div`
  ${tw`
    mb-2
    h-7
    flex
    items-center
    justify-center
  `}

  img {
    ${tw`
        h-full
    `}
  }

  p {
    ${tw`
        ml-2
        pt-0
        pb-0
        border-none
    `}
  }
`

export default Plan
