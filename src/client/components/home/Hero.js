// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, media } from '../../styles/base'
import App from '../App'
import Section from '../Section'

const Header = styled.h1`
  margin: 0;
  color: ${colors.white};
  padding: 2.4rem;
  padding-left: 0;
  font-family: ${fonts.heading};
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -1.1;
  width: 270px;
  z-index: 200;

  ${media.mobile`
    font-size: 3.6rem;
    width: 330px;
  `};
  ${media.tablet`
    font-size: 3.6rem;
    width: 75%;
    background: ${colors.white};
    color: ${colors.black};
  `};
  ${media.tabletLarge`
    font-size: 2.8rem;
    margin: 2.4rem 0;
  `};
  ${media.desktopLarge`
    font-size: 3.6rem;
  `};
  ${media.desktopHuge`
    font-size: 4.8rem;
  `};

  & strong {
    font-weight: 700;
  }
`

const About = styled.p`
  margin: 0 0 auto;
  color: ${colors.white};
  font-family: ${fonts.content};
  line-height: 2;
  font-size: ${fontSize.small};
  width: 270px;
  ${media.tablet`
    width: 50%;
    font-size: ${fontSize.normal};
    color: ${colors.darkGray};
  `};
`

const Spacer = styled.div`
  margin-top: auto;

  ${media.tablet`
    height: 9.6rem;
  `};
  ${media.desktop`
    height: 6.4rem;
  `};
`

const AppContainer = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 25%;
  bottom: 25%;
  z-index: 100;
  right: 4.8rem;

  ${media.tablet`
    display: block;
  `};
  ${media.tabletLarge`
    right: auto;
    width: 300px;
  `};
  ${media.desktopLarge`
    width: 400px;
  `};
  ${media.desktopHuge`
    width: 500px;
  `};
`

const headerMixin = css`
  background: linear-gradient(-45deg, ${colors.blue} 0%, ${colors.gray} 100%);
  ${media.tablet`
    background: none;
  `};
`

type Props = {}
type State = {
  height: string
}

class Hero extends React.Component<Props, State> {
  constructor() {
    super()
    this.state = {
      height: '100vh'
    }
  }

  componentDidMount() {
    this.setHeight()
    window.addEventListener('resize', this.setHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeight)
  }

  setHeight = () => {
    const height = window.innerHeight
    const width = window.innerWidth

    let newHeight = height
    if (width < 800) {
      newHeight = height - 72
    } else if (width < 1050) {
      newHeight = height - 120
    }

    this.setState({
      height: newHeight + 'px'
    })
  }

  render() {
    const { height } = this.state

    return (
      <Section mixin={headerMixin} style={{ minHeight: height }}>
        <Spacer />
        <Header>
          I design and build{' '}
          <strong>high-performance user&nbsp;interfaces</strong> for the web.
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
  }
}

export default Hero
