import React from 'react'
import Links from 'components/Links'
import Title from 'components/Title'
import Footer from 'components/Footer'
import Hero from 'components/home/Hero'
import Interests from 'components/home/Interests'
import Projects from 'components/home/Projects'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const Home = props => (
  <Container>
    <Hero />
    <Interests />
    <Projects />

    <Footer />

    <Title />
    <Links />
  </Container>
)

export default Home
