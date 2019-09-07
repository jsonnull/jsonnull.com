// @flow
import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts, media } from '../styles/base'

const w = 70
const h = 25
const fontSize = 5

const paddingMobile = '2.4rem'

const HeroArea = styled.div`
  font-weight: 400;
  width: 100%;
  margin: 0 ${paddingMobile};

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    width: ${w}vw;
    min-height: ${h}vw;
    margin: auto;
    position: relative;
  }

  ${media.desktop} {
    width: ${12 * w}px;
    min-height: ${12 * h}px;
  }
`

const App = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
    position: absolute;
    margin-left: 50%;
    width: 50%;
    height: 100%;
    background: ${colors.gray900};
    overflow: hidden;
    border-radius: 8px;
  }
`

const Text = styled.h1`
  font-family: ${fonts.heading};
  font-weight: 300;
  color: black;
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-size: 3.6rem;
  margin-top: 3em;

  ${media.tablet} {
    margin: auto 0;
    font-size: ${fontSize}vw;
  }

  ${media.desktop} {
    font-size: ${12 * fontSize}px;
  }

  /* TODO: Use App & selector instead */
  .app & {
    color: white;
  }
`

const Heavy = styled.div`
  font-weight: 400;
`

const InnerHeroArea = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -100%;
`

const Title = () => {
  return (
    <Text>
      <Heavy>web experience</Heavy>
      designer &amp; developer
    </Text>
  )
}

const Hero = () => {
  return (
    <HeroArea>
      <Title />
      <App className="app">
        <InnerHeroArea>
          <Title />
        </InnerHeroArea>
      </App>
    </HeroArea>
  )
}

export default Hero
