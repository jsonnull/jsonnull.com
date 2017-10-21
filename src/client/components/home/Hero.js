// @flow
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, media } from 'styles/base'
import App from 'components/App'

const Container = styled.div`
  position: relative;
  min-height: ${props => props.currentHeight};
  background: linear-gradient(-45deg, ${colors.blue} 0%, ${colors.gray} 100%);

  ${media.tablet`
    background: none;
  `};
  ${media.tabletLarge`
    width: 600px;
    margin: 0 auto;
  `};
  ${media.desktopLarge`
    width: 800px;
  `};
  ${media.desktopHuge`
    width: 1000px;
  `};
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 2.4rem;
  right: 2.4rem;
  bottom: 0;
  top: 7.2rem;

  ${media.mobile`
    top: 12rem;
    left: 4.8rem;
    right: 4.8rem;
  `};
  ${media.tabletLarge`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 14.4rem;
    padding-bottom: 7.2rem;
  `};
  ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `};
`

const Header = styled.h1`
  margin: 0;
  color: ${colors.white};
  padding: 2.4rem;
  padding-left: 0;
  font-family: ${fonts.heading};
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -1;
  width: 270px;

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
    margin-bottom: 2.4rem;
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
    height: 12rem;
  `};
  ${media.desktop`
    height: 9.6rem;
  `};
`

const AppContainer = styled.div`
  display: none;

  ${media.tablet`
    display: block;
    height: 50%;
    width: 50%;
    margin-top: auto;
    margin-left: auto;
    margin-bottom: auto;
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
    this.setState({
      height: window.innerHeight + 'px'
    })
  }

  render() {
    const { height } = this.state

    return (
      <Container currentHeight={height}>
        <Inner>
          <AppContainer>
            <App />
          </AppContainer>
        </Inner>
        <Inner>
          <Spacer />
          <Header>
            I design and build{' '}
            <strong>high-performance user&nbsp;interfaces</strong> for the web.
          </Header>
          <About>
            I craft elegant interfaces, engineer fast systems, and find simple
            solutions to complex problems.
          </About>
        </Inner>
      </Container>
    )
  }
}

export default Hero
