// @flow
import React from 'react'
import styled from 'styled-components'
import Section from '../Section'
import Heading from '../Heading'
import { fonts } from '../../styles/base'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Profile = styled.img.attrs({
  src:
    'https://pbs.twimg.com/profile_images/916123501290979328/Wl3zvfQP_400x400.jpg'
})`
  width: 100%;
  border-radius: 20px;
`
const Description = styled.p`
  font-family: ${fonts.content};
  margin: 0 0 1em;
`

const ColumnRight = styled.div`width: 200px;`
const ColumnLeft = styled.div`flex: 1;`

const About = () => (
  <div>
    <Section>
      <Heading>Me</Heading>
      <Row>
        <ColumnLeft>
          <Description>Text?</Description>
        </ColumnLeft>
        <ColumnRight>
          <Profile />
        </ColumnRight>
      </Row>
    </Section>
    <Section>
      <Heading>This Site</Heading>
    </Section>
  </div>
)

export default About
