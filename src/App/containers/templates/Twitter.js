import React from 'react'
import App from 'App/components/App'
import styled from 'styled-components'
import { colors, fonts, fontSize } from 'styles/base'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  width: 800px;
  height: 421px;
`

const Headline = styled.h1`
  margin: auto 0 0;
  color: ${colors.black};
  padding-bottom: 4.8rem;
  font-family: ${fonts.heading};
  font-weight: 700;
  font-size: ${fontSize.huge};
  line-height: 3rem;
  text-align: center;
`

const Twitter = props => (
  <Container>
    <Headline>jsonnull</Headline>
    <App />
  </Container>
)

export default Twitter
