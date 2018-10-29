// @flow
import React from 'react'
import styled from 'react-emotion'
import { colors, fonts } from '../../styles/base'

const Header = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 300;
  line-height: 1.2;
  z-index: 200;
  margin-bottom: 0;
  letter-spacing: -1.1;
  position: absolute;
  width: 80vw;
  top: 50%;
  transform: translateY(-50%);
  padding: 2vw;
  font-size: 3.6vw;
  left: 20vw;
  color: ${colors.lightGray};

  & strong {
    color: ${colors.white};
    font-weight: 700;
  }
`

const Hero = () => (
  <Header>
    I design and build <strong>high-performance user&nbsp;interfaces</strong>{' '}
    for the web.
  </Header>
)

export default Hero
