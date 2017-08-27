/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize } from 'styles/base'
import App from './App'

type Props = {
}

const padding = '4.8rem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  min-height: ${props => props.currentHeight};
`

const Header = styled.h1`
  width: 750px;
  margin: 0;
  color: ${colors.black};
  padding-bottom: ${padding};
  margin-top: auto;
  font-size: 4.8rem;
  line-height: 5.4rem; 
  font-family: ${fonts.heading};
  font-weight: 300;
`

const About = styled.p`
  width: 750px;
  margin: 0;
  color: ${colors.black};
  padding-bottom: ${padding};
  font-family: ${fonts.serif};
  font-size: ${fontSize.large};
  line-height: 3.6rem;
`

class Hero extends React.Component<*, Props, *> {
  constructor () {
    super()
    this.state = {
      height: '100vh'
    }
  }

  componentDidMount () {
    this.setHeight()
    window.addEventListener('resize', this.setHeight)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.setHeight)
  }

  setHeight = () => {
    this.setState({
      height: window.innerHeight + 'px'
    })
  }

  render () {
    const { height } = this.state

    return (
      <Container currentHeight={height}>
        <Header>
          I design and build&nbsp;
          <strong>high-performance user interfaces</strong>
          &nbsp;for the web.
        </Header>
        <About>
          I specialize
          in distilling elegant solutions from complexity,
          engineering fast interfaces,
          and simplifying processes.
        </About>
        <App />
      </Container>
    )
  }
}

export default Hero
