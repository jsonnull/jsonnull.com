/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, media } from 'styles/base'
import App from 'components/App'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${props => props.currentHeight};
  margin: 0 2.4rem;
  padding-top: 12rem;
  padding-bottom: 7.2rem;

  ${media.mobile`
    margin: 0 4.8rem;
    padding-top: 14.4rem;
  `} ${media.tablet`
    margin: 0 auto;
    width: 700px;
  `} ${media.desktop`
    padding-top: 0;
    padding-bottom: 0;
  `} ${media.desktopHuge`
    width: 1000px;
  `};
`

const Header = styled.h1`
  margin: auto 0 0;
  color: ${colors.black};
  padding-bottom: 4.8rem;
  font-family: ${fonts.heading};
  font-weight: 300;
  font-size: ${fontSize.large};
  line-height: 3rem;

  ${media.mobile`
    font-size: ${fontSize.huge};
    line-height: 3.6rem;
  `} ${media.tablet`width: 500px;`} ${media.desktopLarge`width: 600px;`} ${media.desktopHuge`
    font-size: 4.8rem;
    line-height: 5.4rem; 
    width: 750px;
  `};
`

const About = styled.p`
  margin: 0;
  color: ${colors.black};
  padding-bottom: 4.8rem;
  font-family: ${fonts.content};
  font-size: ${fontSize.normal};
  line-height: 2.4rem;
  ${media.tablet`width: 500px;`} ${media.desktopHuge`
    font-family: ${fonts.serif};
    font-size: ${fontSize.large};
    line-height: 3.6rem;
    width: 750px;
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
        <Header>
          I design and build{' '}
          <strong>high-performance user&nbsp;interfaces</strong> for the web.
        </Header>
        <About>
          I specialize in distilling elegant solutions from complexity,
          engineering fast interfaces, and simplifying processes.
        </About>
        <App />
      </Container>
    )
  }
}

export default Hero
