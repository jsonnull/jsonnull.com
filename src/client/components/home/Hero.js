// @flow
import React from 'react'
import styled, { css } from 'styled-components'
import { colors, fonts, fontSize, media } from '../../styles/base'
import App from '../App'
import Section from '../Section'

const Header = styled.h1`
  font-size: ${fontSize.huge};
  font-family: ${fonts.heading};
  font-weight: 300;
  line-height: 1.2;
  color: ${colors.black};
  z-index: 200;
  margin-bottom: 4.8rem;

  ${media.mobile`
    font-size: ${fontSize.huge};
  `};
  ${media.tablet`
    margin-bottom: 0;
    letter-spacing: -1.1;
    color: ${colors.white};
    position: absolute;
    width: 60vw;
    top: 50%;
    transform: translateY(-50%);
    padding: 2vw;
    font-size: 3.6vw;
    width: 58vw;
    left: 20vw;
  `};

  & strong {
    font-weight: 700;
  }
`

const About = styled.p`
  color: ${colors.darkGray};
  // font-family: ${fonts.content};
  line-height: 2;
  font-size: ${fontSize.small};
  margin: 2.4rem 0;
  z-index: 200;
  ${media.tablet`
    color: ${colors.white};
    margin: 0;
    font-size: 1.2vw;
    position: absolute;
    left: 20vw;
    top: 50%;
    font-weight: 400;
    // transform: translateY(5.84vw);
    transform: translateY(4vw);
    padding: 2vw;
    width: 35vw;
  `};
`

const AppContainer = styled.div`
  height: 200px;
  ${media.tablet`
    display: block;
    position: absolute;
    z-index: 100;
    top: 50%;
    transform: translateY(-50%);
    left: 19vw;
    width: 62vw;
    height: 39vw;
  `};
`

const headerMixin = css`
  transition: transform 0s linear;

  ${media.tablet`
    position: relative;
    min-height: calc(100vh - 24rem);
    margin-bottom: 12rem;
  `};

  ${media.desktop`
    min-height: 100vh;
  `};
`

export default class Hero extends React.Component<*, *> {
  scrollY: number
  lock: boolean

  constructor() {
    super()
    this.state = { top: 0 }
    this.scrollY = 0
    this.lock = false
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.onScroll)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onScroll)
    }
  }

  onScroll = () => {
    if (window.scrollY > window.innerHeight) {
      return
    }
    if (!this.lock) {
      window.requestAnimationFrame(() => {
        this.setState({ top: window.scrollY })
        this.lock = false
      })
      this.lock = true
    }
  }

  render() {
    const style = {
      transform: `translateY(${this.state.top * 0.4}px)`
    }

    return (
      <Section mixin={headerMixin} style={style}>
        <Header>
          I design and build{' '}
          <strong>high-performance user&nbsp;interfaces</strong> for the web.
        </Header>
        {/*
  <About>
    I craft elegant interfaces, engineer fast systems, and find simple
    solutions to complex problems.
  </About>
  */}
        <AppContainer>
          <App />
        </AppContainer>
      </Section>
    )
  }
}
