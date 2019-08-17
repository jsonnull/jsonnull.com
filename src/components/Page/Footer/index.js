// @flow
import React from 'react'
import styled from '@emotion/styled'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import { noUnderline } from '../../../styles/links'
import Icon from './Icon'

const paddingDesktop = '4.8rem'

const Social = styled.div`
  margin-top: auto;
`

const Wrapper = styled.div`
  display: none;

  ${media.tablet} {
    display: flex;
    flex-direction: row;
    padding: ${paddingDesktop};
  }
`

// eslint-disable-next-line
const Quote = styled.p`
  margin: 0;
  margin-top: auto;
  color: ${colors.gray500};
  font-size: ${fontSize.small};
  font-family: ${fonts.serif};
`

const Source = styled.div`
  margin-left: auto;
  display: block;
  font-size: ${fontSize.small};

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${colors.gray500};
    transition: color 200ms ease;
    ${noUnderline};
  }

  a:hover {
    color: ${colors.gray900};
  }
`

const Footer = () => (
  <Wrapper>
    {/*
    <Quote>
      "It is the power of the mind to be unconquerable." –&nbsp;Seneca
    </Quote>
		*/}
    <Social>
      <Icon name="github" href="https://github.com/jsonnull" />
      <Icon name="twitter" href="https://twitter.com/jsonnull" />
    </Social>
    <Source>
      <a
        href="https://github.com/jsonnull/jsonnull.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source on GitHub
      </a>
    </Source>
  </Wrapper>
)

export default Footer
