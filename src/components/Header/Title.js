/* @flow */
import React from 'react'
import styled from 'react-emotion'
import map from 'styled-map'
import { Link } from 'gatsby'
import { colors, fonts, fontSize, lineUnit, media } from '../../styles/base'
import { color, underlineIn, underlineOut } from '../../styles/links'

const Title = styled.h1`
  font-size: ${fontSize.normal};
  font-family: ${fonts.heading};
  line-height: ${lineUnit};
  height: ${lineUnit};
  z-index: 700;

  font-weight: ${map`
    inverted: 400;
    default: 700;
  `};

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
    ${props =>
      props.inverted
        ? color(colors.white)
        : color(colors.black)} ${underlineOut};
    background-position: 0 100%;
  }

  a:hover {
    text-shadow: none;
    ${underlineIn};
  }
`

const TitleEl = ({ inverted }) => (
  <Title inverted={inverted}>
    <Link to="/">Jason Nall</Link>
  </Title>
)

export default TitleEl
