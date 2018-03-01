import React from 'react'
import Wrapper from '../../../components/Wrapper'
import Links from '../../../components/navigation/Links'
import Title from '../../../components/navigation/Title'
import Footer from '../../../components/navigation/Footer'
import Hero from '../../../components/home/Hero'
import Capabilities from '../../../components/home/Capabilities'
import styled from 'styled-components'

const Home = props => (
  <Wrapper>
    <Hero />
    <Capabilities />

    <Footer />

    <Title />
    <Links />
  </Wrapper>
)

export default Home
