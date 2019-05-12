// @flow
import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import {
  background,
  color,
  underlineIn,
  underlineOut
} from '../../../styles/links'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4.8rem;
`

const Quote = styled.p`
  margin: 0;
  margin-top: auto;
  color: ${colors.gray800};
  font-size: ${fontSize.small};
  font-family: ${fonts.serif};
`

const Attrib = styled.span`
  color: ${colors.gray700};
`

const Source = styled.div`
  margin-left: auto;
  color: ${colors.gray900};
  display: block;
  font-size: ${fontSize.small};

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.gray900)} ${underlineOut};
  }

  a:hover {
    text-shadow: none;
    ${underlineIn};
  }
`

const Footer = () => (
  <Wrapper>
    <Quote>
      "It is the power of the mind to be unconquerable."
      <Attrib> —&nbsp;Seneca</Attrib>
    </Quote>
    <Source>
      <a
        href="https://github.com/jsonnull/jsonnull.com"
        target="_blank"
        rel="noopener"
      >
        Source on GitHub
      </a>
    </Source>
  </Wrapper>
)
// <Social>
// <Icon name="github" href="https://github.com/jsonnull" />
// <Icon name="twitter" href="https://twitter.com/jsonnull" />
// </Social>

export default Footer
