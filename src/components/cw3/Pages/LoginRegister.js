import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import tw from 'twin.macro'
import styled from 'styled-components'

import Logo from '../Assets/Logo.svg'
import BackArrow from '../Assets/BackArrow.svg'

const LoginRegister = () => {
  const [typeLogin, setTypeLogin] = useState(true)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreement, setAgreement] = useState(false)
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

    const data = {
      email,
      username,
      password,
    }

    if (typeLogin) {
      console.log(data)

      setEmail('')
      setPassword('')
    } else {
      if (agreement) {
        console.log(data)

        setEmail('')
        setUsername('')
        setPassword('')
      } else {
        console.log('Pls check agreement')
      }
    }
  }

  const handleHome = () => {
    history.push('/indiebrew-clone-cw')
  }

  return (
    <Container>
      <NavContainer>
        <NavLogoC onClick={handleHome}>
          <img src={Logo} alt='' />
        </NavLogoC>
        <NavLinkC onClick={handleHome}>
          <div>
            <img src={BackArrow} alt='' />
          </div>
          <h1>Back to homepage</h1>
        </NavLinkC>
      </NavContainer>
      <MainContianer>
        <InfoCard>
          <h1>Create your personalized feed.</h1>
          <InfoList>
            <div>&#x1F388;</div>
            <p>
              <span>Over 20 resources.</span> With resources ranging from Reddit
              to indieHackers, we've got all your needs covered.
            </p>
          </InfoList>
          <InfoList>
            <div>&#x1F5DE;</div>
            <p>
              <span>Over 20 resources.</span> With resources ranging from Reddit
              to indieHackers, we've got all your needs covered.
            </p>
          </InfoList>
          <InfoList>
            <div>&#x1F4A1;</div>
            <p>
              <span>Over 20 resources.</span> With resources ranging from Reddit
              to indieHackers, we've got all your needs covered.
            </p>
          </InfoList>
        </InfoCard>
        <RegisterCard>
          <h1>
            {typeLogin ? 'Login to IndieBrew' : 'Create your IndieBrew Account'}
          </h1>
          <div>
            <LabelText>Email</LabelText>
            <Inputbox
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='john@example.com'
            />
          </div>
          {!typeLogin && (
            <div>
              <LabelText>Full Name</LabelText>
              <Inputbox
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='John Doe'
              />
            </div>
          )}
          <div>
            <LabelText>Password</LabelText>
            <Inputbox
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='At least 8 characters'
            />
          </div>
          <CheckBoxContainer className={`${typeLogin && 'hidden'}`}>
            <input
              className='cursor-pointer'
              type='checkbox'
              onChange={(e) => handleCheckbox(e.target.checked)}
            />
            <label>
              By creating an account on Fiber, you agree to the <br />
              <a href='#'>Terms & Conditions</a>.
            </label>
          </CheckBoxContainer>
          <button onClick={(e) => handleSubmit(e)}>
            {typeLogin ? 'Login to Account' : 'Create an Account'}
          </button>
          {typeLogin ? (
            <h4 className='mt-2'>
              Don't have an account?{' '}
              <span
                onClick={() => setTypeLogin(false)}
                className='cursor-pointer font-semibold text-indigo-800'
              >
                Register here
              </span>
            </h4>
          ) : (
            <h4 className='mt-2'>
              Already have an account?{' '}
              <span
                onClick={() => setTypeLogin(true)}
                className='cursor-pointer font-semibold text-indigo-800'
              >
                Sign in
              </span>
            </h4>
          )}
        </RegisterCard>
      </MainContianer>
    </Container>
  )
}

const Container = styled.div`
  ${tw`
    flex
    flex-col    
    items-center
    w-full
    h-screen
    px-4
    xl:px-0
    h-screen
    bg-pink-100
  `}
`

const NavContainer = styled.div`
  ${tw`
    flex
    w-full
    max-w-6xl
    items-center
    justify-between
    py-12
  `}
`

const NavLogoC = styled.div`
  ${tw`
    cursor-pointer
  `}
`

const NavLinkC = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    cursor-pointer
  `}

  div {
    ${tw`
        py-2
        px-3
        border
        border-gray-300
        rounded-md
        bg-gray-50
    `}
  }

  h1 {
    ${tw`
        hidden
        md:inline-flex
        pl-3
        font-bold
        transition-all
        duration-75
        ease-in-out
    `}
  }

  :hover {
    div {
      ${tw`
        shadow-md
       `}
    }

    h1 {
      ${tw`
        mr-1
      `}
    }
  }
`

const MainContianer = styled.div`
  ${tw`
    h-full
    w-full
    max-w-6xl
    flex
    flex-col
    md:flex-row
    items-center
    pb-20
  `}
`

const InfoCard = styled.div`
  ${tw`
    h-full
    w-full
    pb-4
    md:pt-28
  `}

  h1 {
    ${tw`
        md:w-[65%]
        pb-4
        text-3xl
        font-bold
    `}
  }
`

const InfoList = styled.div`
  ${tw`
    flex
    pb-4
  `}

  div {
    ${tw`
        pr-2
    `}
  }

  p {
    ${tw`
        w-full
        md:w-[60%]
    `}
  }
`

const RegisterCard = styled.div`
  ${tw`
    h-full
    w-full
    md:max-w-[50%]
    p-10
    bg-white
    rounded-md
  `}

  h1 {
    ${tw`
        pb-6
        text-2xl
        font-semibold
    `}
  }

  div {
    ${tw`
        mb-6
    `}
  }

  button {
    ${tw`
        py-3
        w-full
        text-white
        font-semibold
        bg-indigo-500
        rounded-md
        hover:bg-indigo-600
        transition-all
        duration-200
        ease-in-out
        focus:bg-indigo-700
        hover:shadow-lg
    `}
  }
`

const LabelText = styled.h3`
  ${tw`
    py-2
    font-semibold
  `}
`

const Inputbox = styled.input`
  ${tw`
    w-full
    py-2
    px-3
    border
    rounded-md
    focus:outline-none
    focus:border-black
  `}
`

const CheckBoxContainer = styled.div`
  ${tw`
    flex
  `}

  label {
    ${tw`
        -mt-1
        ml-2
        font-semibold
    `}

    a {
      ${tw`
        underline
        text-indigo-500
        hover:text-indigo-400
      `}
    }
  }
`

export default LoginRegister
