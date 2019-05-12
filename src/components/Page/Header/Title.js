/* @flow */
import React from 'react'
import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { Link } from 'gatsby'
import { colors, fonts, fontSize, lineUnit, media } from '../../../styles/base'
import { color, underlineIn, underlineOut } from '../../../styles/links'

const Title = styled.h1`
  font-size: ${fontSize.normal};
  font-family: ${fonts.heading};
  line-height: ${lineUnit};
  position: absolute;

  font-weight: ${ifProp('inverted', '400', '700')};

  ${media.mobile`
    font-size: ${fontSize.large};
  `};

  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    transition: background-size 100ms ease;
    text-shadow: none;
    ${color(colors.gray900)} ${underlineOut};
    background-position: 0 100%;
  }

  a:hover {
    text-shadow: none;
    ${underlineIn};
  }
`

const TitleEl = () => (
  <Title>
    <Link to="/">jsonnull</Link>
  </Title>
)

export default TitleEl
