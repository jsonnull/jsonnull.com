// @flow
import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import {
  background,
  color,
  underlineIn,
  underlineOut
} from '../../styles/links'

const Background = styled.div`
  background: ${colors.gray100};
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
  ${media.mobile`
    margin: 0 4.8rem;
  `};
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
  color: ${colors.gray400};
  font-size: ${fontSize.normal};
  padding-top: 100px;
`

const Attrib = styled.span`
  font-family: ${fonts.base};
  color: ${colors.gray400};
  font-size: ${fontSize.small};
`

const Source = styled.div`
  margin-top: auto;
  line-height: $lineUnit;
  color: ${colors.gray500};
  text-align: right;
  font-size: ${fontSize.tiny};
  display: none;

  ${media.desktop`
    display: block;
    font-size: ${fontSize.small};
  `};
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.gray500)} ${underlineOut};
  }

  a:hover {
    text-shadow: none;
    ${underlineIn};
  }
`

const Footer = props => (
  <Background>
    <Content>
      <Quote>
        "It is the power of the mind to be unconquerable."
        <Attrib> —&nbsp;Seneca</Attrib>
      </Quote>
    </Content>
  </Background>
)
// <Source>
// <a
// href="https://github.com/jsonnull/jsonnull.com"
// target="_blank"
// rel="noopener"
// >
// Source on GitHub
// </a>
// </Source>
// <Social>
// <Icon name="github" href="https://github.com/jsonnull" />
// <Icon name="twitter" href="https://twitter.com/jsonnull" />
// </Social>

export default Footer
