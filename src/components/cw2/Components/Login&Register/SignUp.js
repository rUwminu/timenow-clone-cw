import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

import data from '../../Data/DummyData.js'

import CarouselItem from './CarouselItem'

const SignUp = () => {
  const [current, setCurrent] = useState(0)
  const [typeLogin, setTypeLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreement, setAgreement] = useState(false)
  const numberOfDots = data.length
  const history = useHistory()

  const handleCheckbox = (e) => {
    if (e) {
      setAgreement(true)
    } else {
      setAgreement(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (typeLogin === true) {
      const inputData = {
        email,
        password,
      }
      setEmail('')
      setPassword('')
      history.push('/')
    } else {
      if (agreement === false) {
        console.log('false')
      } else {
        const inputData = {
          email,
          username,
          password,
        }
        setTypeLogin(true)
        setUsername('')
        setEmail('')
        setPassword('')
        setAgreement(false)
      }
    }
  }

  return (
    <Container>
      <LoginRegisterContainer>
        <LoginRegisterCard>
          <h3>Fiber</h3>
          <h1>{typeLogin ? 'Login To Fiber' : 'Create your Fiber account'}</h1>
          <InputContainer className={`${typeLogin && 'hidden'}`}>
            <InputLabel>Your Name</InputLabel>
            <InputBox
              placeholder='John Doe'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>E-mail</InputLabel>
            <InputBox
              placeholder='john@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>Password</InputLabel>
            <InputBox
              type='password'
              placeholder='At least 8 characters'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <CheckBoxContainer className={`${typeLogin && 'hidden'}`}>
            <input
              type='checkbox'
              onChange={(e) => handleCheckbox(e.target.checked)}
            />
            <label>
              By creating an account on Fiber, you agree to the{' '}
              <a href='#'>Terms & Conditions</a>.
            </label>
          </CheckBoxContainer>
          <Button
            onClick={(e) => handleSubmit(e)}
            className={`${typeLogin && 'mt-2'}`}
          >
            {typeLogin ? 'Login Fiber Account' : 'Create Fiber Account'}
          </Button>

          {typeLogin ? (
            <h4>
              Don't have an account?{' '}
              <span
                onClick={() => setTypeLogin(false)}
                className='cursor-pointer font-semibold text-indigo-800'
              >
                Register in
              </span>
            </h4>
          ) : (
            <h4>
              Already have an account?{' '}
              <span
                onClick={() => setTypeLogin(true)}
                className='cursor-pointer font-semibold text-indigo-800'
              >
                Sign in
              </span>
            </h4>
          )}
        </LoginRegisterCard>
      </LoginRegisterContainer>
      <CardContainer className='hidden md:inline-flex'>
        <CarouselContainer>
          <Carousel value={current} onChange={setCurrent}>
            {data.map((item, index) => (
              <CarouselItem key={index} item={item} />
            ))}
          </Carousel>
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarouselContainer>
      </CardContainer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    w-screen
    h-screen
  `}
`

const LoginRegisterContainer = styled.div`
  ${tw`
    w-full
    md:w-[50%]
    flex
    justify-center
    items-center
  `}
`

const LoginRegisterCard = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    w-full
    px-4
    md:px-10
    lg:px-24
    xl:px-28
    max-w-2xl
  `}

  h3 {
    ${tw`
      font-bold
      md:text-lg
    `}
  }

  h1 {
    ${tw`
      font-bold
      text-2xl
      md:text-3xl
      py-8
    `}
  }

  h4 {
    ${tw`
      py-3
      text-center
    `}
  }
`

const InputContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    w-full
    mb-4
  `}
`

const InputLabel = styled.label`
  ${tw`
    mb-1
    font-semibold
    md:text-lg
  `}
`

const InputBox = styled.input`
  ${tw`
    py-1
    px-3
    border-2
    border-gray-100
    rounded-md
    lg:max-w-lg
    focus:outline-none
  `}
`

const CheckBoxContainer = styled.div`
  ${tw`
    flex
    justify-center
    mb-4
    ml-auto
  `}

  input {
    ${tw`
      mt-1
      mr-2
    `}
  }

  label {
    ${tw`
      font-semibold
      md:text-lg
      lg:max-w-lg
    `}
  }

  a {
    ${tw`
      underline
      text-indigo-800   
    `}
  }
`

const Button = styled.button`
  ${tw`
    w-full
    py-3
    text-white
    font-semibold
    bg-indigo-800
    rounded-md
    hover:bg-indigo-600
    lg:max-w-lg
  `}
`

const CardContainer = styled.div`
  ${tw`
    h-full
    w-[50%]
    flex
    justify-center
    items-center
    bg-indigo-700
  `}
`

const CarouselContainer = styled.div`
  ${tw`
      px-4
      md:px-10
      xl:px-32
      w-full
      flex
      flex-wrap
      justify-center
  `}
`

export default SignUp
