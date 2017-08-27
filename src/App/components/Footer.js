import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize } from 'styles/base'
import Overlay from 'App/components/Overlay'
import Title from 'App/components/Title'
import Links from 'App/components/Links'

const Background = styled.div`
  background: ${colors.black};
  padding: 14.4rem 0;
  position: relative;
`

const Content = styled.div`
  position: relative;
  width: 1000px;
  margin: 0 auto;
`

const Quote = styled.p`
  font-family: ${fonts.serif};
  color: ${colors.gray};
  font-size: ${fontSize.large};
  width: 50%;
  line-height: 3.6rem;
  margin: 0 25%;
`

const Attrib = styled.span`
  font-family: ${fonts.serif};
  color: ${colors.gray};
  font-size: ${fontSize.normal};
  margin: 0 25%;
  width: 50%;
  display: block;
  text-align: right;
  line-height: 3.6rem;
`

const Footer = props => (
  <Background>
    <Content>
      <Quote>
        "Though we travel the world over to find the beautiful, we must carry it with us, or we find it not."
      </Quote>
      <Attrib>
        —Ralph Waldo Emerson
      </Attrib>
    </Content>
    <Overlay>
      <Title />
      <Links background={colors.black} />
    </Overlay>
  </Background>
)

export default Footer
