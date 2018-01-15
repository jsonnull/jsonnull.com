// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, media } from '../../styles/base'
import App from '../App'
import Section from '../Section'

const Header = styled.h1`
  font-size: ${fontSize.large};
  font-family: ${fonts.heading};
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -1.1;
  background: ${colors.white};
  color: ${colors.black};
  z-index: 200;

  ${media.tablet`
    position: absolute;
    width: 60vw;
    left: 2.4rem;
    top: 50%;
    transform: translateY(-5.84vw); // (3.2 * 2 * 1.2 + 4) / 2
    padding: 2vw;
    padding-left: 0;
    font-size: 3.2vw;
    width: 55vw;
    left: 15vw;
  `};

  & strong {
    font-weight: 700;
  }
`

const About = styled.p`
  color: ${colors.darkGray};
  font-family: ${fonts.content};
  line-height: 2;
  font-size: ${fontSize.small};
  margin: 2.4rem 0;
  ${media.tablet`
    font-size: 1.2vw;
    position: absolute;
    left: 15vw;
    top: 50%;
    transform: translateY(3.4vw);
    padding: 2vw;
    padding-left: 0;
    width: 35vw;
  `};
`

const AppContainer = styled.div`
  height: 140px;
  ${media.tablet`
    display: block;
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    width: 35vw;
    height: 28vw;
    transform: translateY(-14vw);
  `};
`

const headerMixin = css`
  ${media.tablet`
    position: relative;
    min-height: calc(100vh - 24rem);
    margin-bottom: 12rem;
  `};

  ${media.desktop`
    min-height: 100vh;
  `};
`

const Hero = () => (
  <Section mixin={headerMixin}>
    <Header>
      I design and build <strong>
        high-performance user&nbsp;interfaces
      </strong>{' '}
      for the web.
    </Header>
    <About>
      I craft elegant interfaces, engineer fast systems, and find simple
      solutions to complex problems.
    </About>
    <AppContainer>
      <App />
    </AppContainer>
  </Section>
)

export default Hero
