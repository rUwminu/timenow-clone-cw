import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

import ArrowImg from '../asset/images/arrow.png'
import Controller from '../asset/images/controller.png'
import AddImg from '../asset/images/add.png'
import FB from '../asset/images/fb.png'
import TW from '../asset/images/tw.png'
import IG from '../asset/images/ig.png'

import Navbar from '../components/Navbar'

const Hero = () => {
  return (
    <>
      <Navbar />
      <Container>
        <RowContainer>
          <RowCol>
            <h2>
              PS4 V2
              <br />
              Dualshock 4
            </h2>
            <h3>Wireless Controller for PlayStation 4</h3>
            <p>(Compatible/Generic)</p>
            <h4>$39.99</h4>
            <button type='button'>
              Buy Now <img src={ArrowImg} alt='' />
            </button>
          </RowCol>
          <RowColTwo>
            <img src={Controller} alt='' />
            <div className='color-box'></div>
            <div className='add-btn'>
              <img src={AddImg} alt='' />
              <p>
                <small>Add to Cart</small>
              </p>
            </div>
          </RowColTwo>
        </RowContainer>
        <SocialLinks>
          <img src={FB} alt='' />
          <img src={TW} alt='' />
          <img src={IG} alt='' />
        </SocialLinks>
      </Container>
    </>
  )
}

const Container = styled.div`
  ${tw`
    w-full
    h-screen
    px-[8%]
  `}
`

const RowContainer = styled.div`
  ${tw`
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    my-24
  `}
`

const RowCol = styled.div`
  flex-basis: 40%;

  ${tw`
    relative
    ml-16
  `}

  h2 {
    font-weight: bold;
    font-size: 54px;
  }

  h3 {
    font-size: 30px;
    color: #707070;
    font-weight: 100;
    margin: 20px 0 10px;
  }

  p {
    font-size: 16px;
    color: #b7b7b7;
    font-weight: 100;
  }

  h4 {
    margin: 30px 0;
    font-size: 20px;
  }

  button {
    width: 140px;
    padding: 12px 10px;
    color: white;
    background: linear-gradient(to right, #fb5283, #ff3527);
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    img {
      width: 30px;
      display: none;
    }
  }

  button:hover {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button:hover img {
    display: block;
  }

  ::after {
    content: '';
    width: 10px;
    height: 57%;
    background: linear-gradient(#ff469f, #ff6062);
    position: absolute;
    left: -40px;
    top: 8px;
  }
`

const RowColTwo = styled.div`
  flex-basis: 60%;

  ${tw`
    relative
    mt-20
    md:mt-0
    flex
    items-center  
  `}

  img {
    width: 90%;
  }

  p {
    font-weight: bold;
  }

  .color-box {
    position: absolute;
    right: 0;
    top: 0;
    background: linear-gradient(#ff469f, #ff6062);
    border-radius: 20px 0 0 20px;
    height: 100%;
    width: 80%;
    z-index: -1;
    transform: translateX(150px);
  }

  .add-btn img {
    width: 35px;
    margin-bottom: 5px;
  }

  .add-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    cursor: pointer;
  }
`

const SocialLinks = styled.div`
  ${tw`
    flex
    items-center
    justify-center
  `}

  img {
    height: 30px;
    margin: 20px;
    cursor: pointer;
  }
`

export default Hero
