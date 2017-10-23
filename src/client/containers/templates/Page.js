import React from 'react'
import styled from 'styled-components'
import Wrapper from 'components/Wrapper'
import Section from 'components/Section'
import Content from 'components/Content'
import Title from 'components/navigation/Title'
import Links from 'components/navigation/Links'
import Footer from 'components/navigation/Footer'

const Page = props => (
  <Wrapper>
    <Section>
      <Content {...props} />
    </Section>
    <Title />
    <Links />
    <Footer />
  </Wrapper>
)

export default Page
