import React from 'react'
import Wrapper from 'components/Wrapper'
import Links from 'components/navigation/Links'
import Title from 'components/navigation/Title'
import Footer from 'components/navigation/Footer'
import Hero from 'components/home/Hero'
import Interests from 'components/home/Interests'
import Projects from 'components/home/Projects'
import styled from 'styled-components'

const Home = props => (
  <Wrapper>
    <Hero />
    <Interests />
    <Projects />

    <Footer />

    <Title />
    <Links />
  </Wrapper>
)

export default Home
