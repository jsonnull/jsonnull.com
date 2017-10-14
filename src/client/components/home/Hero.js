/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, media } from 'styles/base'
import App from 'components/App'

const Container = styled.div`
  position: relative;
  min-height: ${props => props.currentHeight};
  margin: 0 2.4rem;

  ${media.mobile`
    margin: 0 4.8rem;
  `};
  ${media.tabletLarge`
    margin: 0 auto;
    width: 600px;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 12rem;
  padding-bottom: 7.2rem;

  ${media.mobile`
    padding-top: 14.4rem;
  `};
  ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `};
`

const Header = styled.h1`
  margin: 0;
  color: ${colors.black};
  padding: 2.4rem;
  padding-left: 0;
  font-family: ${fonts.heading};
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 1.2;
  background: ${colors.white};
  letter-spacing: -1;
  width: 75%;

  ${media.mobile`
    font-size: 3rem;
  `};
  ${media.tablet`
    font-size: 3.6rem;
  `};

  ${media.tablet`
    font-size: 2.8rem;
  `} ${media.tabletLarge`
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
  color: ${colors.gray};
  padding-bottom: 4.8rem;
  font-family: ${fonts.content};
  font-size: ${fontSize.small};
  background: ${colors.white};
  width: 75%;
  ${media.tablet`
    width: 50%;
    font-size: ${fontSize.normal};
    background: transparent;
  `};
`

const Spacer = styled.div`
  margin-top: auto;
  height: 9.6rem;
`

const AppContainer = styled.div`
  margin-top: 12rem;
  position: absolute;
  top: 0;
  bottom: 2.4rem;
  right: 0;
  left: 0;

  ${media.tablet`
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
            I specialize in distilling elegant solutions from complexity,
            engineering fast interfaces, and simplifying processes.
          </About>
        </Inner>
      </Container>
    )
  }
}

export default Hero
