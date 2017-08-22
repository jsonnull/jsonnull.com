import React from 'react'
import Links from 'App/components/Links'
import Title from 'App/components/Title'
import Footer from 'App/components/Footer'
import Hero from './Hero'
import Interests from './Interests'
import Projects from './Projects'
import styled from 'styled-components'
import style from 'styles/base'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
`

const Home = props => (
  <Container>
    <Title />
    <Links />
    <Content>
      <Hero />
      <Interests />
      <Projects />
    </Content>
    <Footer />
  </Container>
)

export default Home
