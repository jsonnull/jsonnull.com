import React from 'react'
import styled from 'styled-components'
import Wrapper from '../../../components/Wrapper'
import Section from '../../../components/Section'
import Heading from '../../../components/Heading'
import Inner from '../../../components/work'
import Title from '../../../components/navigation/Title'
import Links from '../../../components/navigation/Links'
import Footer from '../../../components/navigation/Footer'

const Work = props => (
  <Wrapper>
    <Section>
      <Heading>Projects</Heading>
      <Inner />
    </Section>
    <Title />
    <Links />
    <Footer />
  </Wrapper>
)

export default Work
