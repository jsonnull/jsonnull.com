import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import {
  background,
  color,
  underlineIn,
  underlineOut
} from '../../styles/links'
import Overlay from './Overlay'

const Background = styled.div`
  background: ${colors.black};
  padding: 2.4rem;
  position: relative;
  margin-top: auto;
  ${media.mobile`
    padding: 4.8rem 0;
  `};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;

  ${media.desktop`
    margin: 0 200px;
  `};
  ${media.desktopHuge`
    margin: 0 auto;
    width: 1000px;
  `};
`

const Quote = styled.p`
  margin: 0;
  font-family: ${fonts.serif};
  color: ${colors.darkGray};
  font-size: ${fontSize.normal};
  padding-top: 100px;
`

const Attrib = styled.span`
  font-family: ${fonts.base};
  color: ${colors.darkGray};
  font-size: ${fontSize.small};
`

const Footer = props => (
  <Background>
    <Overlay
      background={colors.black}
      isMouseOver={props.isMouseOver}
      zOffset={99}
    />
    <Content>
      <Quote>
        "It is the power of the mind to be unconquerable."
        <Attrib> —&nbsp;Seneca</Attrib>
      </Quote>
    </Content>
  </Background>
)

export default Footer
